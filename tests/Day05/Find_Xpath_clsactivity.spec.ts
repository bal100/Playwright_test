
import { test } from "@playwright/test";
test(`Learn CSS using Salesforce`,  async({page}) => {
    await page.goto(`https://login.salesforce.com/?locale=in`);
    await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill(`RaviSalesTest#1432`);
    await page.locator(`#Login`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//*[@class='slds-icon slds-icon_x-small'])[1]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//span[@class='actionLabel' and contains(text(),'New Task')]`).click();
    await page.waitForTimeout(3000)
    await page.locator(`//div[@class='slds-form-element__control']/preceding-sibling::label`)
})

    
