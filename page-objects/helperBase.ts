import { Locator, Page } from "@playwright/test"



export class HelperBase {

    readonly page: Page //This is a field


    constructor(page: Page) //Our constructor expects a page parameter (fixture) to be passed inside of this class.
    {
        this.page = page // Assign it to the local field.

    }

    
    async waitForNumberOfSeconds(timeInSeconds: number)
    {
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }



}