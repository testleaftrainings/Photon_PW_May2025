
//Parameters :

//1. Optional Parameters
 
function userRegisteration(fName: string, lName:string, gender:string, height?:number,empNo?:number){

    console.log(`Sign up with ${fName},${lName},${gender},${height}`);
}
/* userRegisteration("Ravindran","Ramdas","M") */

//2. Default Parameters

function profile(username:string, isvalid:boolean,profileStatus:string="Available",dob?:string){

console.log(`Profile Details: ${username}, ${isvalid},${profileStatus},${dob}`);
}

profile("ravir",true,"04/01/2020")