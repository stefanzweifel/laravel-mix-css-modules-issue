const mix = require('laravel-mix');

mix
    .js('src/app.js', 'dist/app.js')



// mix.webpackConfig({
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 oneOf: [
//                     {
//                         resourceQuery: /module/,
//                         use: [
//                             'vue-style-loader',
//                             {
//                                 loader: 'css-loader',
//                                 options: {
//                                     modules: true,
//                                     localIdentName: '[local]_[hash:base64:5]'
//                                 }
//                             }
//                         ]
//                     },
//                     {
//                         use: [
//                             'style-loader',
//                             { loader: 'css-loader', options: { importLoaders: 1, modules: false } },
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// });
