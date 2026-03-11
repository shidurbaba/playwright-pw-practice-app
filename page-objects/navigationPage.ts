import { Locator, Page } from "@playwright/test"



export class NavigationPage {

    readonly page: Page //This is a field
    readonly fromLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toasterMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page) //Our constructor expects a page parameter (fixture) to be passed inside of this class.
    {
        this.page = page // Assign it to the local field.
        this.fromLayoutsMenuItem = page.getByText('Form Layouts')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart Table')
        this.toasterMenuItem = page.getByText('Toastr')
        this.tooltipMenuItem = page.getByText('Tooltip')
    }


    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.fromLayoutsMenuItem.click();
    }

    async datepickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.page.waitForTimeout(500)
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()
    }

    async toasterPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toasterMenuItem.click()
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false")
            await groupMenuItem.click()
    }


}