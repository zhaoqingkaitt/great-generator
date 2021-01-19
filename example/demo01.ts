const {TimeUtils, NumberUtils} = require('great-jsutils');

console.log(TimeUtils.format());
console.log(NumberUtils.randomFloat({number:4}));

const {GNumberUtils, GTimeUtils} = require('great-generator');
console.log('generator：', GNumberUtils.randomFloat());
console.log('generator：', GNumberUtils.randomFloat({number: 10}));
console.log('GTimeUtils：', GTimeUtils.str({number:3}));
