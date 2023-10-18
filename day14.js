//

//scope chain in block scope

// var a = 99
// console.log(a,' in Func Scope');

// {
//     console.log(a,' in Block Scope');
//     var a = 88
//     console.log(a,' in Block Scope');
// }

// console.log(a,' in Func Scope');

// let a = 99
// console.log(a,);

// {
//    let a = 88
//     console.log(a,' in Block Scope');
// }

// console.log(a,);

// const x =108
// {
//     // const x = 1008
//     {
//         // const x = 10008
//         console.log(x)
//     }
// }

//closures = function + lexical environment

// function x(){
//     var a = 999
//       function y(){
//         var b = 1000
//         function c(){
//             console.log(a+b);
//         }
//         c()
//       }
//       y()
// }
// x()

//---------------------------------------

// var b = 1000;
    // return function c() {
    //   console.log(a + b);
    // };

// function x() {
//   var a = 99;
//   return function y() {
//     return a*100
//   };
// }



// var e = x()
// console.log(e);

// console.log('-______________________________________');

// let a = 99
// console.log(a,);

// {
//    let a = 88
//     console.log(a,' in Block Scope');
// }

// console.log(a,);

// const h =108
// {
//     // const x = 1008
//     {
//         // const x = 10008
//         console.log(x)
//     }
// }

// console.log('________________________________________________________________');


// var f = e()
// console.log(f);



//setimeout closures

// setTimeout(function(){
//     console.log('hello');
// },2000)

//---------------------------

// var a = 99
// console.log(a,' First');

// console.log('________________________');

// //        3       f 
// for(var a = 0; a < 3; a++){
// console.log(a); // 0 1 2  
// }

// console.log('________________________');

// console.log( a,' Second' );



// var a = 99 ---> 4


//----------------------------

// let a = 99
// console.log(a,' First');

// console.log('________________________');

// //      
// for(let a = 0; a < 3; a++){
// console.log(a); 
// }

// console.log('________________________');

// console.log( a,' Second' );

//setimeout + closures

//var
// 0 1 2 

//     var a= 3  f   loop stop
// for(var a = 0; a < 3; a++){
//     console.log(a,' before setimeout'); // 0 1 2  

// setTimeout( function(){
//     document.write(a)
//     document.write('<br/>')
// },a*1000)

//     }

    // 0 0s
    // 1  1000ms
    // 2  2000ms


    // for(let a = 0; a < 3; a++){
    //     console.log(a,' before setimeout'); // 0 1 2  
    
    // setTimeout( function(){
    //     document.write(a)
    //     document.write('<br/>')
    // },a*1000)
    //     }

//closure 1
        // block{
//                  a =  0
        // }

        // function(){
            // document.write(a)
            // document.write('<br/>')
        // }

        //closure 2
        // block{
//                  a =  1
        // }

        // function(){
            // document.write(a)
            // document.write('<br/>')
        // }

    ///

//     for(var a = 0; a < 3; a++){
//         console.log(a,' before setimeout'); // 0 1 2  
    
//    function b(para){
//     setTimeout( function(){
//         document.write(para)
//         document.write('<br/>')
//     },para*1000)
//    }
// b(a)


//         }



// function a(x){
//     return function b(y){
//         return x+y
//     }
// }

// console.log( a(10)(20) );

//Primitive vs refrence value

let a = 30
let b = a
a = 31

console.log(a, ' A Says');
console.log(b, ' b Says');


console.log('-------------------------');

const c = {
    name:"Asu",
    age:44
}

console.log('C says ',c);

const d = c
d.age = 33

console.log('D says ',d);

console.log('-------------------------');
console.log('C says ',c);