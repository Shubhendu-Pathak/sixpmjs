// var x =900

// function a(){
//     let x = 55
// return this.x
// }
// console.log( a() );

// var age = 55

// let b = {
//     name:'Darny',age:34,
//     calcAge(){ return this.age*1000 }
// }
// console.log( b.calcAge() );


//object destructuring

// let foodCenter ={
//     name:'Sharda Soda Center',
//     locatdAt:'13/1 Camac Street, Kolkata',
//     capacity:1000,
//     menu:['Soft Drinks','Deserts','Vegetation'],
//     parkingSpaceAvailability:true,
//     timings:{
//         breakfast:{ from:8,to:11 },
//         lunch:{ from:13,to:17 },
//         dinner:{ from:18,to:22 }
//     }   
// }

// console.log(foodCenter);
// console.log( foodCenter.capacity );
// console.log( foodCenter.menu );
// console.log( foodCenter.parkingSpaceAvailability );

// console.log( capacity );// N.Def
// console.log('**********************************');

// let {name,locatdAt,menu,timings} = foodCenter
// console.log( name );
// console.log( locatdAt );
// console.log(menu);
// console.log(timings);

// console.log('**********************************');

// let {name:w,locatdAt:x,menu:y,timings:z} = foodCenter
// // console.log(name);
// // console.log(locatdAt);
// // console.log(menu);

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

// console.log('**********************************');

// // console.log( foodCenter.timings.lunch.from );

// // let { timings:{dinner:{from}} } = foodCenter

// // // console.log(timings);
// // // console.log(dinner);
// // console.log(from);


// let { timings:{breakfast:{to}} } = foodCenter
// // console.log(timings); // N.D
// // console.log( breakfast ); // N.D
// console.log(to);

// optional chaining

// let foodCenter = {
//     name:'Sharda Soda Center',
//     locatdAt:'13/1 Camac Street, Kolkata',
//     capacity:1000,
//     menu:[ {flavour:'spicy'} ,'Deserts','Vegetation'],
//     parkingSpaceAvailability:true,
//     timings:{
//         breakfast:{ from:8,to:11 },
//         lunch:{ from:13,to:17 },
//         dinner:{ from:18,to:22 }
//     },
//     greet(){
//         return `Welcome to ${this.name} we are ready to serve you at ${foodCenter.locatdAt}`
//     }   
// }

// console.log(foodCenter);

// console.log( foodCenter.storename );
// // console.log( foodCenter.storemenu[0].flavour );
// // console.log( foodCenter.storetimings.lunch );


// console.log( foodCenter.storename );
// console.log( foodCenter.stormenu[2] );
// console.log( foodCenter.storemenu?.[0].flavour );
// console.log( foodCenter.menu?.[0].flavour );


// console.log( foodCenter.storetimings );
// console.log( foodCenter.storetimings.lunch );
// console.log( foodCenter.storetimings?.lunch );
// console.log( foodCenter.timings?.lunch );

// console.log( foodCenter.greet());
// console.log(foodCenter.greetus?.());
// console.log(foodCenter.greet?.());

// /Nullish operator ??

// console.log( foodCenter.storemenu?.[0].flavour  ?? 'Data not Accessible' );
// console.log( foodCenter.menu?.[0].flavour  ?? 'Data not Accessible' );

// console.log( foodCenter.storetimings?.lunch ?? 'Access denied');
// console.log( foodCenter.timings?.lunch ?? 'Access denied');

// console.log(foodCenter.greetus?.() ?? 'Methods not Found');
// console.log(foodCenter.greet?.() ?? 'Methods not Found');

// N . B

//ARRAY of Object

// Array of Obbjects

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 4444,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];// array of objects
  console.log(accounts);

// let arr = [ 34,56,78,90]
  //map = returns a new array
// let a = arr.map((ele)=>{
// return ele*100
// })
// console.log(a);

let a = accounts.map((ele)=>{
    return ele.owner
})
console.log(a);

let b = accounts
.map((ele)=>ele.pin)
.reduce((acc,cv)=>{
if(acc.indexOf(cv)=== -1){
    acc.push(cv)
}
return acc
},[])
console.log(b);

let c = accounts
.map(ele=>ele.movements)
.flat(Infinity)
.filter(ele=>ele>0)
.reduce((acc,cv)=>acc+cv)

console.log(c);
