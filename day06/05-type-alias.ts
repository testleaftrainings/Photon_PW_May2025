


let productId: string | number;
productId = "AXCBF";
productId = 123;

type productDatatype = number | string | boolean;

let accountNumber: productDatatype

accountNumber = "qfqwf"
accountNumber = 123;
accountNumber = false


type supportedBrowsers = "Chrome" | "edge";

function invokeBrowsers(browserName: supportedBrowsers) {

    if (browserName === "Chrome") {
        console.log("Launch the ChromeBrowser");

    }
    else {
        console.log("Launch the MS Edge");
    }
}

invokeBrowsers("edge")