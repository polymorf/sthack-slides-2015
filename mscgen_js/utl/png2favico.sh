#!/bin/sh
# adapted from http://www.imagemagick.org/Usage/thumbnails/#favicon
optipng -quiet $1
# convert $1  -bordercolor white -border 0 \
          # \( -clone 0 -resize 16x16 \) \
          # \( -clone 0 -resize 24x24 \) \
          # \( -clone 0 -resize 32x32 \) \
          # \( -clone 0 -resize 48x48 \) \
          # \( -clone 0 -resize 64x64 \) \
          # -delete 0 -alpha off -colors 256 $2

convert $1  \
          \( -clone 0 -resize 16x16 \) \
          \( -clone 0 -resize 24x24 \) \
          \( -clone 0 -resize 32x32 \) \
          \( -clone 0 -resize 48x48 \) \
          \( -clone 0 -resize 64x64 \) \
          -delete 0 -alpha on $2
