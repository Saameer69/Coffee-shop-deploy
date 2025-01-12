import { minify } from 'terser'; // For JavaScript minification
import { promises as fs } from 'fs'; // For async file handling
import postcss from 'postcss'; // PostCSS for CSS processing
import cssnano from 'cssnano'; // CSS Minifier (plugin for PostCSS)

// Minify JavaScript (menu.js)
async function minifyJS() {
  try {
    const data = await fs.readFile('menu.js', 'utf8');
    const minified = await minify(data); // Use minify function directly from Terser
    await fs.writeFile('menu.min.js', minified.code);
    console.log('menu.js has been minified to menu.min.js');
  } catch (err) {
    console.error(err);
  }
}

// Minify CSS (style.css)
async function minifyCSS() {
  try {
    const data = await fs.readFile('style.css', 'utf8');
    const result = await postcss([cssnano]).process(data, { from: undefined }); // Use PostCSS with cssnano
    await fs.writeFile('style.min.css', result.css);
    console.log('style.css has been minified to style.min.css');
  } catch (err) {
    console.error(err);
  }
}

minifyJS();
minifyCSS();
