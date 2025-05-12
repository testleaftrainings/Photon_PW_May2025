enum TestResult {
    Pass = 1, // enum members
    Fail,
    Skip
}

function logTestResult(testName:string, result:TestResult):void{
    console.log(`Test: ${testName}`,`Result Code :${result}`);    
}

//enumName.member

/* logTestResult("Login Page",TestResult.Pass);
logTestResult("Login Page",TestResult.Fail);
logTestResult("Login Page",TestResult.Skip); */

//String enum

enum BrowserType {
    Chrome = "chrome",
    Firefox="firefox",
    Edge="edge"
}

function launchBrowser(browserType:BrowserType)
{
console.log(`Launch browser using ${browserType}`);
}

/* launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge); */


//Heterogenous enum

enum BrowserStatus {
   Open,
   Incognito,
   Crash="crashed",
   close=2,
   unknown
}

function browserReport(status:BrowserStatus)
{
console.log(`Launch browser using ${status}`);
}

browserReport(BrowserStatus.Open);
browserReport(BrowserStatus.Crash);
browserReport(BrowserStatus.unknown);