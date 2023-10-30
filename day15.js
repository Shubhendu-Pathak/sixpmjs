// strings

// var a = ' PinE-Apple '
// console.log(a);
// console.log( typeof a );

// console.log( a.length );

// console.log( a[0] );
// console.log( a[1] );
// console.log( a[2] );
// console.log( a[3] );
// console.log( a[4] );
// console.log( a[11] );

//------------------------

//indexOf
// console.log( a.indexOf('P') );
// console.log( a.indexOf('i') );
// console.log( a.indexOf('n') );
// console.log( a.indexOf('e') );
// console.log( a.indexOf('E') );
// console.log( a.indexOf('N') );
// console.log( a.indexOf('p') );

//includes
// console.log( a.includes('P') );
// console.log( a.includes('I') );
// console.log( a.includes('n') );
// console.log( a.includes('%') );

//uppercase lowercase replace

// var a = ' PinE-Apple '
// console.log(a);
// console.log( a.toUpperCase() );
// console.log( a.toLowerCase() );
// console.log( a.replace('PinE','Deer') );

///eX1

// function checkIn(para){

// let x = para.toLowerCase()

// if( x.includes('gun') || x.includes('uranium') || x.includes('knife')|| x.includes('1000 kg gold') ) {
//     return ' Access Denied'
// }else return 'Allowed to Fly'

// }
// console.log( checkIn('I have a laptop and a 1000 kg gold') );
// console.log( checkIn('I have a lays and gun') );
// console.log( checkIn('I have my pet') );



//Ex2

// let db = 'rajnish12@gmail.com'

// function a(para){

// let x = para.toLowerCase();
// console.log(x);

// if(db.includes(x)) return ' LOGGED IN'
// else return 'LOGGED OUT'

// }
// console.log( a('raJNIsh12@GMAil.com') );
// console.log( a('rajnish@gmail.COM') );
// console.log(a('raju12@gMAIL.COM'));

//ex3   8 = exit door     >8 = boarding door

// let timeNow = 9;
// let a = "All passengers come to BOARDING DOOR 23!";

// function one(para, tm) {
//   if (tm < 8) {
//     return para;
//   } else {
//     return para.replace("BOARDING DOOR", "EXIT DOOR");
//   }
// }
// console.log(one(a, timeNow));


// pad start and pad end

// let a = 'Peach'
// console.log(a);
// console.log(a.length);

// console.log( a.padStart(8,'*') );
// // console.log( a.padStart(3,'*') );
// console.log( a.padEnd(8,'@') );
// console.log(a.padEnd(9,'^'));

// trim

// let a = '    Pe  ach      '
// console.log(a);

// console.log(a.trimStart());
// console.log(a.trimEnd());
// console.log(a.trim());

// concat

// let a = 'Peach'
// let b = 'tree'
// console.log( a.concat(b) );

// //charAt
// let a = 'Peach'
// console.log(a);

// console.log( a.charAt( 0 ) );
// console.log( a.charAt( 4 ) );

//substring

// let a = 'PeachTREE'
// console.log(a);
// console.log( 'Character is ', a.charAt(6) );
// console.log('---------------------------');
// // console.log( a.substring(4) );
// // console.log( a.substring(6) );
// // console.log( a.substring(3) );

// // console.log( a.substring(1,5) );// start , end -1
// // console.log( a.substring(2,7) ) // 2,6
// console.log( a.substring(1,5) )

// console.log(a);

//substr

// let a = 'PeachTREE'
// console.log(a);
// console.log( a.charAt( 2 ) );

// // console.log( a.substr(6) );
// // console.log( a.substr(3) );
// console.log( a.substr(1,4) );// start index Num, length
// console.log( a.substr(2,7) )

//slice
// let a = 'PeachTREE'
// console.log(a);
// console.log(a.length);

// console.log( a.charAt( 3 ) );

// console.log( a.slice(1) );
// console.log(a.slice(5));

// console.log( a.slice( 2, 6 ) );// start, end-1
// console.log( a.slice( 4, 8 ) );
// console.log( a.slice(7,4) );//Not Possible

// console.log( a.slice(-4) );

//               start = 3  end = 7-1 =6   
// console.log( a.slice(-6,7) );// start, end -1
// console.log( a.slice(3,7) );

//ex4

// const sendSMS = para =>{

//     console.log(para);
// let a = para.slice(-4)
// console.log(a);

// return a.padStart(para.length,'*')

// }
// console.log( sendSMS('9231817684') );



