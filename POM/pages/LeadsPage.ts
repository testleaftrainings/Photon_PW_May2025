import { MyHomePage } from "./Myhomepage";

export class MyLeadsPage extends MyHomePage{

  async clickCreateLead(){
    await this.pageWrapper.click("//a[text()='Create Lead']")
  }
  
  async clickFindLeads(){
    await this.pageWrapper.click("//a[text()='Find Lead']")
  }


}