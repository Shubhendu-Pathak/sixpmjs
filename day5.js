//Increment operator ++

// let a = 9
// console.log(a);
// console.log( a++ );// post increment
// console.log(a);

// console.log('*********************');

// let b = 99
// console.log(b);
// console.log( ++b );//pre increment
// console.log(b);

// decrement operator

// let a = 9
// console.log(a);
// console.log( a-- );
// console.log(a);

// console.log('*********************');

// let b = 99
// console.log(b);
// console.log( --b );
// console.log(b);

//Loops 

// for(st1;condition;st2){
//     codes
// }

//       7          false           4 5 6
// for( let air = 4; air < 7; air++ ) console.log(air);

//        6         true     5          4 5
// for( let air = 4; air < 10; air+=1 ) console.log(air);

//      5           true     3        1 3 5 7 ----
// for( let air = 1; air < 10; air+=2 ) console.log(air);


// for( let air = 0; air < 20; air+=2 ) console.log(air);

//CONTINUE

// for( let air = 0; air <= 10; air++ ) {
// // console.log(air);
// // if( air===5 ) continue //skip

// // if( air % 2 === 0 ) continue // skip even
// if( air % 2 !== 0 ) continue // skip odd 

// console.log(air);
// }


// for(let a =0; a<=20; a++){
//     if( a%2===0 ){
//         console.log(a);
//     }
// }

// for(let a =0; a<=20; a++){
//     if( a%2 !== 0 ){
//         console.log(a);
//     }
// }

//BREAK

// for( let a = 3 ; a<=12 ;a++){

//     if( a === 7 ) break
// // if(a===7) continue

//     console.log(a);
// }

// pre = before,++a   post = after ,a++ 
// var let

// var a ='CAR' 
// console.log(a);

// //       3        false             0 1 2 
// for( var a = 0;  a < 3;   a++  ) console.log(a);


// console.log('*************');

// console.log( a );


// let a ='CAR' 
// console.log(a);

// console.log('****************');

//  for( let a = 0;  a < 3;   a++  ) {
//     console.log(a);
//  }

// console.log('*************');

// console.log( a );

// let b = true
// let b = 99
// console.log(b);


//do while

// let a = 10000//10001
// do{
//     console.log(a);// 10000
//     a++ 
// }while( a <= 102 ) /// false

// console.log('*****************');

// for( let b = 10000; b<=102 ; b++ ){
//     console.log(b);
// }


// Nesting LOOP

//       1        true  0
// for (let a = 0; a < 2; a++) {
//     console.log('CYCLE STARTS');

//     console.log(`A ${a}`);

// //           6        false   
//     for (let b = 4; b <= 5; b++) {
//         console.log(` B ${b} `);// 4 5
//     }

//     console.log('CYCLE ENDS');

// }