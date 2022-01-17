注意：初次下载打包手动拷贝一份到dist
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

## 优化
### 查看依赖关系
https://www.cnblogs.com/vvjiang/p/9327903.html
这个东西不算是优化，而是让我们可以清晰得看到各个包的输出文件体积与交互关系。
```
npm install --save-dev webpack-bundle-analyzer
```
```
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = merge(common, {
  // ...
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 8919 })
  ],
});
```
打包后会自动出现一个端口为8919的站点，站点内容如下：
### CommonsChunkPlugin：提取通用模块文件

### 排除node_modules目录下的代码
https://blog.csdn.net/yang450712123/article/details/79282092
externals: [nodeExternals()]用于排除node_modules目录下的代码被打包进去，因为放在node_modules目录下的代码应该通过npm安装。
```
npm i webpack-node-externals --save-dev
```
测试是否可提交
https://github.com/Lie8466/better-js
http://sinhub.cn/2019/07/getting-started-guide-of-sentry/
测试是否可提交  
```
git clone git@github.com:zhaoqingkaitt/great-generator.git
```
```
registry = "https://registry.npm.taobao.org/"
registry = "https://registry.npmjs.org/"
npm publish --registry=https://registry.npmjs.org/

```
