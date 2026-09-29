const ExternalCtor = require('external-cjs-node23-constructor');
const namedExports = require('external-cjs-node23-named');

t.is(typeof ExternalCtor, 'function', 'unwraps `module.exports` instead of returning the namespace');
t.is(new ExternalCtor('foo').value, 'foo', 'the required value is constructable');
t.deepEqual(
  namedExports,
  { foo: 'foo' },
  'returns `module.exports` even when named exports were detected'
);
