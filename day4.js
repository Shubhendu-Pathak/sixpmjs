//falsy value = 0 false undefined null

//or operater ( || ) = skips falsy value
// console.log( 55 || 0 );
// console.log( undefined || null || true );
// console.log( 'yes' || 199 || null );
// console.log( false || null );
// console.log( false || null || 0 );
// console.log( false || null || 0 || undefined );

//and operator

// console.log( 'kite' && 0 );
// console.log( false && 80 );
// console.log( null && undefined && 888 );
// console.log( 'kite' && 990 && 0 );
// console.log( 'jam' && 999 );
// console.log( true && 1000 && 'jimmy' );

//1 odd or even

// let num = 5

// //    1   === 0 = false
// if( num%2 === 0 ){
//     console.log('EVEN');
// }else{
//     console.log('ODD');
// }


// let num = Number(prompt('Enter a number'))
// let num = +prompt('Enter a number')
// console.log(num);
// console.log(typeof num);


// if( num%2 === 0 ){
//     console.log('EVEN');
// }else{
//     console.log('ODD');
// }

//2
// let a = true
// // console.log( typeof 2 );

// //      boolean === number => false 
// if( typeof a === typeof 2 ){
//     console.log('Number');
// }else{
//     console.log('Not a Number');
// }

//3
// let num1 = 3
// let num2 = 7

// // console.log( 'answer is num1 '+num1 );
// // console.log( `answer is num1 ${num1}` );


// if( num1 < num2 ) console.log( `${num2} is greater than ${num1}` );
// else console.log( `${num1} is greater than ${num2}` );

//4
// let a = 10
// let b = 20
// let c = 30

// //   false && false = false(first)
// if( a>b && a>c ){
//     console.log(`${a} is greater`);
//     //    true && false = false
// }else if( b>a && b>c ){
//     console.log(`${b} is greater`);
// }else{
//     console.log(`${c} is greater`);
// }

// let a = 10
// let b = 60
// let c = 30

// //  false && false  = false
// if( a>b && a>c ){
//     console.log(`${a} is greater`);
//     //     true && true = true(last) 
// }else if( b>a && b>c ){
//     console.log(`${b} is greater`);
// }else{
//     console.log(`${c} is greater`);
// }

//5  3s equal = equilateral   2s equal = isoceles none are equal scalene 

// let a = 10
// let b =10
// let c = 10

//   //  true && true &&  true = true
// if( a===b && b===c && a===c ){
//     console.log('Equilateral');
//     //      true || true ||  true  = true
// }else if( a===b || b===c || a===c ){
//     console.log('isoceles');
// }else{
//     console.log('Scalene');
// }

//6
// let a = 45
// //     false &&  true = false
// if( a >= 50 && a<=100 ){
//     console.log('In Range');
// }else{
//     console.log('Not in range');
// }

// let a = 85
// //     true && true = true
// if( a >= 50 && a<=100 ){
//     console.log('In Range');
// }else{
//     console.log('Not in range');
// }

//7
// let a = 60
// let b = 70

// //     true  && true &&  true && true = true(last)
// if( a >= 50 && a<=100 && b>=50 && b<=100 ){
//     console.log('Inrange');
// }else{
//     console.log('Not Inrange');
// }

//8
// let a = 42

// //     true &&   true = true
// if( a%3===0 && a%7===0 ){
//     console.log(`${a} is multiple of both 3 and 7`);
// }else{
//     console.log(`${a} is not multiple of both 3 and 7`);
// }

// let a = 102

// //     true &&   false = false
// if( a%3===0 && a%7===0 ){
//     console.log(`${a} is multiple of both 3 and 7`);
// }else{
//     console.log(`${a} is not multiple of both 3 and 7`);
// }

//8 if a num is multipleof both 7 and 11

//9
// let marks = 38
//      //true      &&    true
// if( marks >= 40 && marks <= 70 ){
//     console.log('Grade C');
// }else if( marks >=40 && marks <=80 ){
//     console.log('Grade B');
// }else if( marks >= 40 && marks <= 90 ){
//     console.log('Grade A');
// }else if( marks>=40 && marks <= 100 ){
//     console.log('Grade A++');
// }else{
//     console.log('Grade F');
// }

//10
// let num1 = 10
// let num2 = 5
// let operation = 'pro'

// if( operation === 'add' ){
//     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
// }else if( operation ==='substract' ){
//     console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
// }else if( operation === 'product' ){
//     console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
// }else{
//     console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
// }

let num1 = +prompt('Enter num1')
console.log(num1);
console.log(typeof num1);

let num2 =  +prompt('Enter num2')
console.log(num2);
console.log(typeof num2);

let operation =  prompt('Enter operation (in lowecase)')
console.log(operation);
console.log(typeof operation);

if( operation === 'add' ){
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
}else if( operation ==='substract' ){
    console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
}else if( operation === 'product' ){
    console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
}else{
    console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
}