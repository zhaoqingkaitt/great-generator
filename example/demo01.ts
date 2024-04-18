import {GTreeUtils} from "../src/base/g-tree-utils";
const {TimeUtils, NumberUtils} = require('great-jsutils');

console.log('demo01.ts');
/*

console.log(TimeUtils.format());
console.log(NumberUtils.randomFloat({number:4}));

const {GNumberUtils, GTimeUtils} = require('great-generator');
console.log('generator：', GNumberUtils.randomFloat());
console.log('generator：', GNumberUtils.randomFloat({number: 10}));
console.log('GTimeUtils：', GTimeUtils.str({number:3}));
*/
const nodes = GTreeUtils.tree({maxLevel: 3, maxNum: 7});
console.log(nodes);
console.log(JSON.stringify(nodes));
console.log(NumberUtils.randomInt({max:5, number: 20}));
