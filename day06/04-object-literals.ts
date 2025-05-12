
let user :{
firstname : string,
lastname:string,
email:string,
age:number,
isActive:boolean
}={
firstname : "Ravindran",
lastname:"R",
email:"ravitestleaf@gmail.com",
age:30,
isActive:true
}

//to access thedifferent properties from the object literal you can use dot notation or square bracket notation


console.log(user.firstname);
console.log(user.isActive);

let user1 :{
"first-name" : string,
lastname:string,
email:string,
age:number,
isActive:boolean
}={
"first-name" : "Ravindran",
lastname:"R",
email:"ravitestleaf@gmail.com",
age:30,
isActive:true
}

console.log(user1["first-name"]);
console.log(user1.isActive);