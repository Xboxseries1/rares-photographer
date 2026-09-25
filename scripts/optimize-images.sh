#!/bin/bash

ROOT="public/portfolio"
MAX_SIZE=2800
QUALITY=85

echo ""
echo "============================================"
echo "  OPTIMIZARE RAREȘ PHOTOGRAPHER"
echo "============================================"
echo ""

find "$ROOT" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 |
while IFS= read -r -d '' file; do

  echo "Optimizare: $file"

  temp="${file}.tmp.jpg"

  cp "$file" "$temp"

  sips \
    --resampleHeightWidthMax "$MAX_SIZE" \
    --setProperty format jpeg \
    --setProperty formatOptions "$QUALITY" \
    "$temp" \
    --out "$file" >/dev/null

  rm -f "$temp"

done

echo ""
echo "============================================"
echo "  GATA"
echo "============================================"
echo ""

du -sh "$ROOT"
