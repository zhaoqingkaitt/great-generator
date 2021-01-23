const {GContactUtils} = require('great-generator');

// 生成一个手机号
console.log(GContactUtils.mobile()); // 15019056146
// 生成3个手机号
console.log(GContactUtils.mobile({number: 3})); // [ '18052557552', '13822156849', '15667326112' ]

// 生成地址
console.log(GContactUtils.address());
