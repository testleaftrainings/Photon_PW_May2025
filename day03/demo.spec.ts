import test, { chromium, firefox } from  '@playwright/test'


test.only(`Launchin browser`,async({page})=>{
    //    const browser =await chromium.launch({headless:false}) 
    //    const context=await browser.newContext()
    //    const page=await context.newPage()
       await page.goto("http://www.google.com")
     //  await page.locator("q").click()
})


test(`Launchin 2nd browser`,async({page})=>{
    //    const browser =await chromium.launch({headless:false}) 
    //    const context=await browser.newContext()
    //    const page=await context.newPage()
       await page.goto("http://www.amazon.com")
})
