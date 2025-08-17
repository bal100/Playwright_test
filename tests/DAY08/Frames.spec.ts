import { test } from "@playwright/test";

test("Handling frames", async ({ page }) => {
  await page.goto("https://www.oneindia.com");
  const allFrames = page.frames();
  const frameCount = allFrames.length;
  console.log(frameCount);
  console.log(`The Total count of frames in the Page is ${frameCount}`);
  for (const frame of allFrames) {
    const frameTitle = frame.title();
    console.log(`The Title of the frame is ${frameTitle}`);
  }

});