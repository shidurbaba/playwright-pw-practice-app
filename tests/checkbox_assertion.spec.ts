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

    test('checkboxes', async ({ page }) => {
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Toastr').click()

        await page.getByRole('checkbox', { name: "Hide on click" }).check({ force: true })
        //check () - if the checkbox already checked it will not unselect this checkbox, while click command just performs the click and doesn't validate.
        await page.getByRole('checkbox', { name: "Hide on click" }).uncheck({ force: true })
        await page.getByRole('checkbox', { name: "Prevent arising of duplicate toast" }).check({ force: true })

        const allBoxes = page.getByRole('checkbox')

        for (const box of await allBoxes.all()) {
            await box.check({ force: true })
            expect(await box.isChecked()).toBeTruthy()

            //   await box.uncheck({force: true})
            // expect(await box.isChecked()).toBeFalsy()
        }

    }

    )








});