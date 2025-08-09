import { test } from "playwright/test";

test("css handling", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  const title = await page.title();
  console.log(title);
    await page.locator(".inputLogin").nth(0).fill("demosalesmanager");
    await page.locator(".inputLogin").nth(1).fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("#label").click();

});