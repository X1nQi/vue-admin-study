

# NPM、Node、NVM

# NPM

## 常用命令

- **npm init**：用于在项目目录下初始化一个`package.json`​文件
- **npm install [package-name]** ：安装指定的包作为项目依赖（生产依赖）。会被记录在package.json中的`dependencies`​中

  - **npm install [package-name]**   **-D**：安装指定的包作为依赖依赖（开发依赖）。在项目部署到生产环境时，默认情况下这些依赖不会被安装，会被记录在package.json中的`dependencies`​ 中
  - **npm install -g [package-name]** ：全局安装包，通过-g安装的包会被安装到系统中Node.js的全局安装目录中，这样在任何项目中都可以使用这个包。
  - **npm install [package-name] --save**：主要作用是在安装包的同时，将该包的信息添加到package.json文件中的`dependencies`​ 字段中，<span data-type="text" style="color: var(--b3-font-color13);">在npm5及之后的版本，它成了默认行为</span>
- **npm uninstall [package - name]** ：用于卸载项目中的某个包。
- **npm update [package - name]** ：更新指定的项目依赖包。
- **npm list**：列出当前项目中已安装的所有包及其依赖关系树。这有助于查看项目的依赖结构，了解哪些包被安装以及它们之间的层次关系。如果只想查看顶层的依赖，可以使用`npm list --depth = 0`​
- **npm run [script - name]** ：用于运行`package.json`​文件中`scripts`​部分定义的脚本

# Node

- **node [文件名.js]** ：用于执行一个 JavaScript 文件。例如，如果你有一个名为`app.js`​的文件，里面包含了一些 Node.js 代码，在命令行中进入该文件所在目录后，使用`node app.js`​就可以运行这个文件中的代码。这是 Node.js 最基本的运行命令，它使得 JavaScript 可以在服务器端等非浏览器环境下运行。
- **node -v**：用于查看当前安装的 Node.js 版本。在开发过程中，有时候需要确认所使用的 Node.js 版本是否符合项目要求，或者在更新 Node.js 后检查版本是否更新成功，这个命令就非常有用。

# NVM

1. - **nvm install [version - number]** ：安装指定版本的 Node.js。例如，`nvm install 14.17.0`​会安装 Node.js 版本 14.17.0。这在需要切换不同版本的 Node.js 进行开发或测试时非常有用，比如，一些旧项目可能依赖于较旧版本的 Node.js，而新项目可能需要最新版本。
    - **nvm use [version - number]** ：切换到指定版本的 Node.js。例如，`nvm use 16.13.0`​会将当前使用的 Node.js 版本切换为 16.13.0。这样可以方便地在不同版本之间进行切换，以满足不同项目的需求。
    - **nvm ls**：列出已经安装的所有 Node.js 版本。可以清楚地看到系统上安装了哪些版本的 Node.js，并且可以看到当前正在使用的版本标记为`->`​符号。
    - **nvm uninstall [version - number]** ：卸载指定版本的 Node.js。如果某个版本不再需要，可以使用这个命令来删除它，例如`nvm uninstall 12.22.0`​会将 Node.js 版本 12.22.0 从系统中卸载
    - **nvm list available**：列出可安装的node版本

‍

# 历史发展

## 一、Node.js

Node.js 是**2009**的时候由 Ryan Dahl 开发的。Ryan 的本职工作是用 C++ 写服务器，后来他总结出一个经验，一个高性能服务器应该是满足“<span data-type="text" style="color: var(--b3-font-color13);">事件驱动，非阻塞 I/O</span>”模型的。C++ 开发起来比较麻烦，于是 Ryan 就想找一种更高级的语言，以便快速开发。

可以说有两点促成了 Nodejs 的诞生。首先第一点，Ryan 发现 <span data-type="text" style="color: var(--b3-font-color13);">JS 语言本身的特点就是事件驱动并且是非阻塞 I/O 的</span>，跟他的思路正是绝配。第二点，Chrome 的 JS 引擎，也就是 V8 引擎是开源的，而且性能特别棒。于是 Ryan 就<span data-type="text" style="color: var(--b3-font-color13);">基于 V8 开发了 Node.js </span>，注意 Node.js 听名字好像是个<span data-type="text" style="color: var(--b3-font-color13);"> JS 库，其实不是的，Node.js 是 </span>**C++**   <span data-type="text" style="color: var(--b3-font-color13);">开发的</span>。

> Node.js 是一个基于 Chrome V8 引擎的 Javascript 运行环境

<span data-type="text" style="color: var(--b3-font-color13);">所以说 Node.js 不是库，是一个运行环境，或者说是一个 JS 语言解释器。</span>

以前 JS 只能运行在浏览器中，Node.js 出现之后，不管是服务器上，还是我们自己的的笔记本上，只要安装了 Node.js 就可以运行 JS 代码了。

## 二、NPM

Node Package Manager

npm 由 Isaac Z. Schlueter 创建，旨在解决 JavaScript 生态系统中快速增长的包管理问题。在 npm 出现之前，开发者在管理依赖和共享代码方面面临诸多挑战，而 npm 的设计就是为了简化这些流程。最初版本的 npm 具有基本的包安装和管理功能。

Isaac 创建 npm 后，由于 Node.js 对包管理工具的需求，以及 npm 需要一个合适的运行环境和社区来发展，二者一拍即合。<span data-type="text" style="color: var(--b3-font-color13);">从 Node.js 0.6.3 版本开始（2011 年），npm 被作为默认包集成到 Node.js 中</span>，从此成为 Node.js 官方默认包管理器，承载着 Node 生态的早期依赖管理重任。

## 三、NVM

### **早期 Node.js 版本管理的痛点**

- **Node.js 快速迭代**：  
  Node.js 自 2009 年发布后，版本迭代频繁（如 0.10.x → 0.12.x → 4.x → 6.x），不同版本间存在 API 差异和性能优化。
- **项目依赖冲突**：  
  多个项目可能依赖不同 Node 版本（如项目 A 需要 Node 8，项目 B 需要 Node 12），但系统全局只能安装一个 Node 版本，切换版本需手动卸载 / 重装，极其繁琐。
- **缺乏标准化工具**：  
  早期开发者通过手动编译源码、使用 Homebrew 或自定义脚本管理版本，但均存在兼容性和易用性问题。

---

- **2014**：Fedor Indutny 发布 NVM 0.1.0。
- **2015**：nvm-windows 项目启动。
- **2016**：Node.js 6.0 发布，LTS 策略确立，NVM 支持 `--lts`​ 参数。
- **2018**：Volta 等新工具出现，引发版本管理工具讨论。
- **2020**：NVM 支持 Node 14+，优化 Windows 兼容性。
- **2023**：NVM 0.39.x 发布，支持 Node 20+，改进 ARM 架构支持。

‍
