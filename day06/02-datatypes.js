var data = "Message is reived from the server";
data = 201;
data = true;
var value;
value = 11;
value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
function infiniteloop() {
    while (true) {
        console.log("Loops forever");
    }
}
infiniteloop();
/*
Notes :

Using any (Unsafe) :

function parseApiResponse(response: any) {
  console.log(response.user.name.toUpperCase()); // ✅ Compiles
  // ❌ But if user or name is undefined at runtime → crashes!
}


Using unknown (Safe)

function parseApiResponse(response: unknown) {
  if (isValidUser(response)) {
    console.log(response.user.name.toUpperCase()); // ✅ Safe to use
  } else {
    console.error("Invalid user response");
  }
}
*/
