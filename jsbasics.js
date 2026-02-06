// let frame = "Pranjal"
// let lname= "Srivastava"
// let msg =  `Hello my name is 
// $(frame) $(lname)` // Template literals use backticks ` ` and allow multi line strings and variable interpolation using ${}
// console.log(msg)

// //let add= (a,b)=> a+b //implicit return similar to lambda funcition in java

// console.log(add(2,3))
// console.log(`The sum of 5 and 7 is ${add(5,7)}`) // using template literals to print the result


// const objtest = {}; // object creaton syntax & (;) is not conpulsory

// const obj={
//     name: "Pranjal",
//     age: 21,
//     greet: function(){  // method inside object
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// };
// obj.greet(); // calling the method


// // 'use strict' // if we use this the code given below will give error else it will execute properly
// // function abc(){
// //     let a=10
// //     console.log(this.a)
// // }
// // abc(); 


// let add=(a,b)=>a+b// let func_name= (args1,args2,...)=> expression(implicit return:only a single statement returned)
// console.log(add(4,5))

// let add2=(a,b)=>({my_name :"Pranjal"})// to return an object from arrow function we need to wrap it in parenthesis
// console.log(add2(4,5).my_name)

// //arrow functions do not have their own 'this' context
// // const obj2= {
// //     name: "Pranjal",
// //     normalFunc: function(){
// //         console.log("Normal Function 'this':", this.name) // 'this' refers to the obj
// //     },
// //     arrowFunc: ()=> {
// //         console.log("Arrow Function 'this':", this.name) // 'this' does not refer to the obj
// //     }
// // };
// // obj2.normalFunc(); // Output: Pranjal
// // obj2.arrowFunc(); // Output: undefined


// const obj2= {
//     name: "Pranjal",
//     showname: function(){
//         const innerArrow= ()=> {
//             console.log("Inner Arrow Function 'this':", this.name) // 'this' refers to the obj2
//         };
//         innerArrow();
//     }
// };
// obj2.showname(); // Output: Pranjal

// const calculator = {
//     calculate: (a, b, operation) => {
//         switch(operation) {
//             case 'add':
//                 return a + b;
//             case 'subtract':
//                 return a - b;
//             case 'multiply':
//                 return a * b;
//             case 'divide':
//                 return a / b;
//             default:
//                 return 'Invalid operation';
//         }
//     }
// }
// console.log(calculator.calculate(10, 5, 'add'));
// console.log(calculator.calculate(10, 5, 'subtract'));  
// console.log(calculator.calculate(10, 5, 'multiply')); 
// console.log(calculator.calculate(10, 5, 'divide'));



//Oebject and array destructure 
const student={
    firstname:"Pranjal",
    lastname:"Srivastava",
    address:{
        city:"ghaziabad",
        country:"India"
    }
};
// let a=user.firstname
// console.log(a)

// let{firstname:fn,lastname,address:{city,country}}=user // destructuring assignment or object destructurring
// console.log(fn)
// console.log(lastname)

// let number=[1,2,3,4,5]
// let[a,b,c]=number // only first three values will be assigned and others will be ignored
// console.log(a)
// console.log(b)
// console.log(c)
// let[a,b,c,,e]=number // skipping values in array destructuring
// console.log(e)

let colours=["red","green","blue","yellow","purple"]
let [first, second, , , last] = colours; // array destructuring with skipped multiple elements




function showStudent({name,age,city}){
    console.log("Name:",name);
    console.log("Age:",age);
    console.log("City:",city);
}

showStudent(student); // passing object to function and destructuring it in parameter

const Student={
    id: 184,
    name: "Pranjal",
    course: "B.Tech",
    address:{
        city: "Ghaziabad",
        country: "India"
    },
    marks: [85, 90, 78,91],
    admissionstatus: "Admitted"

}

function displayData(Student){
    let {id,name,course,address:{city,country},marks:[m1,m2,m3,m4],admissionstatus:admstatus}=Student
    average_marks=(m1+m2+m3+m4)/4
    console.log('id:',id)
    console.log('name',name)
    console.log('course',course)
    console.log('city',city)
    console.log('country',country)
    console.log('average marks:',average_marks)
    console.log('admission status:',admstatus)

    if( average_marks>=80 && admstatus=="Admitted"){
        console.log("Eligible for Merit scholarship")
    }else{
        console.log("Regular admission")
    }
}

displayData(Student)


//anonymous arrow function to find greatest of three numbers
const greaterofthreenumbers=(a,b,c)=>{ 
    
    if(a>=b && a>=c){
        return a
    }else if(b>=a && b>=c){
        return b
    }else{
        return c
    }
    

}

console.log("Greater number is:",greaterofthreenumbers(10,25,15))


//WAP to find the sum of squares of all even numbers of the given numbers

const numbers=[1,2,3,4,5,6,7,8,9,10]
const sumOfSquaresOfEvens=(numbers)=>{
    arr=[]
    k=0
    for( i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            arr[k]=numbers[i]
            k++
        }
    }
    sum=0
    for( i=0;i<arr.length;i++){
        sum+=arr[i]*arr[i]
        console.log(arr[i])
    }
    
    console.log("Output sum:",sum)
    
    
}

sumOfSquaresOfEvens(numbers)

oldarray=[1,2,3,4,5]

newarray= ["Ram","Shyam",...oldarray,6,7,8]
console.log(newarray)

function sumOfFourValues(a,b,c,d){
    return a+b+c+d
}
console.log(sumOfFourValues(1,2,3,4))

numbers=[1,2,3,4]
console.log(sumOfFourValues(...numbers)) // spread operator to pass array elements as individual arguments

const csStudents=["Pranjal","Rohit","Naresh"]
const itStudents=["Amit","Vikas","Suresh"]
const allStudents=[...csStudents,...itStudents]
console.log("All Students:",allStudents) // merging two arrays using spread operator


// Rest operator
const sum=(...num)=>{
    
    total=0
    num.forEach(element => {
        total+=element
    });
    console.log("SUm of all given numbers is:",total)

}

sum(1,2,3,4,5,6,7,8,9,10) // rest operator to gather all arguments into an array

function showDetails(name,...skills){
    console.log(name)
    console.log(skills)
}
showDetails("Pranjal","JavaScript","Python","Java") // rest operator to gather all skills into an array


//Cpying objects and updating using spread operator
const originalObject={
    name: "Pranjal",
    age: 21,
    city: "Ghaziabad"
}

const copiedObject={...originalObject}// copying object and updating age property
copiedObject.age=18
console.log("original object:",originalObject)
console.log("Copied object:",copiedObject)

console.log("Original age:",originalObject.age)
console.log("Copied age:",copiedObject.age)


//Demonstrating passing array elements as function arguments using spread operator
function multiply(...nums){
    multi=1
    for(i=0;i<nums.length;i++){
        multi*=nums[i]
    }
    console.log(multi)
}

multiply(1,2,3,4,5)




function greet(name="Srivastava"){
    console.log("Hello,"+name);
}

greet("Pranjal");
greet(); // will use default parameter value

//Using default values in destructuring-

// let marks = [80]; 
// let [math = 0, science = 0] = marks; 
// console.log(math); 
// console.log(science);

// let product = {
// name: "Laptop"
// };
// let { name, price = 0 } = product;
// console.log(name);
// console.log(price);


// let data = [0, null];
// let [a = 10, b = 20] = data;

// let data = []; 
// let [a = 10, b = 20] = data; 
// console.log(a); 
// console.log(b);
