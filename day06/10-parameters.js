//Parameters :
//1. Optional Parameters
function userRegisteration(fName, lName, gender, height, empNo) {
    console.log("Sign up with ".concat(fName, ",").concat(lName, ",").concat(gender, ",").concat(height));
}
/* userRegisteration("Ravindran","Ramdas","M") */
//2. Default Parameters
function profile(username, isvalid, profileStatus, dob) {
    if (profileStatus === void 0) { profileStatus = "Available"; }
    console.log("Profile Details: ".concat(username, ", ").concat(isvalid, ",").concat(profileStatus, ",").concat(dob));
}
profile("ravir", true, "", "04/01/2020");
