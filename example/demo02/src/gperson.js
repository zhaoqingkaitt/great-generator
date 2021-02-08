const {GPersonUtils} = require('great-generator');
console.log(GPersonUtils.randomName()); // 生成一个姓名
console.log(GPersonUtils.randomName({number: 3 })); // 生成三个姓名
console.log(GPersonUtils.randomUser({number: 3 })); // 生成三个用户
