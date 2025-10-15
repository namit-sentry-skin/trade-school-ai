# 🔤 Font Setup Guide

This project uses custom fonts:
- **PP Mondwest** - For body/paragraph text
- **Telegraf** - For headings and titles

## 📁 Adding Font Files

1. Place your font files in the `public/fonts/` directory
2. Use `.woff2` format (preferred) and `.woff` as fallback
3. Follow the naming convention below

### PP Mondwest Files
```
public/fonts/
├── PPMondwest-Regular.woff2
├── PPMondwest-Regular.woff
├── PPMondwest-Medium.woff2
├── PPMondwest-Medium.woff
├── PPMondwest-SemiBold.woff2
├── PPMondwest-SemiBold.woff
├── PPMondwest-Bold.woff2
└── PPMondwest-Bold.woff
```

### Telegraf Files
```
public/fonts/
├── Telegraf-Regular.woff2
├── Telegraf-Regular.woff
├── Telegraf-Medium.woff2
├── Telegraf-Medium.woff
├── Telegraf-SemiBold.woff2
├── Telegraf-SemiBold.woff
├── Telegraf-Bold.woff2
├── Telegraf-Bold.woff
├── Telegraf-ExtraBold.woff2
└── Telegraf-ExtraBold.woff
```

## 🔄 Converting Fonts to WOFF/WOFF2

If you have TTF or OTF files, convert them online:
- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Transfonter](https://transfonter.org/)

## 📝 Font Configuration

Fonts are configured in `src/styles/fonts.css` and applied in `src/styles/index.css`:

```css
/* Body text uses PP Mondwest */
body {
  font-family: var(--font-body);
}

/* Headings use Telegraf */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
```

## ⚡ Performance

- Fonts use `font-display: swap` to prevent blocking page render
- WOFF2 provides ~30% better compression than WOFF
- System fonts are used as fallbacks

## 🎨 Font Weights Used

### PP Mondwest (Body)
- 400 (Regular) - Default paragraph text
- 500 (Medium) - Emphasized text
- 600 (SemiBold) - Strong emphasis
- 700 (Bold) - Buttons, labels

### Telegraf (Headings)
- 400 (Regular) - Subheadings
- 500 (Medium) - Section titles
- 600 (SemiBold) - Card headings
- 700 (Bold) - Main headings
- 800 (ExtraBold) - Hero title accent

## 🐛 Troubleshooting

**Fonts not loading?**
1. Check the font files are in `public/fonts/`
2. Verify file names match exactly (case-sensitive)
3. Clear browser cache and hard refresh (Ctrl+Shift+R)
4. Check browser console for 404 errors

**Only seeing system fonts?**
- The site works fine without custom fonts (graceful fallback)
- Add font files to `public/fonts/` to activate custom typography

**Mixed font weights?**
- Make sure you have all the weight variants
- The CSS will use the closest available weight if a specific one is missing

