import { test, expect } from '@playwright/test';
import { using } from 'rxjs';

test.beforeEach(async ({ page }) => {
    console.log("Navigating to Browser")
    await page.goto('http://localhost:4200/');

});


test.describe('Date Picker Example', async () => {

    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
        await page.getByText('Datepicker').click()

    })


    test.skip('Date Picker Test 1', async ({ page }) => {
        test.slow()

        const calendarInputField = page.getByPlaceholder('Form Picker')
        await calendarInputField.click()

        //exact: true - select exact character to select.
        await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', { exact: true }).click()

        await expect(calendarInputField).toHaveValue('Mar 1, 2026')
    })

    test.skip('Date Picker Test 2 - Sophisticated Version 1 ', async ({ page }) => {
        test.slow()

        const calendarInputField = page.getByPlaceholder('Form Picker')
        await calendarInputField.click()

        let date = new Date();
        date.setDate(date.getDate() + 1)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' })
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`


        await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()

        await expect(calendarInputField).toHaveValue(dateToAssert)

        await page.waitForTimeout(5000)
    })



    test('Date Picker Test 2 - Sophisticated Version 2 - Select The Correct Month ', async ({ page }) => {
        test.slow()

        const calendarInputField = page.getByPlaceholder('Form Picker')
        await calendarInputField.click()

        let date = new Date();
        date.setDate(date.getDate() + 200)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' })
        const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' })
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`

        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
            await page.locator('nb-calendar-pageable-navigation [date-name="chevron-right"]').click()
            let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();

        }

        await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click()

        await expect(calendarInputField).toHaveValue(dateToAssert)

        await page.waitForTimeout(5000)
    })





































    test.afterEach(async ({ page }) => {
        await page.close()
        console.log('Close Browser')

    })




});