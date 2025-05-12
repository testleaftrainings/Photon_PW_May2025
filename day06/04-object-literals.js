var user = {
    firstname: "Ravindran",
    lastname: "R",
    email: "ravitestleaf@gmail.com",
    age: 30,
    isActive: true
};
//to access thedifferent properties from the object literal you can use dot notation or square bracket notation
console.log(user.firstname);
console.log(user.isActive);
var user1 = {
    "first-name": "Ravindran",
    lastname: "R",
    email: "ravitestleaf@gmail.com",
    age: 30,
    isActive: true
};
console.log(user1["first-name"]);
console.log(user1.isActive);
