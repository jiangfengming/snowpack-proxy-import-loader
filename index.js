const acorn = require('acorn');
const walk = require('acorn-walk');

function replace(source, offset, start, end, repl) {
  source = source.slice(0, start + offset) + repl + source.slice(end + offset);
  offset += repl.length - (end - start);
  return { source, offset };
}

module.exports = source => {
  const ast = acorn.parse(source, {
    ecmaVersion: 'latest',
    sourceType: 'module'
  });

  let offset = 0;

  walk.simple(ast, {
    ImportDeclaration(node) {
      if (node.source.value.endsWith('.proxy.js')) {
        const i = node.source.raw.lastIndexOf('.proxy.js');
        const repl = node.source.raw.slice(0, i) + node.source.raw.slice(i + 9);
        ({ source, offset } = replace(source, offset, node.source.start, node.source.end, repl));
      }
    }
  });

  return source;
};
