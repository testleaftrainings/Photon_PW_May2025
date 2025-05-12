
import { expect, test } from "@playwright/test";

test("Learing assertions",async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);

    const typeName = page.getByPlaceholder("Babu Manickam");

    await expect(typeName).toBeDisabled();

    await typeName.fill("Ravindran")

    await page.waitForTimeout(3000)

    
})


test(`Assertion using hard assert`,async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);
    const appendText =  page.locator(`//input[@value='Chennai']`);
    await expect(appendText).toBeDisabled();
    await appendText.fill(`India`);
    await page.waitForTimeout(3000)    
})

test.only(`Assertion using soft assert`,async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);
    const appendText =  page.locator(`//input[@value='Chennai']`);
    await expect.soft(appendText).toBeDisabled();
    await appendText.fill(`India`);
    await page.waitForTimeout(3000)    
})