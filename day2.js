// var a = 'pen'
// var a  = 45
// a = true
// console.log(a);

// let b = false
// // let b = 'rat'
// b = 67
// console.log(b);

// const c = 999
// // const c = true
// // c = 5555
// console.log(c);

//falsy value = null undefined 0 false

//Primitive data type = string number boolean bigint null undefined = both are falsy


// undefined
// let d
// console.log(d);
// console.log(typeof d);

// if( d ){
//     console.log(true);
// }else{
//     console.log(false);
// }


// let f = 56
// if( f ){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let n = null// intentional absence of value or object property
// console.log(n);
// console.log(typeof n);

// if( n ){
//     console.log(true);
// }else{
//     console.log(false);
// }

//operators

//arithmetic operators
// let a = 45
// let b =  10
// console.log( a + b );
// console.log( a - b );
// console.log( a * b );
// console.log( a / b );
// console.log( a % b );// remainder

//logical operators
// console.log( 11 > 99 );
// console.log( 11 < 99 );
// console.log( 'A' > 'a' );// 41 > 61

//comparators
// console.log( 33 == 33 );
// console.log( 33 === 33 );

// console.log( 33 == 3 );
// console.log( 33 === 3 );

// console.log( 'rat' == 'rat' );
// console.log( 'rat' === 'rat' );

// console.log( 'Rat' == 'rat' );
// console.log( 'Rat' === 'rat' );

// console.log( 11 == '11' );
// console.log( 11 === '11' );

// console.log( 99 >= 99 ); // greater than or equals to
// console.log( 99 <= 99 );//less than or equals to

// console.log( 199 >= 200 );
// console.log( 199 <= 200 );

//Not
// console.log(21 == 21);
// console.log( 21 != 21 );// !=   ! + ==

// console.log(21 === 21);
// console.log( 21 !== 21 )

// console.log(21 == '21');
// console.log( 21 != '21' )// !=  ! + ==

// console.log('*******');

// console.log(21 === '21');
// console.log( 21 !== '21' )// !==   ! + ===

// unary

// let a = 19
// a = 29

// // a += 100
// // a -= 100
// // a *= 100
// // a /= 100


// console.log(a);

//falsy = 0 false undefined null
//or operator ( || ) == skips falsy value

// console.log( false || 'yes' );
// console.log( false || null || 99 );
// console.log( false || undefined || null || 0 || true );
// console.log( 'james' || false );
// console.log( true || undefined || 'grapes' );
// console.log( undefined || null );
// console.log( 0 || false || undefined );

// and operator ( && ) = targets falsy value
// console.log( true && null );
// console.log( true && 10 && 'lion' && 0 );
// console.log( false && 55 );
// console.log(undefined && 0  );
// console.log( 'red' && true );
// console.log( 'red' && true && 45 && 999 );

//conditional statements

// {} = code block

// if(condition){
//     // st1
// }else{
//     // st2
// }

// if(condition) st1
// else st2

// if( true ) console.log('van');
// else console.log('GYM');

// if( false ) console.log('van');
// else console.log('GYM');

// if( false ) {
//     let a = 66
//     let b = 10
//     console.log('van '+a*b);
// }
// else {
//     let a = 16
//     let b = 100
//     console.log('GYM ' + a*b);
// }

// if( 55 % 5 == 90 ){
//     console.log('OK');
// }else{
//     console.log( 'Not Ok' )
// }

//Exercise
// let p = 10
// let h =10
// let b = 10

// //   ( true && true && true ) = true(last)
// if( p===h && p===b && h===b ){
//     console.log('Equilateral');
//     // ( true || true || true ) = true(first)
// }else if(  p===h || p===b || h===b  ){
//     console.log('Isoceles');
// }else{
//     console.log('Scalene');
// }

// let p = 11
// let h =10
// let b = 10

// //   ( false && false && true ) = false(first)
// if( p===h && p===b && h===b ){
//     console.log('Equilateral');
//     // ( false|| false || true ) = true(last)
// }else if(  p===h || p===b || h===b  ){
//     console.log('Isoceles');
// }else{
//     console.log('Scalene');
// }

// let p = 10
// let h =11
// let b = 12


// if( p===h && p===b && h===b ){
//     console.log('Equilateral');
    
// }else if(  p===h || p===b || h===b  ){
//     console.log('Isoceles');
// }else{
//     console.log('Scalene');
// }

//Ternary Operator
// let one = (condition) ? 'st1' : 'st2'

// let a = ( 55 < 45 ) ? 'cow' :'mow'

// console.log(a);

//switch case

// let one = 99

// switch(one){
//     case 99 : one ='tree';
//     break;
//     case 77 : one ='trunk';
//     break;
//     case 88 : one ='Treat';
//     break;
//     default: one = 'Not Found';
//     break;
// }
// console.log(one);