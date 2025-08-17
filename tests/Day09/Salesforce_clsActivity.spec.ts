import { expect, test } from "@playwright/test";
import { title } from "process";
test(`Handle Multiple pages in salesforce`,  async({page}) => {
    await page.goto(`https://login.salesforce.com/?locale=in`);
    await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill(`RaviSalesTest#1432`);
    await page.locator(`#Login`).click();
    await page.waitForTimeout(3000);
    const newpage = page.context().waitForEvent('page');
    await page.locator(`//button[text()='Learn More']`).click();
    const childPage = await newpage;
    await childPage.locator(`//button[text()='Confirm']`).click();
    console.log(`Page 2 title is:  ${await childPage.title()}`);
    expect(await childPage.title()).toEqual("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US");
    console.log(await childPage.url());
});