const {TimeUtils} = require('great-jsutils');
import {NumberUtils} from "great-jsutils";

console.log(TimeUtils.format());
console.log(NumberUtils.randomFloat({number:4}));

const {GNumberUtils} = require('great-generator');

console.log('generator：', GNumberUtils.random());
