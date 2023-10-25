
// 21.	Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



type objtype = {
    name1:string,
    name2:string,
    name3:string
}

const listarray:Array<objtype>=[
//  assign to cars
    {
    name1:"Honda",name2:"Toyota",name3:"Suzuki"
},
//  assign to TV Brands 
{
    name1:"Sony",name2:"Panasonic",name3:"National"
},
//  assign to Fruits
{
    name1:"Mango",name2:"Banana",name3:"Apple"
},
{
// assign to vegetables
    name1:"Potato",name2:"Ginger",name3:"Carrot"   
}

//assign to continets
,{
    name1:"Asia",name2:"Europe",name3:"Africa"
}




]

console.log(listarray)
//  acess any objects 
console.log(listarray[3])
