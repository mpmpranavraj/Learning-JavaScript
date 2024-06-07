// console.log(`Hello`);
// console.log(`Im pranav`);

// window.alert(`This is an alert`);
// window.alert(`alert alright `);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `ok`;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Pranav";
// let gmail = "mpmpranavraj@gmail.com";
// let online = true;
// let isStudent = true;


// console.log(typeof age );
// console.log(`Your age  is ${age}`);
// console.log(`Your price is $${price}`);
// console.log(`Your gpa is ${gpa}`);
// console.log(`Your name is ${firstName}`);
// console.log(`Your email is ${gmail}`);
// console.log(price);
// console.log(`bro is online ? ${online}`);
// console.log(`Enrolled: ${isStudent}`);

// let Fullname = "Pranav Raj";
// let agee = 25;
// let student = true;

// document.getElementById("P1").textContent = `Your name is ${Fullname}`;
// document.getElementById("P2").textContent = `Your age is ${agee}`;
// document.getElementById("P3").textContent = `Are you a student ? ${student}`;


// let students = 30;
// students = students +1;
// students = students -1;
// students = students * 2;
// students = students / 2
// students = students ** 2;
// students = students % 2;

// let result = 6 % 2 ** 7;

// console.log(result);




// let username = window.prompt("Whats your username");
// console.log(username);


// document.getElementById("submit").onclick = function(){
//    let username = document.getElementById("text").value;
//     document.getElementById("okh1").textContent = `hello ${username}`;
    
    

// }

// let x = "0";
// let y = "y";
// let z= true;

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x, typeof y);
// console.log(y, typeof x);
// console.log(z, typeof y);

// arr = [1,6,8,3];
// arr.push(9);
// console.log(arr); 
// arr.pop();
// console.log(arr);
// arr.unshift (2); // add element at first 
// console.log(arr);
// arr.shift(); // removes element at first 
// console.log(arr);

// arr = [4, 'raghav',7.8,true,[1,2,3,4]] // you can add any elements in an array in JavaScript 
// a= [ [ 1,2,2,4], [5,8,4]]; //you can also add 2D Arrays in JS with diffent length 


// let s = "  Pranav Raj ";
// console.log(s,s.length)
// let s2 = s.trim();
// console.log(s2,s2.length);
// console.log(s2.indexOf('a'))
// console.log(s2.charAt(3));
// console.log(s2.slice(6));
// console.log(s2.slice(2,5));

// let s = "pranav is a intern at christ "
// console.log(s);
// let arr = s.split (' ');
// for (const ele of arr ){
//   console.log(ele);
//   //to store in array of strings 
// }

// // objects in JS 
// var details = ['Pranav',24,87.7,false ];

// let x = {
//   name: "Pranav",
//   age: 24,
//   percentage: 87.7,
//   isGraduated: false 
// };

// console.log(x);

// //Functions
// function oneton(n){
//     for(let i=1;i<=n;i++){
//       console.log(i);
      
//     }
//       console.log();
      
//     }
    
//     oneton(10);
//     oneton(5);
    
// // WAP to generate random no. btwn 0 and 9 
// let num = Math.floor(Math.random()*11);
// console.log(num);
    


const pi = 3.14;
let radius;
let circum;

radius = Number(radius);

circum = 2 * pi * radius;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circum = 2 * pi * radius;
    document.getElementById("h3").textContent = circum + "cm";
};
