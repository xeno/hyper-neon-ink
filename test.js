'use strict';
const assert = require('assert');
const theme = require('./index.js');
assert.strictEqual(typeof theme.decorateConfig, 'function');
const out = theme.decorateConfig({});
const hex = /^#[0-9a-fA-F]{6}$/;
for (const k of ['backgroundColor', 'foregroundColor', 'cursorColor', 'selectionColor', 'borderColor']) {
  assert.ok(hex.test(out[k]), `${k} is a hex color`);
}
assert.strictEqual(out.backgroundColor, '#222222');
assert.strictEqual(out.foregroundColor, '#f0f0f0');
assert.strictEqual(out.cursorColor, '#4455bb');
assert.strictEqual(out.selectionColor, '#646464');
const names = ['black','red','green','yellow','blue','magenta','cyan','white',
  'lightBlack','lightRed','lightGreen','lightYellow','lightBlue','lightMagenta','lightCyan','lightWhite'];
for (const n of names) assert.ok(hex.test(out.colors[n]), `colors.${n} is a hex color`);
assert.strictEqual(out.colors.magenta, '#FF00AA');
assert.strictEqual(out.colors.black, '#102210');
// merge behaviour: keeps unrelated config, keeps user css
const merged = theme.decorateConfig({ fontSize: 14, css: '.x{}', colors: { custom: '#123456' } });
assert.strictEqual(merged.fontSize, 14);
assert.ok(merged.css.includes('.x{}'));
assert.strictEqual(merged.colors.custom, '#123456');
assert.ok(typeof out.css === 'string' && out.css.includes('#FF00AA'));
console.log('OK', JSON.stringify({ ...out, css: `<${out.css.length} chars>`, termCSS: undefined }, null, 2));
