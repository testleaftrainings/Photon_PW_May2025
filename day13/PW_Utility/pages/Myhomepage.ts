import { HomePage } from "./homePage";

export class MyHomePage extends HomePage{

  async clickLeads(){
    await this.pageWrapper.click("//a[text()='Leads']")
  }


  async clickAccounts(){
    await this.pageWrapper.click("//a[text()='Accounts']")
  }



  
  async clickContacts(){
    await this.pageWrapper.click("//a[text()='Contacts']")
  }


}