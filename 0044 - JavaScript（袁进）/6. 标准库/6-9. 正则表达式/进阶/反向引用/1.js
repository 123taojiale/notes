// 反向引用 ==> 在正则表达式中，使用某个捕获组 ==> 使用: \捕获组编号
var reg = /(\d{2})\1\1/;
var s = "131313";
var s1 = "202020";
var s2 = "202120";

console.log(reg.test(s)); // true
console.log(reg.test(s1)); // true
console.log(reg.test(s2)); // false
/*
后边的两个 \1 它们表示的是第一个捕获组的引用，也就是第一个括号中所匹配的内容。
1. reg.test(s) 第一个捕获组匹配的内容是 13，所以此时后边的两个反向引用 \1 表示的都是 13，要求 13 连续出现 3 次 - true 成功匹配
2. reg.test(s1) 第一个捕获组匹配的内容是 20，所以此时后边的两个反向引用 \1 表示的都是 20，要求 20 连续出现 3 次 - true 成功匹配
2. reg.test(s2) 第一个捕获组匹配的内容是 20，所以此时后边的两个反向引用 \1 表示的都是 20，要求 20 连续出现 3 次 - false 匹配失败 202120 不满足要求
*/