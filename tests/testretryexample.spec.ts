import { test, expect } from '@playwright/test';
import { using } from 'rxjs';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');

});


test.describe('Form Layouts page', async () => {
    test.describe.configure({ retries: 1 }) //---->override global retry execution from 1 to 2 times
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()

    })

    test('input fields', async ({ page }, testInfo) => {
        if(testInfo.retry)
            {
                //do something
            }
        const usingTheGridEmailInput = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" });
        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear();
        // await usingTheGridEmailInput.pressSequentially('test2@test.com', { delay: 100 })
        await usingTheGridEmailInput.pressSequentially('test2@test.com')


        //generic assertions
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test2@test.com')

        //locator assertion
        //await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')

    })

    test('tooltip Example', async ({ page }) => {
        test.slow()
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Tooltip').click()

        const tooltipCard = page.locator('nb-card', { hasText: "Tooltip Placements" })
        await tooltipCard.getByRole('button', { name: "Top" }).hover()

        const tooltip = await page.locator('nb-tooltip').textContent();
        expect(tooltip).toEqual('This is a tooltip')

    })





});