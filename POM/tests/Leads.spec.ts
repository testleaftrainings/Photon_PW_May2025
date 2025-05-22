import test from "@playwright/test";
import { MyLeadsPage } from "../pages/LeadsPage";

test(`Leads Module`,async({page})=>{
  
      const lp=new MyLeadsPage(page)
      await lp.loadUrl()
      await lp.enterCredentials()
      await lp.clickLogin()
      await lp.clikcCRM()
      await lp.clickLeads()
      await lp.clickCreateLead()

})