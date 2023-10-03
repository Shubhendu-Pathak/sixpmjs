// function declaration

// function funcName(parameter){
//     // return Codes
// }

// funcName(arguments)// invoking or calling a function

// function apple(a,b){
//     let sum = a+b
//     return `The sum of ${a} and ${b} is ${sum}`
// }

// console.log( apple(10,20) );


//1


// function one(num){

//     if( num%2 === 0 ){
//         return 'EVEN'
//     }else{
//         return 'ODD'
//     }

// }

// console.log( one(8) );

// console.log('*************************');

// function two(){
//     return 'TWO'
//     return 'Two Again'
// }


// console.log( two( ) );


// function apple(a,b){
//     let sum = a+b
//     return `The sum of ${a} and ${b} is ${sum}`
// }

// let arg1 = +prompt('Enter a Number')
// let arg2 = +prompt('Enter b Number')

// console.log( apple(arg1,arg2) );

//2

//function expression

// let bus = function( a ){

//     if( typeof a === typeof 2 ){
//        return 'Number'
//     }else{
//         return 'Not a Number'
//     }

// }

// console.log( bus('umbra') );

//3 

// Arrow Function

// let kite = (parameter) => {
//     // return codes
// } 
// kite()//invoke or call

// let kilo = (a,b) => {

// let ans = ( a>b ) ? a+' is Greater' : b+" is greater"
// return ans 

// }

// console.log( kilo( 34,67 ) );

// 4

// const one = (a,b,c) => {

//     if( a>b && a>c ){
//          return `${a} is greater`
//     }else if( b>a && b>c ){
//          return `${b} is greater`
//     }else{
//          return `${c} is greater`
//     }

// }

// console.log( one( 10,12,13 ) );

//5

// let run = ( 100 % 30 === 0 ) ? 'Divisible' : 'Not Divisible' 
// console.log(run);

// function one(a,b,c){

//     //    f        f        f       = f
//     if( a===b && b===c && a===c ){
//         return 'Equilateral'
//     //         f        f          f     
//     }else if( a===b || b===c || a===c ){
//         return 'isoceles'
//     }else{
//         return 'Scalene'
//     }
    

// }
// console.log( one(10,11,12) );

//6 

// let air = (a) => {
//     //             f  &&   t
//     const ans = ( a>=50 && a<=100 ) ? 'in range' : "Not In Range"
//     return ans

// }

// console.log( air( 64 ) );

// console.log( air( 6 ) );

// 7

// function one( a,b,c ){

//     console.log(b);
//     console.log(c);

// let sum = a + b + c
// return sum

// }

// console.log( one( 23 ) );

// function one( a,b ){

//  const ans = ( a >= 50 && a<=100 && b>=50 && b<=100 ) ? 'In Range':'Not In Range'
//  return ans

// }
// console.log( one( 70,80 ) );

// console.log( one( 7,80 ) );

// console.log( one( 7,8 ) );

// 7 

// let one = function(num1){

//     if( num1%3===0 && num1%7===0 ){
//         return `${num1} is multiple of both 3 and 7`
//     }else{
//        return `${num1} is not multiple of both 3 and 7`
//     }
    

// }

// console.log( one( 56 ) );
// console.log( one( 21 ) );
// console.log( one( 63 ) );

// 8 

// let one = (marks) => {

// //       t            f
// if( marks >= 40 && marks <= 70 ){
//    console.log('Grade C');
//    //            t          f  
// }else if( marks >=40 && marks <=80 ){
//    console.log('Grade B');
//          //      t           f  
// }else if( marks >= 40 && marks <= 90 ){
//    console.log('Grade A');
//    //          t            t 
// }else if( marks>=40 && marks <= 100 ){
//    console.log('Grade A++');
// }else{
//    console.log('Grade F');
// }

// }
// console.log( one( 78 ) );
// console.log( one( 98 ) );
// console.log( one( 23 ) );


//9

// function one( operation,num1,num2 ){

//     //     f
//     if( operation === 'add' ){
//          return `The sum of ${num1} and ${num2} is ${num1 + num2}`
//          //    f
//     }else if( operation ==='substract' ){
//         return  `The difference of ${num1} and ${num2} is ${num1 - num2}`
//         //      t
//     }else if( operation === 'product' ){
//          return `The product of ${num1} and ${num2} is ${num1 * num2}`
//     }else{
//         return  `The division of ${num1} and ${num2} is ${num1 / num2}`
//     }

// }

// console.log( one( 'product',45,10 ) );

//

// function a(para)
// {
//   return para**2
// }

// let num1 = a(5)
// console.log(num1);

// let sum = num1*100
// console.log(sum);


//Arrow funct

// const one =(a,b,c) =>  'Tree '+ (a+b+c)

// console.log( one(11,12,13) );

// const two = a =>  'Free '+ (a)+'%'

// console.log( two(11) );

//---------------

// const one =(a,b,c) =>  'Tree '+ (a+b+c)
// const two = a =>  'Free '+ (a)+'%'

// console.log( two(11) );
// console.log( one(11,12,13) );

// Execution Context

var a = 11

function one(num){

var result = num**2
// console.log(result);
return result

}

var sq1 = one(a)
// var sq2 = one(5)

console.log(sq1);