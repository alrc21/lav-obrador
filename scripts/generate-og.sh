#!/bin/bash
set -e

cd "$(dirname "$0")/.."

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --screenshot="$(pwd)/public/og-image.png" \
  "file://$(pwd)/scripts/og-render.html"

echo "Generated public/og-image.png"
