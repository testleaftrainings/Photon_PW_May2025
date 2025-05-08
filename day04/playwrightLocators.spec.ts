import test from '@playwright/test'
test(`Using Playwright Locators`,async({page})=>{

//   await page.goto("http://leaftaps.com/opentaps/control/main")

//   await page.getByLabel("Username").fill("demoCSR")
//   await page.getByLabel("Password").fill("crmsfa")
//   await page.click(".decorativeSubmit")
//   await page.getByRole("link",{name:"CRM/SFA"}).click()
//   await page.getByRole("link",{name:"Leads",exact:true}).click()

  await page.goto("https://login.salesforce.com/")
  await page.fill("#username","vidyar@testleaf.com")
  await page.fill("#password","Sales@123")
  await page.click("#Login")

  await page.getByTitle("App Launcher").click()
  await page.getByText("View All").click()
  await page.getByPlaceholder("Search apps or items...").fill("Service")
  await page.getByRole("link" ,{name:"Service",exact:true}).click()



})