const {GCodeUtils} = require('great-generator');

console.log(GCodeUtils.letter());
console.log(GCodeUtils.letter({number:8}));
console.log(GCodeUtils.letter({number:8, upperCase: false}));
console.log(GCodeUtils.letter({length:8, upperCase: false}));
console.log(GCodeUtils.letter({number:8, length:8, upperCase: false}));

console.log(GCodeUtils.letter({number:2, length:8, upperCase: false, prefix:'A01'}));
