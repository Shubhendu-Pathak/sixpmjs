// var a = 99
// console.log(a);

// function one(num){
//     let ans = num**2
//     return ans
// }

// var sq1 = one(a)
// console.log(sq1);

// var sq2 = one(10)
// console.log(sq2);

//Hoisting and TDZ

//Hoisting = it refers to js giving higher precedence to the decleration of variables  funct and classes during program execution

// console.log(a);

// var a = 'ORANGE'

// console.log(a);


//----------------------

//TDZ = it is the area of block where a bariable is inaccesible until the moment the computer completely initializes it with a value

// {
// // TDZ does exist
// // TDZ does exist
// // TDZ does exist
//     // console.log(b);// TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//     let b = 'Poem' // TDZ does not exist
//     // TDZ does not exist
//     // TDZ does not exist
//     // TDZ does not exist
//     // TDZ does not exist
//     console.log(b);// TDZ does not exist
//    // TDZ does not exist
//    // TDZ does not exist
// }


// {
//     // TDZ does exist
//     // TDZ does exist
//     // TDZ does exist
//         // console.log(b);// TDZ does exist
//         // TDZ does exist
//         // TDZ does exist
//         // TDZ does exist
//         // TDZ does exist
//         const b = 'Poem' // TDZ does not exist
//         // TDZ does not exist
//         // TDZ does not exist
//         // TDZ does not exist
//         // TDZ does not exist
//         console.log(b);// TDZ does not exist
//        // TDZ does not exist
//        // TDZ does not exist
//     }


// console.log(a);
// console.log(b);
// console.log(c);

// var a= 89
// let b = true
// const c = false

//-----------------------------

// var a = 'India'

// // console.log( one() );

// function one(){
//     return 'DECLaRATION FUNC'
// }

// console.log( one() );

// // ----------------------------------

// // console.log( umbrella() );


// let umbrella = function(){
//     return 'Umbrella'
// }


// console.log( umbrella()  );

// // ----------------

// let arr = ()=> 'RainBow'
// console.log( arr() );

//high order func and call back func
//call back func = func returned or passed as para,etr or argument

// here one is high order func

// a= 2
function one(a){
   // b= 3
    return function two(b){
        // c = 4
        return function three(c){
           return `${a+b+c} Returned by Three Function`
        }
    } 

}

let first = one(2)
console.log(first);

let second = first(3)
console.log(second);

let three = second(4)
console.log(three);

console.log('*******************************');

// Currying

console.log( one(2)(3)(4) );


// Scope and Scope Chain

// Scope = area , space or region

//Global Scope = means global space or a public space

//Local Scope  = means a local space/region/area or is restricted region



