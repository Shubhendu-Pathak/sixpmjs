//FLATMAP

// let a = [2,3,4,5]
// console.log(a);

// let b = a.map((ele)=>{
//    return    [ele*10]
// })
// console.log(b);// [ [20],[30],[40],[50]  ]

// let c = b.flat(Infinity)
// console.log(c)

// console.log('*************************');;

// let e = a.map((ele)=>[ele*10]).flat(Infinity)
// console.log(e);

// console.log('*************************');;

// let d = a.flatMap(ele => [ele*10])
// console.log(d);

//some and every

// let a = [1,2,3,4,5]
// console.log(a);

// let b = a.some((ele)=>{
//     return ele > 4
// })
// console.log(b);

// console.log('*************************');

// let c = a.every((ele)=>{
//     return ele > 4
// })
// console.log(c);

//fill =  arr.fill(value,start,end)

// let a = ['air','rice','toy','ICE']
// console.log(a);

// let b = a.fill('nest')
// console.log(b);

// let c = a.fill('Fish',0,2)
// console.log(c);

// to Locale String = arr.LocaleString(locales,options)

// let a  = [22,33,44,55]
// console.log(a);

// console.log('*************************');

// let b = a.toString()
// console.log(b);
// console.log( typeof b );

// console.log('*************************');

// let c = a.toLocaleString()
// console.log(c);
// console.log(typeof c);

// console.log('*************************');

// let d = a.toLocaleString('en-US',{style:'currency',currency:'USD'})
// console.log(d);

// console.log('*************************');

// let e = a.toLocaleString('ja-JP-u-ca-japanese',{style:'currency',currency:'YEN'})
// console.log(e);


// Sub Arrays

//slice = does not mutates

// let a = [1,2,3,4,5,6,7,8,9,10]
// console.log(a);

// // console.log(a.slice(5));
// console.log( a.slice(3,7) );// start  end-1

// console.log(a);

// console.log('*************************');

// //splice

// // console.log( a.splice(5) );

// // console.log( a.splice( 4,3 ) );// start  length
// // console.log( a.splice(1,4,'SEVEN') );
// // console.log( a.splice(1,4,[45,67,89]) );

// let f = a.splice(2,4,'PIGEON')
// console.log(f.map(ele=>ele*100)  );

// console.log(a);

//reduce  = arr.reduce(cb(accumulator,currentvalue),initialvalue)

//accumulator = accumulates return value
//currentvalue = element being passed from array
//initialvalue(optional) = 
//if entered, it is passed into the callback
//if not then the first elemnet of currentvalue acts like an accumulator for the first time.

// let a = [1,2,3,4]
// console.log(a);
// let b = a.reduce( (acc,cv)=>{
//     return acc
// } )
// console.log(b);

// console.log('********************************');

// let c = [1,2,3,4]
// console.log(c);
// let d = a.reduce(  (acc,cv)=> {
//     return acc
//  },999)
// console.log(d);
 
// console.log('********************************');

// let a = [1,2,3,4]
// console.log(a);

// let b = a.reduce(  (acc,cv)=> {
//     return acc+cv
// },999)
// console.log( b );

// // acc  cv  return
// // 999  1    1000
// // 1000  2    1002
// // 1002  3    1005
// // 1005  4    1009

// let a = [1,2,3,4]
// console.log(a);

// let b = a.reduce(  (acc,cv)=> {
//     return acc+cv
// })
// console.log( b );

// acc  cv  return
// 1     

console.log('********************************');

// let a = [199,445,'GRASS','Leo']
// console.log( a );
// console.log( a.indexOf( 'Leo' ) );
// console.log( a.indexOf( 'messi' ) );

// let b = ['GRASS','Leo',199,'LEO',445,'GRASS','Leo']

//  [ 45,67 ].push(['GRASS','Leo',199,'LEO',445,'GRASS','Leo'])

//if indexof is -1 for all element then push if not then dont

// console.log([45,67,'LEO'].indexOf('LEO'))

// let a = ['GRASS','Leo',199,'LEO',445,'GRASS','Leo']

// let b = a.reduce((acc,cv)=>{
// if(acc.indexOf(cv)=== -1){
//     acc.push(cv)
// }
// return acc
// },[])
// console.log(b);

// acc                         cv      return
// []                         GRASS       [GRASS]
// [GRASS]                     Leo        [GRASS,Leo]
//[GRASS,Leo]                  199        [GRASS,Leo,199]
// [GRASS,Leo,199]             LEO        [GRASS,Leo,199,LEO]
//[GRASS,Leo,199,LEO]         445         [GRASS,Leo,199,LEO,445]
//[GRASS,Leo,199,LEO,445]    GRASS         0 
//[GRASS,Leo,199,LEO,445]     Leo          1
//[GRASS,Leo,199,LEO,445]