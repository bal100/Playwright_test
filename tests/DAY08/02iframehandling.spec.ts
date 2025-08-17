import { expect, test } from "@playwright/test";
import { assert } from "console";
test(`Test to interact with the frames using URL`,async ({page}) => {


  await page.goto(`https://leafground.com/frame.xhtml`)


  //Interact with the frames using URL


  const frameURL = page.frame({url:"https://leafground.com/framebutton.xhtml"});


  await frameURL?.locator("#Click").click() // page.locator 
                                            // ?.--> is optional chaining to handle your exceptions
 await page.waitForTimeout(3000)
  


  /* if(frame){
  await frame.locator(#Click).click()
  }else{
    console.log("Frame Not Found")} */
    
})


test(`Test to interact with the frames using framelocator`,async ({page}) => {


    await page.goto(`https://leafground.com/frame.xhtml`);


    //Using frame locator
   const firstFrame = page.frameLocator(`iframe[src='default.xhtml']`) ;
   const clickButton = firstFrame.locator("#Click");
   await clickButton.click()
   await expect(clickButton).toHaveText("Hurray! You Clicked Me.");


   await page.waitForTimeout(3000);  
   
   //interact with nested frame
    /* const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
    const frame_outerframe = card.frameLocator("iframe");
    const frame_innerframe = frame_outerframe.frameLocator("iframe");
    await frame_innerframe.locator("#Click").click(); */


    //Interact with frame using "name"


  const frameName = page.frame({name:'frame2'});
  if (frameName) {
    const clickButton2 = frameName.locator("#Click");
    await clickButton2.click();
    await page.waitForTimeout(3000)
    await expect(clickButton2).toHaveText("Hurray! You Clicked Me.");
    console.log(`${await clickButton2.textContent()}`); //To print the text from the button
  } else {
    console.log("Frame with name 'frame2' not found.");
  }

})

test(`Test to interact with the frames using index`,async ({page}) => {
    await page.goto(`https://leafground.com/frame.xhtml`);
    const frames = page.frames();
    console.log(frames);
        frames.forEach((frame, index) => {
            console.log(`Frame ${index}: ${frame.url()}`);
        });
    })