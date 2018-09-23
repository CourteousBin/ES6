# ES6

## 第1章：ES6开发环境搭建 

现在的Chrome浏览器已经支持ES6了，但是有些低版本的浏览器还是不支持ES6的语法，这就需要我们把ES6的语法自动的转变成ES5的语法。

**本地安装babel-preset-es2015 和 babel-cli**

```javascript
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1"
  }
}
```

## 第2章：新的声明方式

以前我们在声明时只有一种方法，就是使用var来进行声明，ES6对声明的进行了扩展，现在可以有三种声明方式了。

字面理解ES6的三种声明方式：

1. `var`：它是variable的简写，可以理解成变量的意思。
2. `let`：它在英文中是“让”的意思，也可以理解为一种声明的意思。
3. `const`：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。

**var声明：**

var在ES6里是用来升级全局变量的

**let局部声明**

let是局部变量声明，let声明只在区块内起作用，外部是不可以调用的。

**const声明常量**

在程序开发中，有些变量是希望声明后在业务层就不再发生变化了，简单来说就是从声明开始，这个变量始终不变，就需要用const进行声明。

ES6的3种声明方式，`var`、`let`、`const`，这三种方式各有所长，既然已经学习了新技术，我们就要拥抱它，试着在你的项目中根据情况用 `let` 和 `const` 进行声明吧，不要再只使用 `var` 了。

## 第3节：变量的解构赋值

ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。

**简单的数组解构：**

以前，为变量赋值，我们只能直接指定值。比如下面的代码：

```javascript
let a=0;
let b=1;
let c=2;
```

而现在我们可以用数组解构的方式来进行赋值。

```javascript
letl  [a,b,c]=[1,2,3];
```

**解构的默认值：**

现在我们对默认值有所了解，需要注意的是undefined和null的区别。

```javascript
let [a,b="JSPang"]=['技术胖',undefined];
console.log(a+b); //控制台显示“技术胖JSPang”
undefined相当于什么都没有，b是默认值。
```
```javascript
let [a,b="JSPang"]=['技术胖',null];
console.log(a+b); //控制台显示“技术胖null”
null相当于有值，但值为null。所以b并没有取默认值，而是解构成了null。
```
**对象的解构赋值**

解构不仅可以用于数组，还可以用于对象。

```javascript
let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
console.log(foo+bar); //控制台打印出了“JSPang技术胖”
```

注意：对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

**圆括号的使用**

如果在解构之前就定义了变量，这时候你再解构会出现问题。下面是错误的代码，编译会报错。

```javascript
let foo;
{foo} ={foo:'JSPang'};
console.log(foo);
要解决报错，使程序正常，我们这时候只要在解构的语句外边加一个圆括号就可以了。
```

```javascript
let foo;
({foo} ={foo:'JSPang'});
console.log(foo); //控制台输出jspang
```

**字符串解构**

字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。

```javascript
const [a,b,c,d,e,f]="JSPang";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
```

## 第4节：扩展运算符和rest运算符

**对象扩展运算符（…）：**

当编写一个方法时，我们允许它传入的参数是不确定的。这时候可以使用对象扩展运算符来作参数，看一个简单的列子：

```javascript
function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
jspang(1,2,3);

actionscript
这时我们看到控制台输出了 1,2,3，undefined，这说明是可以传入多个值，并且就算方法中引用多了也不会报错。
```

**扩展运算符的用处：**

我们先用一个例子说明，我们声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。

```javascript
let arr1=['www','jspang','com'];
let arr2=arr1;
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr1);
```

控制台输出：

```javascript
["www", "jspang", "com"]
["www", "jspang", "com", "shengHongYu"]
```

这是我们不想看到的，可以利用对象扩展运算符简单的解决这个问题，现在我们对代码进行改造。

```javascript
let arr1=['www','jspang','com'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);
```

现在控制台预览时，你可以看到我们的arr1并没有改变，简单的扩展运算符就解决了这个问题。

**rest运算符**

它们有很多相似之处，甚至很多时候你不用特意去区分。它也用…（三个点）来表示，我们先来看一个例子。

```javascript
function jspang(first,...arg){
    console.log(arg.length);
}
jspang(0,1,2,3,4,5,6,7);
```
这时候控制台打印出了7，说明我们arg里有7个数组元素，这就是rest运算符的最简单用法。

## 第5节：字符串模版

**字符串模版**

```javascript
let jspang='技术胖';
let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
document.write(blog);
```

**字符串查找**

先来看一下ES5的写法，其实这种方法并不实用，给我们的索引位置，我们自己还要确定位置。

```javascript
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.indexOf(jspang));
```
这是网页中输出了20，我们还要自己判断。

ES6直接用includes就可以判断，不再返回索引值，这样的结果我们更喜欢，更直接。

```javascript
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.includes(jspang));
```

判断开头是否存在：
```javascript
blog.startsWith(jspang);
```

判断结尾是否存在：
```javascript
blog.endsWith(jspang);
```

需要注意的是：starts和ends 后边都要加s，我开始时经常写错，希望小伙伴们不要采坑。

## 第6节：ES6数字操作

**数字判断和转换**

**数字验证Number.isFinite( xx )**

可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。

```javascript
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
```

**NaN验证**

NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
```javascript
console.log(Number.isNaN(NaN));
```

**判断是否为整数Number.isInteger(xx)**

```javascript
let a=123.1;
console.log(Number.isInteger(a)); //false
```

**整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)**

```javascript
let a='9.18';
console.log(Number.parseInt(a)); 
console.log(Number.parseFloat(a));
```

**整数取值范围操作**

整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么.

```javascript
let a = Math.pow(2,53)-1;
console.log(a); //9007199254740991
```

在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

**最大安全整数**

```javascript
consolec .log(Number.MAX_SAFE_INTEGER);
```

**最小安全整数**

```javascript
console.log(Number.MIN_SAFE_INTEGER);
```

**安全整数判断isSafeInteger( )**

```javascript
let a= Math.pow(2,53)-1;
console.log(Number.isSafeInteger(a));//false
```

## 第7节：ES6中新增的数组知识（1）

**JSON数组格式转换**

JSON的数组格式就是为了前端快速的把JSON转换成数组的一种格式，我们先来看一下JSON的数组格式怎么写。

```javascript
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
```

这就是一个标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性。只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组。在ES6中绝大部分的Array操作都存在于Array对象里。我们就用Array.from(xxx)来进行转换。我们把上边的JSON代码转换成数组，并打印在控制台。

```javascript
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
let arr=Array.from(json);
console.log(arr)
```
**Array.of()方法：**

它负责把一堆文本或者变量转换成数组。在开发中我们经常拿到了一个类似数组的字符串，需要使用eval来进行转换，如果你一个老手程序员都知道eval的效率是很低的，它会拖慢我们的程序。这时候我们就可以使用Array.of方法。我们看下边的代码把一堆数字转换成数组并打印在控制台上：

```javascript
let arr =Array.of(3,4,5,6);
console.log(arr);
```

当然它不仅可以转换数字，字符串也是可以转换的，看下边的代码：

```javascript
let arr =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr);
```
**find( )实例方法：**

所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法（不理解请看下边的代码，再和上边的代码进行比对，你会有所顿悟）。这里的find方法是从数组中查找。在find方法中我们需要传入一个匿名函数，函数需要传入三个参数：

- value：表示当前查找的值。
- index：表示当前查找的数组索引。
- arr：表示当前数组。

在函数中如果找到符合条件的数组元素就进行return，并停止查找。你可以拷贝下边的代码进行测试，就会知道find作用。


```javascript
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))
```

控制台输出了6，说明找到了符合条件的值，并进行返回了，如果找不到会显示undefined。

> 感谢[技术胖](http://jspang.com/post/es6.html)用心创作的教程。