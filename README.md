# egg-sts

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sts.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sts
[travis-image]: https://img.shields.io/travis/eggjs/egg-sts.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-sts
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-sts.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-sts?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-sts.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-sts
[snyk-image]: https://snyk.io/test/npm/egg-sts/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sts
[download-image]: https://img.shields.io/npm/dm/egg-sts.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sts

egg plugin for [https://github.com/aliyun/nodejs-sts-sdk](nodejs-sts-sdk)

## Install

```bash
$ npm i egg-sts --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sts = {
  enable: true,
  package: 'egg-sts',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sts = {
  client: {
    endpoint: 'sts.cn-chengdu.aliyuncs.com', // 修改你自己的地域
    accessKeyId: 'xxxxxxxxxxxxxx', // 修改你自己的accessKeyId
    accessKeySecret: 'xxxxxxxxxxxxxx', // 修改你自己的accessKeySecret
  }
};
```

see [config/config.default.js](https://github.com/aliyun/nodejs-sts-sdk) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
