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

## 第8节：ES6中新增的数组知识（2）

**fill( )实例方法：**

fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

```javascript
let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang',2,5);
console.log(arr);
```

上边的代码是把数组从第二位到第五位用jspang进行填充。

**数组的遍历**

**for…of循环：**

这种形式比ES5的for循环要简单而且高效。先来看一个最简单的for…of循环

```javascript
let arr=['jspang','技术胖','大胖逼逼叨']
for (let item of arr){
    console.log(item);
}
```
for…of数组索引:有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引。

```javascript
let arr=['jspang','技术胖','大胖逼逼叨']
for (let index of arr.keys()){
    console.log(index);
}
```

可以看到这时的控制台就输出了0,1,2，也就是数组的索引。

同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环就可以同时输出内容和索引了。

```javascript
let arr=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr.entries()){
    console.log(index+':'+val);
}
```

## 第9节：ES6中的箭头函数和扩展

写一个函数，进行一个加法计算。

```javascript
function add(a,b){
    return a+b;
}
console.log(add(1,2));
```

我们声明了一个add函数，然后传入a和b两个值，返回a+b的值。 然后我们在控制台打印了这个函数的返回结果，这里是3.

**默认值**

在ES6中给我们增加了默认值的操作，我们修改上边的代码，可以看到现在只需要传递一个参数也是可以正常运行的。

```javascript
function add(a,b=1){
    return a+b;
}
console.log(add(1));
```

**箭头函数**

在学习Vue的时候，我已经大量的使用了箭头函数，因为箭头函数真的很好用，我们来看一个最简单的箭头函数。也就是上边我们写的add函数，进行一个改变，写成箭头函数。

```javascript
var add =(a,b=1) => a+b;
console.log(add(1));
```

**{}的使用**

在箭头函数中，方法体内如果是两句话，那就需要在方法体外边加上{}括号。例如下边的代码就必须使用{}.

```javascript
var add =(a,b=1) => {
    console.log('jspang')
    return a+b;
};
console.log(add(1));
```

## 第10节：ES6中的函数和数组补漏

**对象的函数解构**

我们在前后端分离时，后端经常返回来JSON格式的数据，前端的美好愿望是直接把这个JSON格式数据当作参数，传递到函数内部进行处理。ES6就为我们提供了这样的解构赋值。

```javascript
let json = {
    a:'jspang',
    b:'技术胖'
}
function fun({a,b}){
    console.log(a,b);
}
fun(json);
```

**数组的函数解构**

函数能解构JSON，那解构我们的数组就更不在话下了，我们看下边的代码。我们声明一个数组，然后写一个方法，最后用…进行解构赋值。

```javascript
let arr = ['jspang','技术胖','免费教程'];
function fun(a,b,c){
    console.log(a,b,c);
}
fun(...arr);
```

**in的用法**

in是用来判断对象或者数组中是否存在某个值的。我们先来看一下用in如何判断对象里是否有某个值。

对象判断

```javascript
let obj={
    a:'jspang',
    b:'技术胖'
}
console.log('a' in obj);  //true
```

**数组判断**

先来看一下ES5判断的弊端，以前会使用length属性进行判断，为0表示没有数组元素。但是这并不准确，或者说真实开发中有弊端。

```javascript
let arr=[,,,,,];
console.log(arr.length); //5
上边的代码输出了5，但是数组中其实全是空值，这就是一个坑啊。那用ES6的in就可以解决这个问题。
```

```javascript
let arr=[,,,,,];
console.log(0 in arr); //false
let arr1=['jspang','技术胖'];
console.log(0 in arr1);  // true
```
注意：这里的0指的是数组下标位置是否为空。

**数组的遍历方法**

**1.forEach**

```javascript
let arr=['jspang','技术胖','前端教程'];
arr.forEach((val,index)=>console.log(index,val));
```

forEach循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了。当是有时候也会给我们帮倒忙。

**2.filter**

```javascript
let arr=['jspang','技术胖','前端教程'];
arr.filter(x=>console.log(x));
```
这种方法在Vue实战里我讲过，他其实也有循环的功能，这里我们在复习一遍。

**3.some**

```javascript
let arr=['jspang','技术胖','前端教程'];
arr.some(x=>console.log(x));
```
**4.map**

```javascript
let arr=['jspang','技术胖','前端教程'];
console.log(arr.map(x=>'web'));
```
map在这里起到一个替换的作用，这个我们后续课程会详细讲解。

数组转换字符串 在开发中我们经常会碰到把数组输出成字符串的形式，我们今天学两种方法，你要注意两种方法的区别。

**5.join()方法**

```javascript
let arr=['jspang','技术胖','前端教程'];
console.log(arr.join('|'));
```
join()方法就是在数组元素中间，加了一些间隔，开发中很有用处。

**6.toString()方法**

```javascript
let arr=['jspang','技术胖','前端教程'];
console.log(arr.toString());
```
转换时只是是用逗号隔开了。

## 第11节：ES6中对象

**对象赋值**

ES6允许把声明的变量直接赋值给对象，我们看下面的例子。

```javascript
let name="jspang";
let skill= 'web';
var obj= {name,skill};
console.log(obj);  //Object {name: "jspang", skill: "web"}
```

**对象Key值构建**

有时候我们会在后台取出key值，而不是我们前台定义好的，这时候我们如何构建我们的key值那。比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。

```javascript
let key='skill';
var obj={
    [key]:'web'
}
console.log(obj.skill);
```

**Object.assign( )合并对象**

操作数组时我们经常使用数组合并，那对象也有合并方法，那就是assgin( )。看一下啊具体的用法。

```javascript
var a={a:'jspang'};
var b={b:'技术胖'};
var c={c:'web'};
let d=Object.assign(a,b,c)
console.log(d);
```

## 第12节：Symbol在对象中的作用

**声明Symbol**

我们先来回顾一下我们的数据类型，在最后在看看Symbol如何声明，并进行一个数据类型的判断。

```javascript
var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object; 
var f= Symbol();
console.log(typeof(d));
```
**Symbol的打印**

我们先声明一个Symbol，然后我们在控制台输出一下。

```javascript
var g = Symbol('jspang');
console.log(g);
console.log(g.toString());
```
这时候我们仔细看控制台是有区别的，没有toString的是红字，toString的是黑字。

**Symbol在对象中的应用**

看一下如何用Symbol构建对象的Key，并调用和赋值。

```javascript
var jspang = Symbol();
var obj={
    [jspang]:'技术胖'
}
console.log(obj[jspang]);
obj[jspang]='web';
console.log(obj[jspang]);
```

## 第13节：Set和WeakSet数据结构

ES6提供了数据结构Set。类似于数组，但是没有重复值。

Set本身是一个构造函数，用来生成Set数据结构

```javascript
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for(let i of s ) {
    console.log(i); //2 3 5 4
}
```

Set可以接受一个数组（或者类数组对象）作为参数，用来初始化

```javascript
var set = new Set([1, 2, 3, 4, 4]);
[...set]; // [1, 2, 3, 4]
```

> 可用于数组去重[...new Set(array)]
> 
> Array.from()方法可以将Set结构转换为数组Array.from(new Set(array))

向Set加入值时，不会发生类型转换（类似于精确相等===），但是要注意在Set里NaN是等于自身的。另外两个对象总是不相等的。

```javascript
let set = new Set();
let a = NaN；
let b = NaN;
set.add(a);
set.add(b);
set; //{NaN} 只能加入一个，说明Set内部两个NaN是相等的
```

**Set实例的属性和方法**

- 属性
  + Set.prototype.constructor：构造函数，默认就是Set函数
  + Set.prototype.size：返回实例的成员总数
- 操作方法
  + add(value)：添加一个值，返回Set结构本身
  + delete(value)：删除某个值，返回布尔值
  + has(value)：返回布尔值，表示是否是成员
  + clear()：清除所有成员，无返回值

```javascript
s.add(1).add(2).add(2); //链式写法

s.size(); //2

s.has(3); //false

s.delete(2);
s.has(2); //false 
```

**遍历方法**

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

```javascript
let set = new Set(['red', 'green', 'no']);

for(let item of set.keys()) {
    console.log(item); //red green no
}

for(let item of set.values()) {
    console.log(item); //red green no
}

for(let item of set.entries()) {
    console.log(item); //['red': 'red'] ['green': 'green'] ['no': 'no']
}

//对每个成员执行某种操作，参数依次为键值、键名、集合本身
new Set([1, 2, 3]).forEach((value, key) => console.log(value * 2)); //2 4 6
```
**数组的map()和filter()可用于Set**

```javascript
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2)); //set: {2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0)); //set {2, 4}
```

## 第14节：map数据结构

在一些构建工具中是非常喜欢使用map这种数据结构来进行配置的，因为map是一种灵活，简单的适合一对一查找的数据结构。我们知道的数据结构，已经有了json和set。那map有什么特点。

**Json和map格式的对比**

map的效率和灵活性更好

先来写一个JSON，这里我们用对象进行模拟操作。

```javascript
let json = {
    name:'jspang',
    skill:'web'
}
console.log(json.name);
```

但是这种反应的速度要低于数组和map结构。而且Map的灵活性要更好，你可以把它看成一种特殊的键值对，但你的key可以设置成数组，值也可以设置成字符串，让它不规律对应起来。

```javascript
let json = {
    name:'jspang',
    skill:'web'
}
console.log(json.name);
var map=new Map();
map.set(json,'iam');
console.log(map);
```

当然也可key字符串，value是对象。我们调换一下位置，依然是符合map的数据结构规范的。

```javascript
map.set('jspang',json);
console.log(map);
```
## 第15节：用Proxy进行预处理

如果你学过我的Vue的课程，一定会知道钩子函数，那如果你刚接触我的博客，并没有学习Vue，那我这里给你简单解释一下什么是钩子函数。当我们在操作一个对象或者方法时会有几种动作，比如：在运行函数前初始化一些数据，在改变对象值后做一些善后处理。这些都算钩子函数，Proxy的存在就可以让我们给函数加上这样的钩子函数，你也可以理解为在执行方法前预处理一些代码。你可以简单的理解为他是函数或者对象的生命周期。

在学习新知识之前，先来回顾一下定义对象的方法。

```javascript
var obj={
    add:function(val){
        return val+10;
    },
    name:'I am Jspang'
};
console.log(obj.add(100));
console.log(obj.name);
```

声明了一个obj对象，增加了一个对象方法add和一个对象属性name，然后在控制台进行了打印。

**声明Proxy**

我们用new的方法对Proxy进行声明。可以看一下声明Proxy的基本形式。

```javascript
new Proxy（{},{}）;
```

需要注意的是这里是两个花括号，第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方。

现在把上边的obj对象改成我们的Proxy形式。

```javascript
var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, {
        get:function(target,key,property){
            console.log('come in Get');
            return target[key];
        }
    });
console.log(pro.name);
```

可以在控制台看到结果，先输出了come in Get。相当于在方法调用前的钩子函数。

**get属性**

get属性是在你得到某对象属性值时预处理的方法，他接受三个参数

target：得到的目标值
key：目标的key值，相当于对象的属性
property：这个不太常用，用法还在研究中，还请大神指教。


**set属性**

set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。

target:目标值。
key：目标的Key值。
value：要改变的值。
receiver：改变前的原始值。

```javascript
var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, {
        get:function(target,key){
            console.log('come in Get');
            return target[key];
        },
        set:function(target,key,value,receiver){
            console.log(`    setting ${key} = ${value}`);
            return target[key] = value;
        }
    });
console.log(pro.name);
pro.name='技术胖';
console.log(pro.name);
```

**apply的使用**

apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。看下边的代码。

```javascript
get = function () {
    return 'I am JSPang';
};
var handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
var pro = new Proxy(target, handler);
console.log(pro());
```

其实proxy的知识是非常多的，这里我建议看阮一峰大神的《ES6》。

## 第16节：promise对象的使用

**promise的基本用法**

```javascript
const promise = new Promise(function(resolve,reject){
  if (/* 异步操作成功 */){
      resolve(value);
   } else {
      reject(error);
   }
})

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

**链式操作**

```javascript
let state=1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}
new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
     console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
    return val;
});
```

## 第17节：class类的使用

**构造函数**

```javascript
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

console.log(p.toString());
```

基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的class改写，就是下面这样。

```javascript
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
```

```javascript
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
```
上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。

Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

ES6 的类，完全可以看作构造函数的另一种写法。

**prototype**

构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。

```javascript
class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
```
**class的继承**

```javascript
class htmler extends Coder{
}
let pang=new htmler;
pang.name('技术胖');
```

声明一个htmler的新类并继承Coder类，htmler新类里边为空，这时候我们实例化新类，并调用里边的name方法。结果也是可以调用到的。

> 阅读更多 [阮一峰 ES6](http://es6.ruanyifeng.com/#docs/class)

## 第18节：模块化操作

- export :负责进行模块化，也是模块的输出。

- import : 负责把模块引，也是模块的引入操作。

> 感谢[技术胖](http://jspang.com/post/es6.html)用心创作的教程。