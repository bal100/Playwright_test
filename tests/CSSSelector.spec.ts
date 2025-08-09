import { test } from "@playwright/test";

test (`Learn CSS using leaftaps`,async ({page}) => {
    
    await page.goto("www.leaftaps.com");
})