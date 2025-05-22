import {test} from "../fixtures/customFixture"

test(`Leads Module`,async({leadsPage})=>{  
      await leadsPage.loadUrl()
      await leadsPage.enterCredentials()
      await leadsPage.clickLogin()
      await leadsPage.clikcCRM()
      await leadsPage.clickLeads()
      await leadsPage.clickCreateLead()

})