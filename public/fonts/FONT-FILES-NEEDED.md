# Font Files Required

## PP Mondwest (Body Text)
Place these files in this folder:
- `PPMondwest-Regular.woff2` / `PPMondwest-Regular.woff` / `PPMondwest-Regular.otf`
- `PPMondwest-Medium.woff2` / `PPMondwest-Medium.woff` / `PPMondwest-Medium.otf`
- `PPMondwest-SemiBold.woff2` / `PPMondwest-SemiBold.woff` / `PPMondwest-SemiBold.otf`
- `PPMondwest-Bold.woff2` / `PPMondwest-Bold.woff` / `PPMondwest-Bold.otf`

## PP Telegraf (Headings)
Place these files in this folder:
- `PPTelegraf-Regular.woff2` / `PPTelegraf-Regular.woff` / `PPTelegraf-Regular.otf`
- `PPTelegraf-Ultrabold.woff2` / `PPTelegraf-Ultrabold.woff` / `PPTelegraf-Ultrabold.otf`
- `PPTelegraf-Ultralight.woff2` / `PPTelegraf-Ultralight.woff` / `PPTelegraf-Ultralight.otf` ✓

## Priority Files (Most Important)
1. **PP Telegraf Regular** - For most headings
2. **PP Telegraf Ultrabold** - For hero title and main headings
3. **PP Mondwest Regular** - For body text
4. **PP Mondwest SemiBold** - For buttons

## Font Format Priority
1. `.woff2` - Best compression, preferred
2. `.woff` - Good fallback
3. `.otf` - Works but larger file size

The CSS will try woff2 first, then woff, then otf as fallback.

