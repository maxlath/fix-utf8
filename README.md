# fix-utf8

A function that tries its best to recover lost Latin Unicode characters, based on the [UTF-8 Encoding Debugging Chart](http://www.i18nqa.com/debug/utf8-debug.html#dbg)

## Install

```sh
$ npm install fix-utf8
```

## How-To

```js
const fixUtf8 = require('fix-utf8')
fixUtf8("L'avenir des idÃ©es")
// => "L'avenir des idées"
```

## License
[MIT](LICENSE.md)
