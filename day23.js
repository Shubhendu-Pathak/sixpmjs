// // // // // // // // // // // Date objects   genrate, set, get


// // // // // // // // // // // let a = new Date()
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // console.log( typeof a );

// // // // // // // // // // let a = new Date()

// // // // // // // // // // a = new Date("2023-10-17")
// // // // // // // // // // a = new Date("November 7,2000")
// // // // // // // // // // a = new Date("November 7,2000 08:20:54")
// // // // // // // // // // //year month day hr min sec millisec
// // // // // // // // // // //month 0(Jan) and 11(dec)

// // // // // // // // // // a=new Date(2022,4,14,9,25,44)
// // // // // // // // // // a= new Date(2020,4,21)
// // // // // // // // // // a= new Date(2020,4)
// // // // // // // // // // a= new Date(2020)
// // // // // // // // // // a= new Date(24*60*60*1000)
// // // // // // // // // // a=new Date(1698412491152)


// // // // // // // // // // console.log(a);


// // // // // // // // // //----------------------------

// // // // // // // // // let a = new Date();
// // // // // // // // // console.log(a);
// // // // // // // // // console.log( typeof a );

// // // // // // // // // // let b = a.toString()
// // // // // // // // // // console.log(b);
// // // // // // // // // // console.log(typeof b);

// // // // // // // // // // let b = a.toUTCString()
// // // // // // // // // // console.log(b);
// // // // // // // // // // console.log(typeof b);

// // // // // // // // // // let b = a.toISOString()
// // // // // // // // // // console.log(b);
// // // // // // // // // // console.log(typeof b);

// // // // // // // // // let b = a.toLocaleDateString()
// // // // // // // // // console.log(b);
// // // // // // // // // console.log(typeof b);


// // // // // // // // //---------------------------

// // // // // // // // let a = new Date()

// // // // // // // // a =new Date("2022-12-15")
// // // // // // // // a= new Date("11/23/2023")



// // // // // // // // console.log(a);
// // // // // // // // console.log( typeof a );

// // // // // // // //------------------------

// // // // // // // let a = new Date("09/17/2000")
// // // // // // // console.log(a);

// // // // // // // let b = Date.parse(a)
// // // // // // // console.log(b);

// // // // // // // get date

// // // // // // let a = new Date()
// // // // // // console.log(a);

// // // // // // console.log(a.getDate());
// // // // // // console.log(a.getMinutes());
// // // // // // console.log(a.getMonth());
// // // // // // // week = 0(monday)  --->  7(sunday)
// // // // // // console.log(a.getDay());
// // // // // // console.log(a.getFullYear());

// // // // // //set date

// // // // // let a = new Date()
// // // // // console.log(a);

// // // // // let b = a.setFullYear(2001)
// // // // // b=a.setMonth(5)
// // // // // b=a.setHours(10)

// // // // // console.log(a);

// // // // // setInterval(() => {
// // // //     // console.log('Physics');
// // // // // }, 1000);

// // // // // ----------------------------------

// // // // let a = new Date(2023,9,27,20,25,45)
// // // // console.log(a);

// // // // let hr = a.getHours()
// // // // console.log(hr);
// // // // let min = a.getMinutes()
// // // // console.log(min);
// // // // // let sec = a.getSeconds()
// // // // // console.log(sec);

// // // // if( hr>=12 && min>0 ){
// // // //     console.log(`${hr}:${min} pm`);
// // // // }else{
// // // //     console.log(`${hr}:${min} am`);
// // // // }


// // // // Array method reduce 

// // // //reduce = arr.reduce( cb(accumulator,currentvalue),initialvalue )

// // // // accumulator  = accumulates return value
// // // //currentvalue = element passed from array
// // // // initialvalue(optional) = if entered passed into callback, if not entered currenrtvalue acts like accumulator

// // // let a = [1,2,3]
// // // console.log(a);

// // // // let b = a.reduce((acc,cv)=>{
// // // //     return acc+cv
// // // // },10)
// // // // console.log(b);

// // // //  acc  cv  return 
// // // //   10  1    11
// // // //   11  2     13
// // // //   13  3     16

// // // let b = a.reduce((acc,cv)=>{
// // //     return acc+cv
// // // })
// // // console.log(b);

// // // //  acc  cv  return 

// // //to get unique elementsin array

// // let a = [ 11,44,11,55,22,44,33]
// // console.log(a);
// // // console.log( a.indexOf(25) );

// // let b = a.reduce((acc,cv)=>{
// //     if(acc.indexOf(cv)===-1){
// //         acc.push(cv);
// //     }
// //     return acc
// // },[])
// // console.log(b);

// // //acc                       cv              return
// // //[]                     11                  [11]
// // //[11]                   44                  [11,44]
// // //[11,44]                11                   [11,44]
// // //[11,44]

// //SETS = considers unique set of elements

// let a = new Set([ 11,44,11,55,22,44,33])
// console.log(a);
// // console.log( a.size );

// // console.log( a.has(11) );
// // console.log( a.has(55) );
// // console.log( a.has(91) );

// // a.add('Yacht')
// // a.add('Shrimp')
// // a.delete(11)
// // a.clear()

// // console.log(a);


// //looping in set
// for(let ans of a) console.log(ans);

//-----------------------
// sets and array

let arr = [ 11,44,11,55,22,44,33]
console.log(arr);
console.log(arr.length);

let s = new Set(arr)
console.log(s);
console.log(s.size);

let newArr = [...new Set(arr)]
console.log(newArr);
