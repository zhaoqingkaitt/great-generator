const {GContactUtils} = require('great-generator');

// 生成一个手机号
console.log(GContactUtils.mobile()); // 15019056146
// 生成3个手机号
console.log(GContactUtils.mobile({number: 3})); // [ '18052557552', '13822156849', '15667326112' ]


// 生成一个邮箱
console.log(GContactUtils.email()); // 8267636@163.com
// 生成3个邮箱
console.log(GContactUtils.email({number: 3})); //[ '2695452@126.com', '3383935@sina.com', '8850451@foxmail.com' ]

// 生成一个地址
console.log(GContactUtils.address());
// 生成三个地址
console.log(GContactUtils.address({number: 3}));
