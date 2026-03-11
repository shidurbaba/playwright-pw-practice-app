import { test, expect } from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/formLayoutPage';
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');

});

test('Navigation to Form Page Example', async ({page})=>
    {
        const navigateTo = new NavigationPage(page)
        await navigateTo.formLayoutsPage()
        await navigateTo.datepickerPage()
        await navigateTo.smartTablePage()
        await navigateTo.toasterPage()
        await navigateTo.tooltipPage()
    })

test('Parameterized Methods Example', async ({page})=>
    {
        const navigateTo = new NavigationPage(page)
        const formLayoutsPage = new FormLayoutPage(page)
        await navigateTo.formLayoutsPage()
        await formLayoutsPage.submitUsingThegridFormWithCredetialsAndSelectOption('test@test.com', 'Welcome1','Option 1')
        await formLayoutsPage.submitInLineFormWithNameAndCheckbox('John Smith', 'john@test.com', false)
    })








//    test.afterEach(async ({ page }) => {
//         await page.close()
//         console.log('Close Browser')

//     })