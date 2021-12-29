//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
 module.exports = {
   // parcel index.html
   // 파일 읽어들이기 시작하는 진입점 설정
   entry: './js/main.js',

   // 결과물(번들)을 반환하는 설정
   output: {
    //  path: path.resolve(__dirname, 'dist'), // __dirname 현재 파일이 있는 경로에 public 폴더 생성
    //  filename: 'main.js', //파일 네임은 app.js
     clean: true // 설정한 파일 외의 다른 파일 제거
   },

   module: {
     rules: [
       {
         test:/\.s?css$/, //.scss나 .css로 끝나는 문자를 찾는 정규식. s? -> s가 있을수도있고 없을수도있고
         use: [
           'style-loader', // html style 태그에 연결
           'css-loader', // css파일을 해석하는 용도
           'postcss-loader', // autoprefixer
           'sass-loader' //scss
         ]
       },
       {
         test: /\.js$/,
         use: [
           'bable-loader'
         ]
       }
     ]
   },
   //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설명
   plugins: [
     new HtmlPlugin({
       template: './index.html'
     }),
     new CopyPlugin({
       patterns: [
         {from: 'static'} //어디에서부터 해당하는 폴더 내용을 복사해서 dist에 넣을것인지.
       ]
     })
   ],

   devServer: {
     host:'localhost'
   }
 }