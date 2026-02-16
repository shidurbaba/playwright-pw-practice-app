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

    test('Dialog Boxes Example', async ({ page }) => {
        test.slow()
        await page.getByText('Tables & Data').click()
        await page.getByText('Smart Table').click()

        //This is a listener
        page.on('dialog', dialog =>
            {
                expect(dialog.message()).toEqual('Are you sure you want to delete?')
                dialog.accept();
            })

        await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click();
        await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com')    
    }

    )








});