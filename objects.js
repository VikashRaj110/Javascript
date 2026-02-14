const user ={
    name: "Vikash",
    age: 10,
    emailid: 'rajputvi448@gmail.com',
    amount: 4000,
    "home address": "dwrka"
}
//  console.log(user,typeof user);
// user.number = 4587; // insert
// user.amount =1248;// update
// //delete user.age;
// console.log(user);

// console.log(user["name"]); //alternate 
// console.log(user.age);
// console.log(user["age"]); //alternate method

// console.log(user["home address"]); // beacuse spacing

// const user2 =user; //copy by reference
// user2.age =90;
// console.log(user);

// console.log(Object.keys(user));
// console.log(object.values(user));
// console.log(object.entries(user));

for(let keys in user){
    console.log(keys,user[keys]) //user.keys user["name"]
} 

//objects ko destructing krna
const{name,age} =user;
const{name: userName,age: userAge} =user;// change keys name


// array ko destructing krna 
const arr =[10,25,47,58,90];
 const [first, second] =arr;
 console.log(first,second);



 