'use strict';

// Neon Ink — a Hyper theme. https://github.com/xeno/hyper-neon-ink
// MIT © 2026 Neon Ink LLC

const palette = {
  background: '#222222',
  foreground: '#f0f0f0',
  selection: '#646464',
  border: '#3a3a3a',
  cursor: '#4455bb',
  pink: '#FF00AA',
  green: '#76EE00',
  yellow: '#FFFF00',
  blue: '#4499FF',
  cyan: '#66D9EF',
  purple: '#BB77FF',
  orange: '#FD971F',
  red: '#f44747',
  comment: '#BBAA99',
  gray: '#787878',
  terminalGreen: '#33cc33',
  ansiBlack: '#102210'
};

const colors = {
  black: palette.ansiBlack,
  red: palette.red,
  green: palette.green,
  yellow: palette.yellow,
  blue: palette.blue,
  magenta: palette.pink,
  cyan: palette.cyan,
  white: palette.foreground,
  lightBlack: palette.gray,
  lightRed: palette.orange,
  lightGreen: palette.terminalGreen,
  lightYellow: palette.yellow,
  lightBlue: palette.cyan,
  lightMagenta: palette.purple,
  lightCyan: palette.cyan,
  lightWhite: palette.foreground
};

exports.palette = palette;
exports.colors = colors;

exports.decorateConfig = (config) => {
  config = config || {};
  return Object.assign({}, config, {
    backgroundColor: palette.background,
    foregroundColor: palette.foreground,
    cursorColor: palette.cursor,
    cursorAccentColor: palette.background,
    selectionColor: palette.selection,
    borderColor: palette.border,
    colors: Object.assign({}, config.colors, colors),
    css: `
      ${config.css || ''}
      .hyper_main {
        border-color: ${palette.border};
      }
      .tabs_nav {
        background-color: ${palette.background};
        border-bottom: 1px solid ${palette.border};
      }
      .tabs_list .tab_tab {
        color: ${palette.gray};
        border-color: ${palette.border} !important;
      }
      .tabs_list .tab_tab.tab_active {
        color: ${palette.foreground};
        background-color: ${palette.background};
      }
      .tabs_list .tab_tab.tab_active::before {
        border-bottom: 2px solid ${palette.pink};
      }
      .tab_tab.tab_hasActivity {
        color: ${palette.green};
      }
      .splitpane_divider {
        background-color: ${palette.border} !important;
      }
    `,
    termCSS: `
      ${config.termCSS || ''}
    `
  });
};
