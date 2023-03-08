import global, { browser } from "../types/globalthis";
import { chromium } from "@playwright/test";
import {
    setDefaultTimeout,
    BeforeAll,
    AfterAll,
    World,
    Status,
    After,
    Before,
} from "@cucumber/cucumber";
import { Env } from "./enviroment";

setDefaultTimeout(60 * 10000);

BeforeAll(async () => {       
       
    global.browser = await chromium.launch({
        slowMo: 100,
        headless: Env.headless,
        args: ["--disable-web-security"],
    });
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();          
});   
   
Before({ tags: "@ignore" }, async function () {
    return "skipped" as any;
});
Before(async () => {
    global.context.clearCookies();
});
After(async function (this: World, scenario) {
    if (
        scenario.result?.status === Status.FAILED ||
        scenario.result?.status === Status.PASSED
    ) {
        const image = await global.page.screenshot({
            path: `test-results/${scenario.pickle.name}.png`,
            fullPage: true,
        });
        image && (await this.attach(image, "image/png"));
    }
});
AfterAll(async () => {
    await global.page.close();
    await global.context.close();
    await global.browser.close();
});
