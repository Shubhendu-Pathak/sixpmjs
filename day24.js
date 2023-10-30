// // let a = [66,33,66,8,33,55,44]
// // console.log(a);

// // let b = [...new Set(a)]
// // console.log(b);

// // console.log('******************************');

// // array of objects
// //object =
// // let c = { age:56 }
// // console.log(c);

// // JSON = text = {}
// // let d = {"age":"56"}

// // let z = [89,67,34]
// // console.log(z);
// // console.log( [...z] );

// // let [x, ...y ] = z
// // console.log( x, y );

// // let c = [ {id:'a'},{id:'b'},{id:'c'},{id:'b'},{id:'a'} ]
// // console.log(c);
// // // JSON.parse = json-->js object
// // //json stringify = js object ---> JSON

// // //object to json
// // let d = c.map(JSON.stringify)
// // console.log(d);

// // // json set to json  array
// // let e = [...new Set(d)]
// // console.log(e);

// // //json to object
// // let f = e.map(JSON.parse)
// // console.log(f);

// console.log("**********************************************");

// // let b = {{age:56}:'Shyam'}
// // console.log(b);

// // let a = new Map();
// // console.log(a);

// // a.set('name','Manushi Chillar Boutique')
// // a.set(1,'67/1 Ralphson Street' )
// // a.set(2,'New Delhi,India')
// // a.set('categories',['Lehenga'])

// // a
// // .set('open',10)
// // .set('close',22)
// // .set(true,'parkingSpace Available For You')
// // .set(false,'Shop is Closed Thanks For Visiting')
// // // a.delete(2)
// // // a.clear()

// // console.log(a);

// // console.log( a.has('opened') );

// // console.log(a.size);
// // console.log( a.get('name') );
// // console.log( a.get(1) );
// // console.log( a.get(2) );
// // console.log( a.get('open') );

// // let visitingAt = 23
// // //           a.get(             true           &&      true                                                    )
// // console.log( a.get( visitingAt > a.get('open') && visitingAt < a.get('close')  ) );

// //exercise
// // let o = {
// //     question:'Best Programming language ?',
// //     1:'C',
// //     2:'C++',
// //     3:"Java",
// //     4:"JS",
// //     true:"Correct Answer",
// //     false:"Try Again"
// // }
// // console.log(o);
// // console.log(Object.keys(o));
// // console.log(Object.values(o));
// // console.log(Object.entries(o));

// // let om =new Map(Object.entries(o))
// // console.log(om);

// console.log("*************************************");

// let o =  new Map([
//     ["question", "Best Programming language ?"],
//     [1, "C"],
//     [2, "C++"],
//     [3, "Java"],
//     [4, "JS"],
//     ['correct',4],
//     [true, "Correct Answer"],
//     [false, "Try Again"],
// ]);
// console.log(o);

// // console.log( o.get('question') );

// for(let [key,value] of o ){
//     // console.log(`Answer ${key}: ${value}`);
//     if(typeof key === 'number'){
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// let myAnswer = +prompt('Enter Your Answer')
// console.log(myAnswer);
// console.log( typeof myAnswer );

// //          o.get(         4        === 3         )
// console.log( o.get( o.get('correct')===myAnswer  ) );

