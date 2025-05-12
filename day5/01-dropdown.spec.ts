

import { test } from "@playwright/test";

test (`Handling my dropdown usind select tag`,async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/logout`)

    await page.locator("#username").fill("demosalesmanager");

    await page.locator("#password").fill("crmsfa");

    await page.locator(".decorativeSubmit").click();

     await page.locator("text=CRM/SFA").click();

     await page.locator("//a[text()='Leads']").click();

     await page.locator("//a[text()='Create Lead']").click();   
     
     await page.locator("#createLeadForm_companyName").fill("Testleaf");

     await page.locator("#createLeadForm_firstName").fill("Ravindran");  

     await page.locator("#createLeadForm_lastName").fill("R");
     
     //Select the Source dropdown
     //Locate the dropdown by value
     await page.selectOption(`#createLeadForm_dataSourceId`,{value:"LEAD_DIRECTMAIL"});
     
     await page.waitForTimeout(3000);

     const dropdown = page.locator("#createLeadForm_dataSourceId>option");

     const dropDownCount = await dropdown.count();

     console.log((`No. of values in Source dropdown ${dropDownCount}`));

     for (let index = 0; index < dropDownCount; index++) {
        console.log(await dropdown.nth(index).innerText());           
     }
     
     //Select Currency  dropdown by index
    await page.selectOption("#createLeadForm_currencyUomId",{index:13});
    await page.waitForTimeout(3000);

        //Select Country  dropdown by label
    await page.selectOption(`#createLeadForm_generalCountryGeoId`,{label:"India"});
    await page.waitForTimeout(3000);

    
})