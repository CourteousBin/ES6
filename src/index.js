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


	let arr=[1,2,3,4,5,6,7,8,9];
	console.log(arr.find(function(value,index,arr){
	    return value > 5;
	}))
 * 第8节：ES6中新增的数组知识（2）
    let arr=['jspang','技术胖','大胖逼逼叨']
	for (let [index,value] of arr.entries()){
		console.log(index);
	    console.log(value);
	}
 */

// let age = 18;
// let name = 'bin';

// let obj = {age,name};

// console.log(obj);

// let key='skill';
// var obj={
//     [key]:'web'
// }
// console.log(obj);
// 
// var a={a:'jspang'};
// var b={b:'技术胖'};
// var c={c:'web'};
// let d=Object.assign(a,b,c)
// console.log(d);
// 
// 
// var obj={
//     add:function(val){
//         return val+10;
//     },
//     name:'I am Jspang'
// };
// let proFun = {
// 	get:function(target,key){
// 		console.log(target);
// 		console.log(key);
// 		return target[key]
// 	},
// 	set:function(target,key,value){
// 		console.log(target);
// 		console.log(key);
// 		console.log(value);
// 		return target[key] = value+'999';
// 	}
// }
// let pro = new Proxy(obj,proFun);
// pro.name = 'Bin';
// console.log(pro.name);


// const promise = new Promise(function(resolve,reject){
// 	if ( 异步操作成功 ){
// 	    resolve(value);
// 	 } else {
// 	    reject(error);
// 	 }
// })
// 
// 
// function Point(x,y){
// 	this.x = x;
// 	this.y = y;
// }
// Point.prototype.toString = function(){
// 	return '(' + this.x + ', ' + this.y + ')';
// }
// var p = new Point(1,2);

// console.log(p.toString());

//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

let p = new Point(1,2);
console.log(p.x);