import {chromium, test} from "@playwright/test";
import { config } from "process";

test (`test to launch browser`,async() =>{
    const browser = await chromium.launch({channel:"Chrome", headless:false})
    const Context = await browser.newContext()
    const page    = await Context.newPage()
    await page.goto("https://www.duolingo.com/")
    const url = page.url()
    console.log(`The URL launched in browser is ${url}`)
}

)