// function add(a, b) {
//     return a + b
// }
// //实现memorize可以实现函数记忆。
// var memorizeAdd = memorize(add);
// memorizeAdd(1, 2) //3
// memorizeAdd(1, 2) //相同的参数，第二次调用时，从缓存中取出数据，而非重新计算一次

//第一版（来自JavaScript权威指南）
// function memorize(f) {
//     var cache = {};
//     return function () {
//         var key = arguments.length + Array.prototype.join.call(arguments, ',');
//         if (key in cache) {
//             return cache[key]
//         } else {
//             return cache[key] = f.apply(this, arguments);
//         }
//     }
// }

// var add = function (a, b, c) {
//     return a + b + c
// }

// var memoizedAdd = memorize(add)

// console.time('use memoize')
// for (var i = 0; i < 100000; i++) {
//     memoizedAdd(1, 2, 3)
// }
// console.timeEnd('use memoize')

// console.time('not use memoize')
// for (var i = 0; i < 100000; i++) {
//     add(1, 2, 3)
// }
// console.timeEnd('not use memoize')

// 第二版 (来自 underscore 的实现)
var memoize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};
var add = function(a, b, c) {
    return a + b + c
  }
var memoizedAdd = memoize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
})

console.log(memoizedAdd(1, 2, 3)) // 6
console.log(memoizedAdd(1, 2, 3)) // 6
console.log(memoizedAdd(1, 2, 4)) // 7

