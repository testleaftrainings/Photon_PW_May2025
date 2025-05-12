var TestResult;
(function (TestResult) {
    TestResult[TestResult["Pass"] = 1] = "Pass";
    TestResult[TestResult["Fail"] = 2] = "Fail";
    TestResult[TestResult["Skip"] = 3] = "Skip";
})(TestResult || (TestResult = {}));
function logTestResult(testName, result) {
    console.log("Test: ".concat(testName), "Result Code :".concat(result));
}
//enumName.member
/* logTestResult("Login Page",TestResult.Pass);
logTestResult("Login Page",TestResult.Fail);
logTestResult("Login Page",TestResult.Skip); */
//String enum
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Edge"] = "edge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserType) {
    console.log("Launch browser using ".concat(browserType));
}
/* launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge); */
//Heterogenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 0] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["close"] = 2] = "close";
    BrowserStatus[BrowserStatus["unknown"] = 3] = "unknown";
})(BrowserStatus || (BrowserStatus = {}));
function browserReport(status) {
    console.log("Launch browser using ".concat(status));
}
browserReport(BrowserStatus.Open);
browserReport(BrowserStatus.Crash);
browserReport(BrowserStatus.unknown);
