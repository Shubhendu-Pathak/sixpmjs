// function one(){

// return function two(){

// return a
// }

// }

// var a = 67

// let three = one()
// console.log(three);
// let four = three();
// console.log(four);

//------------------------------

// function one(){

//     return function two(){

//     return a
//     }

//     }

//     let three = one()
//     console.log(three);
//     let four = three();
//     console.log(four);

//    const a = 67

//------------------------------

// function one(){

//     return function two(){
//         var a = 67
//     }
//     }

//     console.log(a);

//     let three = one()
//     console.log(three);
//     let four = three();
//     console.log(four);

//Block Scope

//Compound Statement = block

// if( true ) {
//     var a= 10
//     console.log(a);
// }

// if( true ) console.log('Piano');

//------------------

// let b = "B global";
// const c = "C global";

// {
//   var a = "A block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " in Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(a + " in Global");
// console.log(b + " in Global");
// console.log(c + " in Global");

//------ Shadowing -----------

// var a = 'A Global';
// console.log(a + " from Global");

// {
//   var a = "A changed in block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " from Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(a + " from Global");

// let b = 'B Global';
// console.log(b + " from Global");

// {
//   var a = "A changed in block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " from Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(b + " from Global");


//-----------------------------

// let b = 'B Global';
// console.log(b + " from Global");
// {
//   var a = "A changed in block";
//   let b = "B block";
//   const c = "C block";
//   console.log(a + " from Block");
//   console.log(b + " in Block");
//   console.log(c + " in Block");
// }

// console.log(b + " from Global");

