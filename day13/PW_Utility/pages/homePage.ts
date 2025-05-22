import { Login } from "./loginpage";

export class HomePage extends Login{

     
    async clikcCRM(){

          await this.pageWrapper.click("text=CRM/SFA")
    }

    async clickLogout(){

    }




}