import { test } from "@playwright/test";

test("Iframe interaction", async ({ page }) => {
  await page.goto("https://leafground.com/frame.xhtml");
  const frame = page.frameLocator("iframe[src='https://leafground.com/default.xhtml']");
  await frame.locator("#Click").click();
});
