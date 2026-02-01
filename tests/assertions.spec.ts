import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});


test('assertions', async ({ page }) => {
    const basicForm = page.locator('nb-card').filter({ hasText: 'Basic form' });
    const submitButton = basicForm.getByRole('button');
    //General assertions
    const value = 5
    expect(value).toEqual(5);

    const submitText = await submitButton.textContent();
    expect(submitText).toEqual('Submit')

    //Locator Assertions - This is a locator assertion and requires await
    await expect(submitButton).toHaveText('Submit')

    //Soft Assertions - A kind of assertion when the test can be continue the execition even if the assertion is failed.
    await expect.soft(submitButton).toHaveText('Submit5');
    await basicForm.click();


});