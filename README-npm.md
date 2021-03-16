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
### 2.2、用户
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GPersonUtils} = require('great-generator');
console.log(GPersonUtils.randomUser()); // 生成一个用户
console.log(GPersonUtils.randomUser({number: 3 })); // 生成三个用户
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
// 生成一个手机号
console.log(GContactUtils.mobile()); // 15019056146
// 生成3个手机号
console.log(GContactUtils.mobile({number: 3})); // [ '18052557552', '13822156849', '15667326112' ]
```
### 3.2、邮箱
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GContactUtils} = require('great-generator');
// 生成一个邮箱
console.log(GContactUtils.email()); // 8267636@163.com
// 生成3个邮箱
console.log(GContactUtils.email({number: 3})); //[ '2695452@126.com', '3383935@sina.com', '8850451@foxmail.com' ]
```
### 3.3、地址
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GContactUtils} = require('great-generator');
// 生成一个地址
console.log(GContactUtils.address());
// 生成三个地址
console.log(GContactUtils.address({number: 3}));
```

### 4、时间
```js
const {GTimeUtils} = require('great-generator');
```
#### 4.1、时间
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GTimeUtils} = require('great-generator');
// 生成一个日期类型
console.log(GTimeUtils.date()); // 2021-06-04T21:26:30.713Z
console.log(GTimeUtils.date({number: 2})); // [2021-06-04T21:26:30.713Z, 2021-06-04T21:26:30.713Z]
```
#### 4.2、时间字符串
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
```js
const {GTimeUtils} = require('great-generator');
// 生成一个字符串类型
console.log(GTimeUtils.str()); // 2018-07-10 20:06:23
// 生成2个字符串类型
console.log(GTimeUtils.str({number: 2})); // [ '2019-06-17 01:48:32', '2024-10-06 21:30:29' ]

```

### 5、编号
```js
const {GCodeUtils} = require('great-generator');
```
#### 5.1、编号
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| number | 生成的数量 | 否，默认为1 | number |
| upperCase | 是否大写 | 否，默认为true | boolean |
| length | 长度 | 否，默认为1 | number |
| prefix | 前缀 | 否 | string |
| suffix | 后缀 | 否 | string |
```js
const {GCodeUtils} = require('great-generator');
console.log(GCodeUtils.letter()); // E
console.log(GCodeUtils.letter({number:8})); // [ 'W', 'M', 'F', 'H', 'R', 'L', 'H', 'T', 'S' ]
console.log(GCodeUtils.letter({number:8, upperCase: false})); // [ 'd', 'd', 'c', 'w', 'r', 'e', 'u', 'u', 'y' ]
console.log(GCodeUtils.letter({length:8, upperCase: false})); // xgvxrpyb
console.log(GCodeUtils.letter({number:8, length:2, upperCase: false})); // [ 'rylkpddf', 'lguhovtx' ]
```
### 6、树结构数据
| 参数 | 名称 | 必传 | 参数类型
| ------ | ------ | ------ | ------ |
| maxLevel | 最多几层 | 否，默认为5 | number |
| minLevel | 最少几层 | 否，默认为1 | number |
| maxNum | 每层最多几个 | 否，默认为5 | number |
```js
const {GTreeUtils} = require('great-generator');
const nodes1 = GTreeUtils.tree();
console.log(nodes1);
const nodes2 = GTreeUtils.tree({maxLevel: 3, maxNum: 7});
console.log(nodes2);
```
## 组织机构
### 1、机构
```js
const {GOrganizationUtils} = require('great-generator');
```
### 2、部门
```js
const {GDepartmentUtils} = require('great-generator');
```
### 3、岗位
```js
const {GPostUtils} = require('great-generator');
```
