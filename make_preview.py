from PIL import Image, ImageDraw, ImageFont
import importlib.util, json, subprocess
c = json.loads(subprocess.check_output(['node','-e','const t=require("./index.js");console.log(JSON.stringify(t.decorateConfig({})))']))
col = c['colors']
W, H = 1200, 720
img = Image.new('RGB', (W, H), c['borderColor'])
d = ImageDraw.Draw(img)
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 20)
bold = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf', 20)
# window
d.rounded_rectangle([20, 20, W-20, H-20], 12, fill=c['backgroundColor'], outline=c['borderColor'], width=2)
d.rectangle([22, 22, W-22, 62], fill=c['backgroundColor'])
d.line([22, 62, W-22, 62], fill=c['borderColor'], width=1)
for i, dot in enumerate(['#f44747', '#FFFF00', '#76EE00']):
    d.ellipse([42+i*26, 34, 58+i*26, 50], fill=dot)
d.text((W//2, 42), 'Neon Ink — hyper', font=font, fill=c['foregroundColor'], anchor='mm')
d.line([W//2-90, 61, W//2+90, 61], fill=col['magenta'], width=2)
x0, y, lh = 50, 90, 32
def line(parts):
    global y
    x = x0
    for text, color, *b in parts:
        f = bold if b else font
        d.text((x, y), text, font=f, fill=color)
        x += d.textlength(text, font=f)
    y += lh
fg = c['foregroundColor']
prompt = [('xeno', col['magenta'], 1), (' in ', fg), ('~/code/hyper-neon-ink', col['cyan'], 1), (' on ', fg), ('main', col['lightMagenta'], 1), (' ❯ ', col['green'], 1)]
line(prompt + [('git status -s', fg)])
line([(' M ', col['red']), ('index.js', fg)])
line([('A  ', col['green']), ('preview.png', fg)])
line([('?? ', col['lightBlack']), ('notes.md', fg)])
line(prompt + [('ls', fg)])
line([('LICENSE  README.md  ', fg), ('index.js  ', col['yellow']), ('node_modules/  ', col['blue'], 1), ('preview.png  ', col['lightMagenta']), ('test.js', col['yellow'])])
line(prompt + [('npm test', fg)])
line([('> ', col['lightBlack']), ('hyper-neon-ink@1.0.0 test', col['lightBlack'])])
line([('✔ ', col['green'], 1), ('decorateConfig merges colors and css', fg)])
line([('⚠ ', col['lightRed'], 1), ('warning: ', col['lightRed']), ('lightBlue reuses cyan', fg)])
line([('✖ ', col['red'], 1), ('error: ', col['red']), ('nothing is actually broken', fg)])
y += 8
names = ['black','red','green','yellow','blue','magenta','cyan','white']
sw = (W - 100) // 8
for row, pre in enumerate(['', 'light']):
    for i, n in enumerate(names):
        key = pre + (n.capitalize() if pre else n)
        x = x0 + i*sw
        d.rectangle([x, y, x+sw-10, y+44], fill=col[key], outline=c['borderColor'])
        hexv = col[key]
        r, g, b = int(hexv[1:3],16), int(hexv[3:5],16), int(hexv[5:7],16)
        tc = '#222222' if (0.299*r+0.587*g+0.114*b) > 128 else '#f0f0f0'
        d.text((x+8, y+22), hexv, font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 15), fill=tc, anchor='lm')
    y += 54
line(prompt)
d.rectangle([x0 + d.textlength(''.join(p[0] for p in prompt), font=bold), y-lh+2, x0 + d.textlength(''.join(p[0] for p in prompt), font=bold)+12, y-6], fill=c['cursorColor'])
img.save('preview.png', optimize=True)
print('saved', img.size)
