// test.js
//
// process.nextTick() 将在下一轮事件循环中调用

process.nextTick(function() {
        conosle.log('nextTick callback!');
});
console.log('nextTick was set!')
