import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});


test('locate child element', async ({ page }) => {

  await page.locator('nb-card nb-radio :text-is("Option 1")').click();

    //Chaining the locator
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

    //Another way to chain locators for child elements
    await page.locator('nb-card').getByRole('button', { name: 'Sign in' }).first().click() ;

    //Least favorable way to locate child element
    await page.locator('nb-card').nth(3).getByRole('button').click();
});