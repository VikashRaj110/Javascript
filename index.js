// console.log("hello Vikash");

// variable 
// let name = "Vikash";
// let age =20;
// age =30;
// console.log(name,age);

// const account = 110;
// account = 112;
// console.log(account);

//old tarika
// var a = 100;
// var a =110;
// console.log (a);

// if(true){
//     var a =108;
// }
// dont respect  thisscope
//  console.log(a);

//  function fun(){
//      var c =20;
//  }

 //console.log(c); // respect function and global scope 

 //number
//  let a =110;
//  let b =112;
//  console.log(a,b);

 //string 
//   let c = "shruti Sharma";
//   let d= 'Anjali';
//   console.log(c,d);

  // boolean 
//   let login = true;
//   let f =false;

  //undefined
//   let user;
//   console.log(user);
//const p; // error beacuse when declared so value assign.--

//bigint 
// let num =24477951186217951n;
// console.log(num);

//null
// let weather = null;
// console.log(weather);

//let weather = current_weather("Gwalior");
//25
//null(abhi nhi de sakte)
// undefined (not exist)

//symbol use for unique value
// const id1 = Symbol('id');
// const id2 = Symbol('id');
// console.log(id2==id1); 

//non-primitive 
// let arr = [110.112,45,58,'vivek',"false"];
// console.log(arr);

//object 
// let user ={
//     name: "Vikash",
//     account: 110112,
//     age: 20,
//     roll: 71
// }
// console.log(user);

//function
// let s=function add(){
//     console.log(555);
// }
// //add();
// console.log(s);
// s();

// type
// let a =100;
// console.log(typeof a);

// let w =null;
// console.log(typeof w); //bug object show

// arr type is also object beacuse onon-primitive all are object
// function type object but show function  

// let str ="love";
// console.log(str[2]);
// str[0] ='h' //not possible

let a = 20;
let b= a;
b =40;
console.log(a,b);


//non primitive data type mutuable 
// let arr =[10,54,48,75];
// arr.push(110);
// arr[0] =14;
// console.log(arr);

let obj ={
     name:"Mohan",
     age: 20
}
let obj2 = obj;
  obj.name ="Vikash"
  console.log(obj2);

