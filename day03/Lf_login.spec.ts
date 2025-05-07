import test from "@playwright/test";

test('Basic css',async({page})=>{

     await page.goto("http://leaftaps.com/opentaps/control/main")
     //to locate an element using css or xpath
     const user=page.locator("input[id=username]")
     await user.fill("demoCSR")
     await page.locator("#password").fill("crmsfa")
     await page.locator(".decorativeSubmit").click()
})