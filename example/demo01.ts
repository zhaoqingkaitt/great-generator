const {TimeUtils, NumberUtils} = require('great-jsutils');

console.log(TimeUtils.format());
console.log(NumberUtils.randomFloat({number:4}));

const {GNumberUtils} = require('great-generator');
console.log('generator：', GNumberUtils.randomFloat());
