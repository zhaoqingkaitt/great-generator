## great-generator
```
npm i great-generator --save
```
### 友情链接
[great-generator](https://www.npmjs.com/package/great-generator)、
[great-jsutils](https://www.npmjs.com/package/great-jsutils)、
[great-ngform](https://www.npmjs.com/package/great-ngform)、
[great-zorroutils](https://www.npmjs.com/package/great-zorroutils)

### 1、数字
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
| min | 生成数字最小值 | 否，默认为0 | number |
| max | 生成数字最大值 | 否，默认为10 | number |
```js
const { GNumberUtils} = require('great-generator');
// 生成一个整数
console.log(GNumberUtils.randomInt());
// 生成一个小数
console.log(GNumberUtils.randomFloat());
```
```js
// 生成10个整数
console.log(GNumberUtils.randomInt({number: 10}));
// 生成10个小数
console.log(GNumberUtils.randomFloat({number: 10}));
```
```js
// 生成一个最小为100的整数
console.log(GNumberUtils.randomInt({min: 100}));
// 生成一个最小为100的小数
console.log(GNumberUtils.randomFloat({min: 100}));
```
```js
// 生成一个最大为100的整数
console.log(GNumberUtils.randomInt({max: 100}));
// 生成一个最大为100的小数
console.log(GNumberUtils.randomFloat({max: 100}));
```
```js
// 生成10个最小为100的整数
console.log(GNumberUtils.randomInt({number: 10, min: 100}));
// 生成10个最小为100的小数
console.log(GNumberUtils.randomFloat({number: 10, min: 100}));
```
### 2、个人
```js
const { GPersonUtils} = require('great-generator');
```
### 2.1、姓名
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GPersonUtils} = require('great-generator');
console.log(GPersonUtils.randomName()); // 吉云飞
console.log(GPersonUtils.randomName({number: 3 })); // [ '解龙', '党虎', '卜霞霞' ]
```

### 3、联系方式
```js
const { GContactUtils} = require('great-generator');
```
### 3.1、手机号
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GContactUtils} = require('great-generator');
console.log(GContactUtils.mobile());
```

### 4、时间
```js
const {GTimeUtils} = require('great-generator');
```
#### 4.1、时间
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |

#### 4.2、时间字符串
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |

### 4、编号
```js
const {GCodeUtils} = require('great-generator');
```
#### 4.1、时间
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
| upperCase | 是否大写 | 否，默认为true | boolean |
| length | 长度 | 否，默认为1 | number |
```js
const {GCodeUtils} = require('great-generator');
console.log(GCodeUtils.letter()); // E
console.log(GCodeUtils.letter({number:8})); // [ 'W', 'M', 'F', 'H', 'R', 'L', 'H', 'T', 'S' ]
console.log(GCodeUtils.letter({number:8, upperCase: false})); // [ 'd', 'd', 'c', 'w', 'r', 'e', 'u', 'u', 'y' ]
console.log(GCodeUtils.letter({length:8, upperCase: false})); // xgvxrpyb
console.log(GCodeUtils.letter({number:8, length:2, upperCase: false})); // [ 'rylkpddf', 'lguhovtx' ]
```
