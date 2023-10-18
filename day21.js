// let a  = {
//     name:'Jimmy',
//     age:56
// }
// console.log(a);
// console.log( typeof a);

// console.log('*************************');

// let b = {
//     name:'Jimmy',
//     age:56
// }
// console.log(b);

// let c = b
// c.name = 'Jenny'

// console.log(c);

// console.log(b);

//--------------------------------------

// let z = 'INIDA'
// console.log( z );
// console.log( z.length );

// {} = object literal

// let a  = {
// //  key: value                 key:value pair == property
//     name:'Jimmy',
//     age:56
// }

// console.log(a);
// console.log( typeof a);

// //DOT MEthod
// console.log( a.name );
// console.log( a.age );


// //Bracket Method
// console.log( a["name"] );
// console.log( a["age"] );

// //-------------------
// let b = Object.keys(a)
// console.log(b);

// let c = Object.values(a)
// console.log(c);

// let d = Object.entries(a)
// console.log(d);// [ [k:v],[K;v]  ]
// console.log( d.flat() );


// let foodCenter ={
//     name:'Sharda Soda Center',
//     location:'13/1 Camac Street, Kolkata',
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

// console.log( foodCenter.name );
// console.log( foodCenter.location );
// console.log( foodCenter.menu );
// console.log( foodCenter["parkingSpaceAvailability"] );

// console.log('****************');
// console.log( foodCenter.timings.breakfast.to );
// console.log( foodCenter.timings.dinner.to );
// console.log( foodCenter["timings"]["lunch"]['from'] );


//-----------------------------------


//Method = func inside an object

// this in object method, refers to object itself
//in function it refers to global object



// let a = {
// name:'Henry',
// age:18,
// greet:function(){
//     return `Hello ${this.name}`
// }
// }

// console.log(a);
// console.log( a.greet() );

// \-------------------------

// let arr = [56,78,90]
// console.log(arr);
// console.log( arr.length );
// console.log( arr.reverse() );

// console.log('*************************');

// const name = 'Laxman'

// let a = {
//     name:'Henry',
//     age:18,
//     // greet:function(){
//     //     return `Hello ${this.name}`
//     // }
//     greet(){ return `Hello ${this.name}`}
//     // greet:()=>{
//     //     return `Hello ${this.name}`
//     // }

//     }
    
//     console.log(a);
//     console.log( a.greet() );

//Ex1
// let a = {
//     name:'Rahul',
//     birthYear:2000,
//     age(){
//         return 2023 -this.birthYear
//     }
// }

// let b = {
//     name:'Silvester',
//     birthYear:2010,
//     age(){
//         return 2023 -this.birthYear
//     }
// }

// console.log( 'Rahul age ',a.age() );          
// console.log( 'Sylv age ',b.age() );      

// let c  = ( a.age() > b.age()  ) ? 'Rahul is Elder' : 'Sylvester is Elder'
// console.log(c);

//------------------------------
 //call  and apply 

//  let a = {
//     name:'Rahul',
//     birthYear:2000,
// }

// let b = {
//     name:'Silvester',
//     birthYear:2010,
// }

// let age = function(){
//     return `The age of ${this.name} is ${2023 -this.birthYear}`
// }

// let intro = function(para1,para2){
//     return ` My name is ${this.name} and i love ${para1} and ${para2}`
// }

// let d = age.call(a)
// console.log(d);

// let e = age.call(b)
// console.log(e);

// let f = intro.call(a,'Cooking','Dancing')
// console.log(f);

// let g = intro.call(b,'Reading Novels','Swimming')
// console.log(g);

// console.log('*************************');

// //apply

// let h = intro.apply(a,['Cooking','Dancing'])
// console.log(h);

//----------------------

// function one(){
//     return 'ONE FUNC'
// }

// let a = one
// console.log( a() );

//bind

let a = {
    registratioNumber:'TR345b',
    brand:'Mahindra',
    carDetails(){
        return `${this.brand} ${this.registratioNumber}`
    }
}


let b = a.carDetails
console.log('From b '+ b);

let c  = a.carDetails.bind(a)
console.log(c);
console.log(c());

