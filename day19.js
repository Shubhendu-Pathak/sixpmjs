// let a = [11,22,33]
// console.log(a);
// let b = ['A','B','C']
// console.log(b);
// let c = ['cat','rain','ice']
// console.log(c);

// console.log('********************************');

// let d = a+b+c
// console.log(d);
// console.log(typeof d);

// console.log('********************************');

// let e = [ a,b,c ]// [ [],[],[] ]
// console.log(e);

// console.log('********************************');

// let f = a.concat(c,b)
// console.log(f);

// console.log('********************************');
// // spread operator = ... (on RHS)

// let g = ['PEn',...a,987654321,...b,'ORANGE',...c]
// console.log(g);

//ARRAY DESTRUCTURING

// let a = [11,22,33,'Kite',true]
// console.log(a);

// let a1 = a[0] 
// console.log(a1 * 10 );

// let a2 = a[1] 
// console.log(a2 * 10 );

// let a3 = a[2] 
// console.log(a3 * 10 );

// let [a1,a2,a3,a4,a5] = a
// console.log(a1,a2,a3,a4,a5);

//REST OPERATOR ...(LHS), it binds the element into an array

// let [a1,a2,...a3] =  a
// console.log(a1, a2, a3);

// //SPREAD = acts as a liberator
// let b = [ ...a ]
// console.log(b);

//indexOF

// let a = [11,22,33,'Kite',true]
// console.log(a);
// console.log( a.indexOf(true) );
// console.log( a.indexOf('TRUE') );

//includes

// let a = [11,22,33,'Kite',true]
// console.log(a);

// console.log( a.includes(33) );

//foreach  pop push shift unshift

//find

// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.find((ele)=>{
// //    return ele===49
// return ele > 50
// })
// console.log(b);

//filter = returns filtered array
// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.filter((ele)=>{
// //    return ele===49
// return ele > 50
// })
// console.log(b);

//map = return new array 
// let a = [11,49,22,45,76,51,89]
// console.log(a);
// let b = a.map((ele,index)=>{
//    return ele * index
// // return ele+' '+'JIMMY 🚫 SHERGILL'
// // return ele > 50
// })
// console.log(b);


// // console.log( 76 > 50 );

// console.log('********************************');

// let c = a.filter((ele,index)=>{
//     //    return ele * index
//     // return ele+' '+'JIMMY 🚫 SHERGILL'
//     return ele > 50
//     })
//     console.log(c);

// console.log('********************************');

// //foreach never returns
// a.forEach(ele=>console.log(ele))

//flat
// let a = [1,[2,[3,[4,[5,6]]]]]
// console.log(a);
// console.log( a.flat( 1 ) );
// console.log( a.flat( 2 ) );
// console.log( a.flat( 3 ) );
// console.log( a.flat( 4 ) );

// console.log(a.flat(Infinity));


//CHAIN METHOD
// let a =  [1,[2,3,[4,[5,[6,7]]]]]
// console.log(a);

// // let b = a.filter(ele=> ele >40 )
// // console.log(b);

// let b = a
// .flat(Infinity)
// .filter(ele=>ele>3)
// .map(ele=>ele*10)
// .reduce((a,b)=>a+b)


// console.log(b);

//sort
//sorted on basis of thier Encoded Byte (UTF8)
// let a = ['r','S','y','W','a','R','C']
// console.log(a);
// console.log( a.sort() );

// let a = [45,34,84,93,10]
// console.log(a);

// // console.log(a.sort());

// // let a = [10045,34,284,193,90]
// // console.log(a);

// // console.log(a.sort());

// //---------------------------------

// // x-y  -ve   return x then y 
// //x-y   +ve   return y then x
// //x-y    0    return  no change

// let c = a.sort((x,y)=>{
// // return x-y  //ascending
// return y-x // descending
// })
// console.log(c);

//ascending
// x   y   x-y   return
// 45  34   +     34,45
// 34  84   -     34,84
// 84  93   -     84,93
//

//ascending
// x   y   y-x   return
// 45  34   -     45,34  
//  34  84   +    84,34  
//
//

