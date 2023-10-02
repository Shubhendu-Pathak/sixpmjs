// sort 3 nums

// let a = 50
// let b = 60
// let c = 30

// //   f  &&  t    = f
// if( a>b && a>c ){

//     if(b>c){
//         console.log(`a=${a}> b=${b}> c=${c}`);
//     }else{
//         console.log(`a=${a}> c=${c}> b=${b}`);
//     }
//     //      t  && t  = t
// }else if( b>a && b>c ){
//     //   t
//     if( a>c ){
//         console.log(`b=${b}> a=${a}> c=${c}`);
//     }else{
//         console.log(`b=${b}> c=${c}> a=${a}`);
//     }
// }else{
//     if( b>a ){
//         console.log(`c=${c}> b=${b}> a=${a}`);
//     }else{
//         console.log(`c=${c}> a=${a}> c=${c}`);
//     }
// }

// let a = 50
// let b = 60
// let c = 70

// //    f && f = f
// if( a>b && a>c ){

//     if(b>c){
//         console.log(`a=${a}> b=${b}> c=${c}`);
//     }else{
//         console.log(`a=${a}> c=${c}> b=${b}`);
//     }
//     //     t   && f  = f 
// }else if( b>a && b>c ){
    
//     if( a>c ){
//         console.log(`b=${b}> a=${a}> c=${c}`);
//     }else{
//         console.log(`b=${b}> c=${c}> a=${a}`);
//     }

// }else{
//     //   t
//     if( b>a ){
//         console.log(`c=${c}> b=${b}> a=${a}`);
//     }else{
//         console.log(`c=${c}> a=${a}> c=${c}`);
//     }
// }

// loop ques

//4
//          2     t     1++
// for( let a = 1; a<=5 ; a++ ){
// // document.write(`<span class="a">a${a}</span>`)//a=1
// document.write(`<span class="a">*</span>`)
// //         5       5<=5-1 = f
//     for( let b =1; b<=5-a;  b++ ){   
// // document.write(`<span class="b">b${b}</span>`)//b=1234
// document.write(`<span class="b">*</span>`)
//     }

//     for(let c=1;c<=a;c++){
//         // document.write(`<span class="c">c${c}</span>`)
//         document.write(`<span class="c">*</span>`)
//     }

// for( let d=1; d<a; d++ ){
//     // document.write(`<span class="d">d${d}</span>`)
//     document.write(`<span class="d">*</span>`)
// }

//     document.write('<br/>')
// }

//5

// //         4    5>=1;  5--
// for(let a = 5; a>=1 ; a--){
//     document.write(`<span class="a">a${a}</span>`)//a=5

// //  
// for( b=1; b<=5-a; b++ ){
//     document.write(`<span class="b">b${b}</span>`)// 
// }
// //        6    5<=5    5++
// for( let c =1; c<=a;  c++ ){
//     document.write(`<span class="c">c${c}</span>`)// c= 12345
// }

// for( let d=1;  d<=a-1;d++ ){
//     document.write(`<span class="d">d${d}</span>`)
// }

//     document.write('<br/>')
// }

//         4    5>=1;  5--
for(let a = 5; a>=1 ; a--){
    document.write(`<span class="a">*</span>`)//a=5

//  
for( b=1; b<=5-a; b++ ){
    document.write(`<span class="b">*</span>`)// 
}
//        6    5<=5    5++
for( let c =1; c<=a;  c++ ){
    document.write(`<span class="c">*</span>`)// c= 12345
}

for( let d=1;  d<=a-1;d++ ){
    document.write(`<span class="d">*</span>`)
}

    document.write('<br/>')
}

