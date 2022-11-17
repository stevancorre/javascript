<h1 align="center">
    <br>
    <a href="https://stevancorre.com">
        <img src="./resources/logo.png" alt="stevancorre.com icon" width="200">
    </a>
    <br>
    Stevan's TSConfig
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

### Npm

```console
$ npm i -D @stevancorre/tsconfig
```

### Pnpm

```console
$ pnpm add -D @stevancorre/tsconfig
```

### Yarn

```console
$ yarn add -D @stevancorre/tsconfig
```

<br>

## How to use

Create a new `tsconfig.json` file or open an existing one, then just make it extend one of base configurations in the package.

```json
{
    "extends": "tsconfig/base.json"
}
```

### NextJS project

```json
{
    "extends": "tsconfig/nextjs.json"
}
```

### React library project

```json
{
    "extends": "tsconfig/react-library.json"
}
```

## License

This project is <a href="https://opensource.org/licenses/MIT">MIT</a> licensed.

<br>

## Credits

-   Icon: <a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>
-   README design: <a href="https://github.com/amitmerchant1990/electron-markdownify/blob/master/README.md">github.com/amitmerchant1990</a>
