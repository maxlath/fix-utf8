# fix-utf8

A function that tries it best to recover lost Latin Unicode characters, based on the [UTF-8 Encoding Debugging Chart](http://www.i18nqa.com/debug/utf8-debug.html#dbg)

```js
const fixUtf8 = require('fix-utf8-debug')
fixUtf8("L'avenir des idÃ©es")
// => "L'avenir des idées"
```
