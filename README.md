# Neon Ink for Hyper

A loud, high-contrast neon theme for [Hyper](https://hyper.is), ported from the
[Neon Vommit](https://marketplace.visualstudio.com/items?itemName=ghgofort.neon-vommit)
VS Code theme by Galen Goforth.

![Neon Ink preview](https://raw.githubusercontent.com/xeno/hyper-neon-ink/main/preview.png)

## Install

```sh
hyper i hyper-neon-ink
```

Or add it to `plugins` in `~/.hyper.js`:

```js
module.exports = {
  // ...
  plugins: ['hyper-neon-ink'],
};
```

Also published as `@xeno/hyper-neon-ink` (same code). To use the scoped name,
put `'@xeno/hyper-neon-ink'` in `plugins` instead.

## Palette

| Role | Hex | Hyper key |
|---|---|---|
| Background | `#222222` | `backgroundColor` |
| Foreground | `#f0f0f0` | `foregroundColor`, `white`, `lightWhite` |
| Selection | `#646464` | `selectionColor` |
| Border | `#3a3a3a` | `borderColor` |
| Cursor | `#4455bb` | `cursorColor` |
| ANSI black | `#102210` | `black` |
| Red | `#f44747` | `red` |
| Green | `#76EE00` | `green` |
| Yellow | `#FFFF00` | `yellow`, `lightYellow` |
| Blue | `#4499FF` | `blue` |
| Pink | `#FF00AA` | `magenta` |
| Cyan | `#66D9EF` | `cyan`, `lightCyan`, `lightBlue` |
| Gray | `#787878` | `lightBlack` |
| Orange | `#FD971F` | `lightRed` |
| Terminal green | `#33cc33` | `lightGreen` |
| Purple | `#BB77FF` | `lightMagenta` |

The original theme's terminal foreground is `#33cc33`. Neon Ink uses `#f0f0f0`
as the foreground because it's easier to read, and keeps `#33cc33` as `lightGreen`.
Every bright color comes from the original palette, so a few of them repeat
(`lightYellow`, `lightBlue`, `lightCyan`, `lightWhite`).

## Credits

Colors come from [Neon Vommit](https://marketplace.visualstudio.com/items?itemName=ghgofort.neon-vommit) by
Galen Goforth (MIT). See [LICENSE](LICENSE).

## License

MIT
