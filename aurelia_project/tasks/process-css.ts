import { build, CLIOptions } from 'aurelia-cli';
import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as postcss from 'gulp-postcss';
import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as postcssUrl from 'postcss-url';
import * as tailwindcss from 'tailwindcss';

export default function processCSS() {
  const useCssProcessing = CLIOptions.getEnvironment() === 'prod';
  const cssProcessPipe = postcss([
    autoprefixer(),
    postcssUrl({ url: 'inline', encodeType: 'base64' }),
    cssnano(),
    tailwindcss({ config: useCssProcessing ? 'tailwind.prod.config.js' : 'tailwind.config.js' })
  ]);

  return gulp.src(project.cssProcessor.source, { sourcemaps: true, since: gulp.lastRun(processCSS) })
    .pipe(cssProcessPipe)
    .pipe(build.bundle());
}
