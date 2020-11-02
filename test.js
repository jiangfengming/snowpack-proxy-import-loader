const loader = require('./index.js');

const source = `
import './foo.css.proxy.js';
import img1 from './img1.png.proxy.js';
`;

console.log(loader(source));
