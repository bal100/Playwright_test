import { test } from "playwright/test";

test("class Room Activity", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  const title = await page.title();
  console.log(title);
    await page.locator(".inputLogin").nth(0).fill("demosalesmanager");
    await page.locator(".inputLogin").nth(1).fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("#label").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.selectOption("#createLeadForm_currencyUomId", {value: "INR"});
    await page.waitForTimeout(3000);
//     const dropdown = page.locator("#createLeadForm_currencyUomId>option");
//     const dropdowncount = await dropdown.count();
//     console.log(`No. of values in the dropdown ${dropdowncount}`);
// for (let i = 0; i < dropdowncount; i++) {
//    console.log(await dropdown.nth(i).textContent());
// }
const dropdown1 = page.locator("#createLeadForm_generalCountryGeoId>option");
    const dropdowncount1 = await dropdown1.count();
    console.log(`No. of values in the country dropdown ${dropdowncount1}`);
for (let i = 0; i < dropdowncount1; i++) {
   console.log(await dropdown1.nth(i).innerText());
}

});