# snowpack-proxy-import-loader
Trim `.proxy.js` of `import`;

```js
import './foo.css.proxy.js';
import img1 from './img1.png.proxy.js';
```

Becomes:

```js
import './foo.css';
import img1 from './img1.png';
```

## Usage
webpack.config.js:

```js
module.exports = {
  // ...

  module: {
    rules: [
      test: /\.js$/,
      use: ['snowpack-proxy-import-loader']
    ]
  }
};
```

## LICENSE
[MIT](LICENSE)
