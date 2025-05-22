import { chromium, expect, Page } from '@playwright/test'
import { PlaywrightWrapper } from '../utiltiy/helpersClass'

export class Login extends PlaywrightWrapper {
    constructor(page: Page) {
        super(page)
    }
    async loadUrl() {
        await this.pageWrapper.goto("http://leaftaps.com/opentaps/control/main")
    }

    async enterCredentials() {
        await this.pageWrapper.fill("#username", "demoSalesManager")
        //    await this.pageWrapper.fill("#password", "crmsfa")    
        await this.pageWrapper.fill("#password", "crmsfa")
    }

    async clickLogin() {
        
        await this.pageWrapper.click(".decorativeSubmi")
        return await this.pageWrapper.title()
    }

    async verifyTitle(){
       const title= await this.pageWrapper.title()
    //   expect(title).toEqual("LeafTaps")
    }

}
