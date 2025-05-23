import { Given, Then, When } from "@cucumber/cucumber";


Given('Load the url',async function(){
      await this.page.goto("http://leaftaps.com/opentaps/control/main")
     })

Given('Enter the Credentials as {string} and {string}',async function(user:string,pwd:string){
 await this.page.fill("#username",user)
 await this.page.fill("#password",pwd)
})

When('Click on Login Button',async function(){
    await this.page.click(".decorativeSubmit")
    })

Then('Home page is displayed',async function(){
     console.log(await this.page.title())
})