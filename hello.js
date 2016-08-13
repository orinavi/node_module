'use strict';
var s = 'hello';
function greet(name) {
    console.log(s + ', ' + name);
};
function who(name) {
    console.log(s + 'who, ' + name);
}
module.exports ={
    greet,
    who
}

