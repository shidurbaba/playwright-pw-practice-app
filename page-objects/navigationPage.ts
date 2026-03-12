import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"



export class NavigationPage extends HelperBase {

    readonly fromLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toasterMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page) //Our constructor expects a page parameter (fixture) to be passed inside of this class.
    {
        super(page) // Assign it to the local field.
        this.fromLayoutsMenuItem = page.getByText('Form Layouts')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart Table')
        this.toasterMenuItem = page.getByText('Toastr')
        this.tooltipMenuItem = page.getByText('Tooltip')
    }


    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.fromLayoutsMenuItem.click();
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.waitForNumberOfSeconds(1)
        await this.datePickerMenuItem.click()
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()
        await this.waitForNumberOfSeconds(1)
    }

    async toasterPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toasterMenuItem.click()
        await this.waitForNumberOfSeconds(1)
    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenuItem.click()
        await this.waitForNumberOfSeconds(1)
    }

    private async selectGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false")
            await groupMenuItem.click()
        await this.waitForNumberOfSeconds(1)
    }


}