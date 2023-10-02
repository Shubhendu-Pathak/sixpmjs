// console.log( 10 % 2 === 0 );

// let a = 10
// if( a % 2 === 0 ){
//     console.log('EVEN');
// }else{
//     console.log('ODD');
// }

//     5        false
// for( let a = 2; a<=4 ;   a++ ) console.log( a );//2  3  4 


//Nesting Of Loops

//         2      true  1++ 
// for( let a = 1; a < 3; a++ ){

// console.log(a + ' Cycle Starts');// a= 1
// console.log(`   a says ${a}`);// a=1


// for(let b = 4; b < 6  ;  b++){
//     console.log(`      b says ${b} `);
// }

// // for(let c = 40; c < 42  ;  c++){
// //     console.log(`           c says ${c}`);
// // }

// console.log(a + ' Cycle Ends');// a= 1
// }


//1)

//       5    true  4++
// for(let a = 1;a<=4;a++){
//     document.write(`a${a};`) // a = 4

//     //        4     4<4=false  
//     for( let b = 1; b<a ; b++ ){
//        document.write(`b${b}`);// b = 1 2 3
//     }

//     document.write(`<br/>`)
// }

// for(let a = 1;a<=10;a++){
//     document.write(``) 

    
//     for( let b = 1; b<a ; b++ ){
//        document.write(`*`);
//     }

//     document.write(`<br/>`)
// }

//2

//    2         true   1++
// for( let a = 1; a<=5; a++ ){
//     document.write(`a${a};`)// a = 1

//     //      2       1<=5-2 / 1<=3 = true    1++
//     // for( let b = 1;         b<=5-a         ;b++ ){
//     //    document.write(`b${b}`);//b = 1
//     // }

// //            2     2<=1=false
//     for( let c = 1; c<=a; c++ ){
//         document.write(`c${c}`) // c =1
//     }

//     document.write('<br/>')
// }

// for( let a = 1; a<=10; a++ ){
//     // document.write(`&nbsp;&nbsp`)

  
//     for( let b = 1; b<=10-a ;b++ ){
//     //    document.write(`*`);
//     document.write(`&nbsp;&nbsp`)

//     }


//     for( let c = 1; c<=a; c++ ){
//         document.write(`<span>*</span>`)
//     }

//     document.write('<br/>')
// }
  
// for( let a = 3; a>=1;   a--   ){
//     document.write(`a${a};`)// a= 2

  
//     for( let b = 1;  b<a  ;b++ ){
//         document.write(`b${b};`)
//     }

    
//     for( let c = 1; c<=3-a; c++ ){
//         document.write(`c${c};`) 
//     }

//     document.write('<br/>')
// }


// for( let a = 8; a>=1;   a--   ){
//     document.write(``)

  
//     for( let b = 1;  b<a  ;b++ ){
//         document.write(`<span>*</span>`)
//     }

    
//     for( let c = 1; c<=8-a; c++ ){
//         document.write(`*`) 
//     }

//     document.write('<br/>')
// }