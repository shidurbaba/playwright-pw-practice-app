import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('User Facing Locators', async ({ page }) => {

    //1. Locate by role
    await page.getByRole('textbox', { name: 'Email' }).first().click();
    await page.getByRole('button', { name: 'Sign in' }).first().click();

    //2. Locate by label
    await page.getByLabel('Email').first().click();
    await page.getByLabel('Password').first().click();

    //3. Locate by placeholder
    await page.getByPlaceholder('Jane Doe').click();

    //4. Locate by text
    await page.getByText('Using the Grid').click();

    //5. Locate by test id
    await page.getByTestId('SignIn').click();

    //6. Locat by Title
   // await page.getByTitle('IoT Dashboard').click();
    


})