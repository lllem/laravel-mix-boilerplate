let mix = require('laravel-mix');

// mix.config.fileLoaderDirs.fonts = 'assets/webfonts';
mix.disableSuccessNotifications();

mix
  .js('src/scripts/script.js', 'assets/scripts')
  .sass('src/styles/main.scss', 'assets/styles')
  .copy( 'src/img', 'dist/assets/img', false )
  .copy( 'src/index.html', 'dist/index.html', false )
  .setPublicPath('dist')
  .version();
