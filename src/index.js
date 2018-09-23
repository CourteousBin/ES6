/**
 * [age description]
 * 第3节：变量的解构赋值
	let {name,age} = {age:18,name:'hongbin'};
	console.log(name,age);
	let test;
	({test}={test:'aaa'});
	const [a,b,c,d,e,f]="JSPang";
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
	console.log(f);

 * 第4节：扩展运算符和rest运算符
	 - 
	   	let arr1 = ['a','b','c'];
		let arr2 = [...arr1];
		arr2.push('d');
		console.log(arr2);
		console.log(arr1);
	 - 
		function jspang(first,...arg){
		    console.log(...arg);
		}
		jspang(0,1,2,3,4,5,6,7)

 * 第5节：字符串模版
 	* 字符串查找
 	 	let jspang='技术胖';
		let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
		console.log(blog.includes(jspang));

 *第6节：ES6数字操作
 	数字验证Number.isFinite( xx )
 	判断是否为整数Number.isInteger(xx)
 	整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
 	最大安全整数console.log(Number.MAX_SAFE_INTEGER);
 	最小安全整数console.log(Number.MIN_SAFE_INTEGER);

 * 第7节：ES6中新增的数组知识（1）
	let  json = {
	    '0': 'jspang',
	    '1': '技术胖',
	    '2': '大胖逼逼叨',
	    length:3
	}
	let arr=Array.from(json);
	console.log(arr)
 */
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))
