import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager'
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');

});

test('Navigation to Form Page Example', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toasterPage()
    await pm.navigateTo().tooltipPage()
})

test('Parameterized Methods Example', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.onformLayoutsPage().submitUsingThegridFormWithCredetialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await pm.onformLayoutsPage().submitInLineFormWithNameAndCheckbox('John Smith', 'john@test.com', false)
})

test('Date Picker Example', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(7)
    await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(6, 15)
})









//    test.afterEach(async ({ page }) => {
//         await page.close()
//         console.log('Close Browser')

//     })