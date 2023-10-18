//Arrays

// https://www.tektutorialshub.com/wp-content/uploads/2021/05/How-Value-Types-Reference-Types-are-stored.png

// let a  = 'Jam'
// let b = 66
// let c = true

// let e = new Array('Jam',66,true)
// console.log(e);

// let d = ['Jam', 66 , true]
// console.log(d);
// console.log(d.length);

// // console.log( d[0] );
// // console.log( d[1] );
// // console.log( d[2] );

// for(let i = 0; i < d.length; i++){
//     console.log( `${d[i]} has index value = ${i}` );
// }

//----------------------------

// const a = 'Lemon'
// const a = 45
// a = 'FALSE'

// const arr = [44,55,66]
// console.log(arr);

// arr[3]= 'FISH'
// arr[0] = 'well'
// delete arr[3]

// console.log(arr);


// const arr = [44,55,66]
// console.log('Arr says ',arr);

// const b = arr
// b[0]='TIGER'

// console.log('B says ',b);
// console.log('Arr says ',arr);

//----------------------
// const arr = new Array(44,55,66)
// // const arr = [44,55,66]
// console.log('Arr says ',arr);
// console.log(typeof arr);

// console.log(arr.length);

// // console.log('*****************************');
// // let b = arr.toString() 
// // console.log(b);
// // console.log( typeof b );
// // console.log('*****************************');

// // // to check an array
// console.log( Array.isArray(arr) );
// console.log( arr instanceof Array );

// LOOPS in arrays

//for loop
// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log('Length of a ',a.length);

// //
// for (let i = 0; i < a.length; i++) {
//     console.log( a[i] );
// }

// console.log('*****************************');

// //for of
// for(const result  of a) {
//     console.log(result);
// }

// console.log('*****************************');

// //for in 
// for(const result  in a) {
//     console.log(result);
// }
// console.log('*****************************');
// //foreach = looping arrays , it never return , if so it shows undefined
// // x= element    y = index of element   z = origin OF each element
// let b =  a.forEach( (x,y,z)=>{
// // console.log(x);
// // console.log(y);
// // console.log(z);
// // return x 
// } )
// console.log(b);


// ex 

// function one(para){
// console.log(para);

// let a = para.split(' ')
// console.log(a);
// let b = []

// for(let result of a){
// //    console.log( result  );
//  b.push(result[0].toUpperCase() + result.slice(1)) 

// }
// console.log(b);
// return b.join(' ')

// }
// console.log( one( 'sky is heaven' ) );

//basic array methods

// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log('A"s length is '+a.length);

// console.log( a.push('YETI')  );
// console.log( a.pop()  );
// console.log( a.unshift('YETI')  );
// console.log( a.shift()  );

// console.log(a);
// console.log('A"s length is '+a.length);

function one(para){
    console.log(para);
    
    let a = para.split(' ')
    console.log(a);
    let b = []
    
    for(let result of a){
    //    console.log( result  );
     b.unshift( result[0].toUpperCase() + result.slice(1) ) 
    
    }
    console.log(b);
    return b.join(' ')
    
    }
    console.log( one( 'sky is heaven' ) );