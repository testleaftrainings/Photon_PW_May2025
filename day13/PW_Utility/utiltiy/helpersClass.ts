import test, { Page } from "@playwright/test";

export abstract class PlaywrightWrapper {


    pageWrapper: Page

    constructor(page:Page){
        this.pageWrapper=page
    }

    async clearAndType(locator: string, data: string) {
        test.step(`Cleared the text field and entered the ${data}`, async () => {
           try{ const ele = this.pageWrapper.locator(locator)
            await ele.clear()
            await ele.fill(data)
           }catch(error){
                      throw new Error(error)
           }
        })
    }
     async click(locator: string) {
        test.step(`Clicked the Element `, async () => {
         const ele = this.pageWrapper.locator(locator)
                       await ele.click()
       
        })
    }



}