import { test, expect } from '@playwright/test';
import { using } from 'rxjs';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');

});


test.describe('Form Layouts page', async () => {

    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()

    })

    test('lists and dropdowns', async ({ page }) => {
        const dropdownMenu = page.locator('ngx-header nb-select')
        await dropdownMenu.click();

        page.getByRole('list') //when the list has a UL tag
        page.getByRole('listitem') // when the list has LI tag

        //const optionList = page.getByRole('list').locator('nb-option')
        const optionList = page.locator('nb-option-list nb-option')
        await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
        await optionList.filter({ hasText: "Cosmic" }).click()

        //Validate the background color
        const header = page.locator('nb-layout-header')
        await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

        //How to validate background colors of each dropdown looping through the list?

        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
        }

        //Create for in loop
        await dropdownMenu.click(); //open the dropdown
        for (const color in colors) {
            await optionList.filter({ hasText: color }).click()
            await expect(header).toHaveCSS('background-color', colors[color])
            if(color != 'Corporate')
            await dropdownMenu.click(); //open the dropdown again

        }

    }

    )








});