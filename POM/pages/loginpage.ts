import { chromium, Page } from '@playwright/test'
import { PlaywrightWrapper } from '../utiltiy/helpersClass'

export class Login extends PlaywrightWrapper {
   

    constructor(page: Page) {
        super(page)
          }

    async loadUrl() {
        await this.pageWrapper.goto("http://leaftaps.com/opentaps/control/main")
    }

    async enterCredentials() {
        await this.pageWrapper.fill("#username", "demoCSR")
    //    await this.pageWrapper.fill("#password", "crmsfa")    
        await this.clearAndType("#password","crmsfa")
    }

    async clickLogin() {
        await this.click(".decorativeSubmit")
        return await this.pageWrapper.title()
    }

}
