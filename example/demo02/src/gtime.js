const {GTimeUtils} = require('great-generator');
// 生成一个日期类型
console.log(GTimeUtils.date()); // 2021-06-04T21:26:30.713Z
// 生成一个字符串类型
console.log(GTimeUtils.str()); // 2018-07-10 20:06:23
// 生成2个字符串类型
console.log(GTimeUtils.str({number: 2})); // [ '2019-06-17 01:48:32', '2024-10-06 21:30:29' ]
