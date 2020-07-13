

# Dendron

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/logo-256.png)



A knowledge management tool that **grows** as you do.

Dendron is a local-first, markdown based, hierarchical note taking application built on top of [vscode](https://code.visualstudio.com/) and [friends](./ACKNOWLEDGEMENTS.md).

Think of it as a **second brain** to help you **make sense** of all the information you care about. 

- TODO: VIDEO

# Problem Statement

> "We are overwhelmed with information and we don't have the tools to properly index and filter through it. [The development of these tools, which] will give society access to and command over the inherited knowledge of the ages [should] be the first objective of our scientist" - Vannevar Bush, 1945

Every knowledge management tool today suffers from the problem of information overload - the more information you put in, the harder it becomes to get any of it back out again.

The burning need for a tool that would not only overcome this problem but actually work better in the presence of more information was the basis of this project.

Wheter you have a few dozen notes or a few thousand, Dendron helps you organize your collection into flexible hierarchies that you can lookup again later. 

# Core Features

### hierarchical lookup

Find, create and explore notes stored in a hierarchy 

- TODO: programming example

### flexible schemas

An optional type system for your notes and hiearchies.

- TODO: screenshot of lookup schema

### vaults

Grow, share, and collaborate on an ever expanding store of knowledge (coming soon)

# More Features

These features are enabled through third party extensions that are installed alongside Dendron.

- [live markdown preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [wiki links](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)
- [tags](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)
- [backlinks](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)
- [math](https://shd101wyy.github.io/markdown-preview-enhanced/#/math) (KaTeX or MathJax)
- [sequence diagrams](https://shd101wyy.github.io/markdown-preview-enhanced/#/diagrams?id=mermaid) (mermaid)
- [pandoc support](https://shd101wyy.github.io/markdown-preview-enhanced/#/pandoc)
- [code chunks](https://shd101wyy.github.io/markdown-preview-enhanced/#/code-chunk)
- [presentations](https://rawgit.com/shd101wyy/markdown-preview-enhanced/master/docs/presentation-intro.html)

# Getting Started

Dendron can be installed as a [vscode plugin](https://marketplace.visualstudio.com/items?itemName=dendron.dendron). If you don't already have vscode, you can download it [here](https://code.visualstudio.com/).

After you have downloaded the plugin, following the instructions to create your first **workspace**. 

1. Launch the *command bar*:
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+SHIFT+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `CMD+SHIFT+P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+SHIFT+P`

2. Paste the following command and press `Enter`:

```sh
> Dendron: Initialize Workspace
```

![Initialize workspace](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/dendron-init.gif)

When the workspace opens, it will show a dialogue to install the recommended extensions. Though not required, these extensions add all the **non-core** features of Dendron like wiki links and tagging support.

# Contributing

We welcome community contributions and pull requests. See [[CONTRIBUTING]] for information on how to set up a development environment and submit code.

# License

Dendron is distributed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3.

See [[LICENSE]] and [[NOTICE]] for more information.

