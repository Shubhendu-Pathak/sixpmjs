//High order and call back functions

// call back = funct returned / passed in argument/ func in parameters

// function one(x){

//     return function two(y){
//         return function three(z){
//             return 'three says '+(x+y+z)
//         }
//     }
// }
// // console.log(one());

// let a = one( 3 )
// console.log(a);

// let b = a(4)
// console.log(b);

// let c = b(5)
// console.log(c);

//-------------------------

// let one = function( para ){
// return para
// }

// let a = one( ()=> 'What Am I ?'  )
// console.log( a );

// let b = a()
// console.log(b);

//-------------------

// let one = function( para ){
//     return para
//     }

//     let a = one( function(){ return  'What Am I ?'}  )
//     console.log( a );

//     let b = a()
//     console.log(b);

//----------------------------

// let one = ( a = ()=> 'James Bond' ) => {
// return a
// }

// let x = one( )
// console.log(x);

// let y = x()
// console.log(y);

///----------------------------

// let a = 567

// function one(){
//    return function two(){
//               return 'Second'
//                         }

// }

// let b = one()
// console.log( b );
// // let c = two()
// let c = b()
// console.log(c);

//Currying

// function one(x){

//     return function two(y){
//         return function three(z){
//             return 'three says '+(x+y+z)
//         }
//     }
// }

// console.log( one(2)(3)(4)  );

//Infinite Currying

// function sum( a ){
// return function(b){
//     return function(){
//         return a+b
//     }
// }
// }

// // console.log(  sum(5)(10)()  );

// ///---------------------------------

// //       x1=10  x2=15  x3=18  x4 = 22
// function car( x ){
//     return function( y ){ // y1=5 y2=3 y3=4  y4=?
// // y1= t  y2=t  y3=t  y4=f
//         if( y ) return car( x+y )//car(15)  // car( 18 ) //car(22)
//         else return x
//     }
// }

// console.log(  car( 10 )( 5 )(3)( 4 )() );

//Scope and Scope Chain

//Scope = an area/ region/space
//Local Scope = local region / restricted region
//Global Scope = global space/ public space
//Lexical Environment = with refrence to surrounding state

// function two(){

//     console.log(a)

// }
// var a = 22

// two()

// console.log('************************');

// function one(){

//     var b = 22

// }

// console.log(b)
// one()

///Ques

// console.log( one() );

// function one(){
//     return 'Lion'
// }


// function one(){

//     var b = 22

// }

// console.log(b)
// one()

//------------------------------------

function one() {
 console.log(b);

  function two() {
    console.log(a);
  }
  two();
}

var a = 55;
var b= 99
console.log( one() );
