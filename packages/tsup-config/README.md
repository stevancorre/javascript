<h1 align="center">
    <br>
    <img src="https://i.imgur.com/Y9tGyy8.png" alt="TypeScript icon" width="200">
    <br>
    Stevan's Tsup Config
    <br>
</h1>

<h4 align="center">TypeScript configuration I use for <a href="https://github.com/stevancorre">my projects</a>.</h4>

<p align="center">
    <a href="https://nodejs.dev">
        <img src="https://img.shields.io/badge/Node.JS-68A063?style=for-the-badge&logo=node.js&logoColor=white">
    </a>
    <a href="https://www.typescriptlang.org">
        <img src="https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white">
    </a>
    <a href="https://paypal.me/aiixu">
        <img src="https://img.shields.io/badge/Donate-00457C?style=for-the-badge&logo=paypal&logoColor=white">
    </a>
</p>

<p align="center">
    <a href="#installation">Installation</a> •
    <a href="#how-to-use">How to use</a> •
    <a href="#license">License</a> •
    <a href="#credits">Credits</a>
</p>

## Installation

```console
# Using Npm
$ npm i -D @stevancorre/tsup-config

# Pnpm
$ pnpm add -D @stevancorre/tsup-config

# Or Yarn
$ yarn add -D @stevancorre/tsup-config
```

<br>

## How to use

Create a new `tsup.config.cjs` file or open an existing one, then just make it derive from the configuration

```js
module.exports = require("@stevancorre/tsup-config");
```

You can use it as a base configuration and change some options like that:

```js
module.exports = {
    ...require("@stevancorre/tsup-config"),
    dts: false,
};
```

###

## License

This project is <a href="https://opensource.org/licenses/MIT">MIT</a> licensed.

<br>

## Credits

-   Icon: <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
-   README design: <a href="https://github.com/amitmerchant1990/electron-markdownify/blob/master/README.md">github.com/amitmerchant1990</a>
