//  Revision
//Strings  

// let a = 'St raw'
// console.log(a);
// console.log(typeof a );

// console.log( a.length );

// for(let i=0; i<6; i++){
//     console.log( `Element ${a[i]} has inDex Number = ${i}` );
// }

// console.log( a[0] );// start = 0   end = 7    01234567



//charat
// console.log( a.charAt(7) );

//lowrcase uppercase replace
// console.log( a.toLowerCase() );
// console.log( a.toUpperCase() );
// console.log(a.replace('PEA',85));

//paddstart padend

// let a = 'onion'
// console.log(a);
// console.log( a.length );

// console.log( a.padStart(7,'S') );
// console.log( a.padEnd(7,'S') );

//trim trimstart trimend

// let a = '   onion   '
// console.log(a);
// console.log( a.length );
// console.log('***************************');
// let b = a.trim()
// console.log(b);
// console.log(b.length);
// console.log('***************************');
// let c = a.trimStart()
// console.log(c);
// console.log(c.length);
// console.log('***************************');
// let d = a.trimEnd()
// console.log(d);
// console.log(d.length);

// console.log('*******************************');

//indexOf
// let b = 'St raw'
// console.log(b);
// console.log( b.length );

// console.log( b.indexOf('S') );
// console.log( b.indexOf('t') );
// console.log( b.indexOf(' ') );
// console.log( b.indexOf('r') );

//includes

// let b = 'Berries are not eaten with Straw'
// console.log(b);
// console.log( b.length );

// console.log( b.includes('Berries')  );
// console.log( b.includes('Berry')  );
// console.log( b.includes('eat')  );

// Methods for creating Sub String
// slice

// let a = 'StrawBerry'
// console.log(a);
// console.log('******************');
// console.log(a.charAt(3));
// console.log('******************');

// console.log( a.slice(3) );
// console.log( a.slice(5) );
// console.log( a.slice(3,7) );// start 3 end 7-1
// console.log( a.slice(1,4) );//

// console.log( a.slice(-5) );


//split JoIN

// let a = 'RivernileinEgypt'
// console.log(a);
// console.log('******************');
// console.log(a.charAt(0));
// console.log('******************');

// let b = a.split('')
// console.log(b);

// let c = b.join('3')
// console.log(c);

//exercise

//ex1

// function one(para){

// console.log(para);
// let a = para.toLowerCase();
// console.log(a);

// if( a.includes('burger') || a.includes('soft-drink') || a.includes('desert') ){
//     return 'Food is not Allowed Here'
// }else  {
//     return 'Enjoy your Movie'
// }

// }
// console.log( one('I AM EAting a BurGER') );
// console.log('**********************');
// console.log( one('I am FEELING cold here') );

//2

// let userdata = 'appu12@yahoo.com'

// function one(para){

// console.log(para);
// let emailLower = para.toLowerCase()
// console.log(emailLower);
// if( userdata.includes(emailLower) ) return 'LOGGED IN'
// else return 'Access ✋🚫 Denied'

// }
// console.log( one('APPU12@yahoo.Com') );
// console.log('**********************');
// console.log( one('APPU@12yahoo.Com') );

//ParseInt = parses a string

// let a = '1932' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = '19 32' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = ' 19 32' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = 'Tr19 32' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = '1932 hours' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = 'hours' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

// let a = ' 1 932hours' 
// console.log(a);
// console.log(typeof a);
// console.log('**********************');
// let b = parseInt(a) 
// console.log(b);
// console.log(typeof b);
// console.log('**********************');
// let c = Number(a) 
// console.log(c);
// console.log(typeof c);

//ex3 

// let timeNow = '2100 hours'
// let msg = 'Boarding Gates are OPEN'

// function one(timeNowPara,displayMSG){

//     let a = parseInt(timeNowPara)
//     console.log(a);
//     if( a<2000) return displayMSG+' ✈️'
//     else return displayMSG.replace('OPEN','🚫 CLOSED')

// }
// console.log( one( timeNow,msg ) );
// console.log('**********************');
// console.log( one( '2000 hours',msg ) );
// console.log('**********************');
// console.log( one( '1900 hours',msg ) );


