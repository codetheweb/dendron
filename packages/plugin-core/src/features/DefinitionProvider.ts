import { NoteUtils, VaultUtils } from "@dendronhq/common-all";
import fs from "fs-extra";
import _ from "lodash";
import vscode, { Location, Position, Uri } from "vscode";
import { findHeaderPos, GotoNoteCommand } from "../commands/GotoNote";
import { PickerUtilsV2 } from "../components/lookup/utils";
import { Logger } from "../logger";
import { getReferenceAtPosition } from "../utils/md";
import { DendronWorkspace } from "../workspace";

export default class DefinitionProvider implements vscode.DefinitionProvider {
  public async provideDefinition(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken
  ): Promise<vscode.Location | vscode.Location[] | undefined> {
    const refAtPos = getReferenceAtPosition(document, position);
    if (!refAtPos) {
      return;
    }
    let vault = undefined;
    const engine = DendronWorkspace.instance().getEngine();
    if (refAtPos.vaultName) {
      try {
        vault = VaultUtils.getVaultByName({
          vaults: engine.vaultsv3,
          vname: refAtPos.vaultName,
        });
      } catch (err) {
        Logger.error({ msg: `${refAtPos.vaultName} is not defined` });
      }
    }
    const notes = NoteUtils.getNotesByFname({
      fname: refAtPos.ref,
      notes: engine.notes,
      vault,
    });
    const uris = notes.map((note) =>
      Uri.file(NoteUtils.getPathV4({ note, wsRoot: DendronWorkspace.wsRoot() }))
    );
    const out = uris.map((uri) => new Location(uri, new Position(0, 0)));
    if (out.length > 1) {
      return out;
    } else if (out.length === 1) {
      const loc = out[0];
      if (refAtPos.anchor) {
        const text = fs.readFileSync(loc.uri.fsPath, { encoding: "utf8" });
        const pos = findHeaderPos({
          anchor: refAtPos.anchor.value,
          text,
        });
        return new Location(loc.uri, pos);
      }
      return loc;
    } else {
      const vault = PickerUtilsV2.getOrPromptVaultForOpenEditor();
      const out = await new GotoNoteCommand().execute({
        qs: refAtPos.ref,
        mode: "note" as const,
        vault,
        anchor: refAtPos.anchor,
      });
      if (_.isUndefined(out)) {
        return;
      }
      const { note, pos } = out;
      return new Location(
        Uri.file(
          NoteUtils.getPathV4({ note, wsRoot: DendronWorkspace.wsRoot() })
        ),
        pos ? pos : new Position(0, 0)
      );
    }
  }
}
