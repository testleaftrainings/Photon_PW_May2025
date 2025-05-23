//world -->interface -->container to hold the object browser, context ,page

import { After, Before, setWorldConstructor, World } from "@cucumber/cucumber";
import {Browser, chromium, Page} from '@playwright/test'


export class MyWorld extends World{
    browser!:Browser;
     page!:Page;

   async initBrowser(){
    this.browser= await chromium.launch({headless:false})
    this.page=await this.browser.newPage()
   }

   async closeBrowser(){
       this.page.close()
   }
}

setWorldConstructor(MyWorld) 


Before(async function(){
    await this.initBrowser()
})

After(async function(){
    await this.closeBrowser()
})