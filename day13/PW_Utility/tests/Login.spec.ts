import { test } from "../fixtures/customFixture"


test(`test with custom fixture`,async({lpPage},testInfo)=>{
    testInfo.annotations.push({
        type:"Bug",description:testInfo.title
    })
      await lpPage.verifyTitle()      
})
