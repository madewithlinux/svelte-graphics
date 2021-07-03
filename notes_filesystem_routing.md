# notes.md

https://trac.ffmpeg.org/wiki/How%20to%20speed%20up%20/%20slow%20down%20a%20video



# reference animation
https://dribbble.com/shots/3807497-Two-squares-four-triangles

```bash
ffmpeg -i trisq_dribbble.gif trisq_dribbble.mp4
mkdir frames/
ffmpeg -i trisq_dribbble.gif frames/frame_%04d.jpg

# slower version (for easier seeking in mpv)
ffmpeg -i trisq_dribbble.gif -filter:v "setpts=32.0*PTS" trisq_dribbble_slow.mp4
mpv --loop trisq_dribbble_slow.mp4 
```


# cool svelte libraries
https://github.com/jiangfengming/svelte-preprocess-css-hash
https://github.com/aleclarson/vite-tsconfig-paths
https://www.npmjs.com/package/esno


# how to do router?
https://routify.dev/guide/installation
  filesystem (good)

https://github.com/jiangfengming/svelte-pilot
  appears to not be static site compatible

https://github.com/IndexXuan/vite-plugin-mpa
https://github.com/IndexXuan/vite-plugin-html-template
  I think this can do it? all statically?
  ```bash
  yarn add vite-plugin-mpa vite-plugin-html-template
  ```
  that's very janky and doesn't work well
  gotta use http://localhost:3000/svelte-graphics/src/pages/index/index.html
  I feel like routify surely must be easier than this


## other router related things to consider
https://elderguide.com/tech/elderjs/
https://github.com/plentico/plenti
https://gist.github.com/pngwn/670bfbf279431866a1194ebcc14faf21
https://www.npmjs.com/package/spank

https://github.com/rollup/plugins/tree/master/packages/html
https://github.com/anncwb/vite-plugin-html
https://github.com/antfu/vite-ssg

https://github.com/hannoeru/vite-plugin-pages



