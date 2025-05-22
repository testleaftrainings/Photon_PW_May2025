// type cal=string|number
// let rectangle:cal
import { test as baseTest } from '@playwright/test'
import { HomePage } from "../pages/homePage"
import { MyLeadsPage } from "../pages/LeadsPage"
import { Login } from "../pages/loginpage"
import { MyHomePage } from "../pages/Myhomepage"
import { createIssue } from '../utiltiy/createIssue_Jira'
import { logDefect } from '../utiltiy/logDefect'

// let fname:string
// let phno:number


type myFixture = {
  lpPage: Login,
  hpPage: HomePage,
  myhpPage: MyHomePage,
  leadsPage: MyLeadsPage
}
export const test = baseTest.extend<myFixture>(
  {
    lpPage: async ({ context, page }, use) => {
      const lpPage = new Login(page)
      await lpPage.loadUrl()
      await lpPage.enterCredentials()
      await lpPage.clickLogin()
      await page.context().storageState({ path: "data/loginInfo.json" })
      await use(lpPage)
    },

    hpPage: async ({ page }, use) => {
      const hpPage = new HomePage(page)
      await use(hpPage)
    },
    myhpPage: async ({ page }, use) => {
      const myhpPage = new MyHomePage(page)
      await use(myhpPage)
    },
    leadsPage: async ({ page }, use) => {
      const leadsPage = new MyLeadsPage(page)
      await use(leadsPage)
    }
  })

  let key:any
test.afterEach('Call CreateIssue Function',async({},testInfo)=>{
    // const key=await createIssue(String(testInfo.status),String(testInfo.title))
    // console.log(key)

    key=await logDefect(testInfo)
    console.log(key)
})

test.afterAll("Attach the screenshots",async()=>{
    console.log("Uploaded the attachments for failure" +key)
})