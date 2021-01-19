## 创建项目
```
// 1、创建空目录
mkdir demo03-great-generator01
// 2、添加文件
├── demo03-great-generator01
│   ├── src  
│   │   └── index.ts
│   └── .gitignore  
│   └── README.md  
// 3、进入项目
cd demo03-great-generator01
// 4、初始化
npm init
```
## 安装依赖
```
// 1、安装webpack依赖
npm install webpack webpack-cli --save-dev
// 2、安装webpack依赖
npm install --save-dev typescript ts-node @types/node @types/webpack
// 3、ts-loader
npm install ts-loader --save-dev
// 4、文件拷贝
npm install copy-webpack-plugin --save-dev
```
## tsconfig.json
```
{
  "files": [
    "src/index.ts"
  ],
  "compilerOptions": {
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "strict": true,                           /* Enable all strict type-checking options. */
    "declaration": true,
    "esModuleInterop": true,                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "experimentalDecorators": true,
    "noImplicitAny": false,
    "lib":[
      "es2015","dom"
    ]
  },
  "include": [
    "src/*",
    "example/*"
  ]
}
```
## 创建webpack.config.ts
```
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
```
