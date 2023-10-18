// // // console.log( a );

// // // var a = 'Kitten'

// // // console.log(a);

// // // console.log('***************');

// // // // console.log(b);

// // // let b = 999

// // // console.log(b);

// // // console.log('*************');

// // // console.log( c );

// // // const c = true

// // // console.log(c);

// // /// Hoisting = it refers to js giving higher precedence to the declaration of variables , function and class during execution

// // // Temporal Dead Zone = it is an area whre a variable is in-accessible until the moment the comp , meets its initialization point.


// // {
// //     console.log( a );

// // var a = 'Kitten'

// // console.log(a);
// // }

// // console.log('***************');

// // {
// //     // TDZ exists
// //      // TDZ exists
// //       // TDZ exists
// //        // TDZ exists
// //     // console.log(b); // TDZ exists
// //  // TDZ exists
// //   // TDZ exists
// //    // TDZ exists
// // let b = 999// // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // console.log(b);}

// // console.log('*************');
// // {

// //      // TDZ exists
// //      // TDZ exists
// //       // TDZ exists
// //        // TDZ exists
// // console.log( c );// TDZ exists
// //  // TDZ exists
// //      // TDZ exists
// //       // TDZ exists
// //        // TDZ exists

// // const c = true// TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // // TDZ  doesn't exists
// // console.log(c);

// // }


// // hoisting in functions

// // console.log( air() );

// // function air(){
// //     return 'One'
// // }

// // console.log('***********');

// // console.log( two );
// // // console.log( two() );

// // var two = function(){
// //     return 'Two'
// // }

// // console.log( two() );

// // console.log('***********');

// // console.log(three());

// // let three = function(){
// //     return 'Three'
// // }

// // console.log(three());

// // console.log('***********');

// // // console.log( four() );

// // const four = function(){
// //     return 'Four'
// // }
// // console.log( four() );



// // block scope

// // Block = compound statement

// // if( 10%2===0 ) console.log('Papaya');

// // if( 10%2===0 ) {
// //     console.log('Papaya');
// // }

// // var a = 'Old Value'
// // console.log( a+' Func Scope');

// // {
// //     console.log( a+' Block Scope');
// //     var a = 'Current value'
// //     console.log( a+' Block Scope');
// // }

// // console.log( a+' Func Scope');

// // var a = 'New Value'
// // console.log( a+' Func Scope');

// // console.log('***********');

// // console.log(a);
// // let a = 'Old Value'
// // console.log( a);

// // {
// //     // console.log( a+' Block Scope');
// //     let b = 'Current value'
// //     console.log( b+' Block Scope');
// // }

// // console.log( a);
// // console.log(b);

// // let a = 'New Value'
// // console.log( a+' Func Scope');

// // console.log('*********************');

// // const a = 111
// // {
// //     const a = 222
// //     // const a = 222.5
// //     {
// //         const a = 333
// //     console.log(a)
// //     }
    
 
// // }


// // CLOSURES = function + its Lexical Scope

// function one(){
//     var x = 5

//    return function two(){
//     var y = 10
//             return function three(){
//                 return (x+y)
//             }       
//     }
    
// }

// var e = one()
// console.log(e);
// var f = e()
// console.log(f);

// // console.log('__________________________________');


// // console.log( air() );

// // function air(){
// //     return 'One'
// // }

// // console.log('***********');

// // console.log( two );
// // // console.log( two() );

// // var two = function(){
// //     return 'Two'
// // }

// // console.log( two() );

// // console.log('***********');

// // // console.log(three());

// // let three = function(){
// //     return 'Three'
// // }

// // console.log(three());

// // console.log('***********');

// // // console.log( four() );

// // const four = function(){
// //     return 'Four'
// // }
// // console.log( four() );

// // console.log('__________________________________');

// var g = f()
// console.log(g);


// console.log('******************');

// function a(){
//     var x = 11

//     function b(){
//         var y = 22

//         function c(){
//             console.log(x+y);
//         }
//         c()
//     }
//     b()
// }

// a()

 
// (
//     function (){
//         console.log('one');
//     }

// )()



