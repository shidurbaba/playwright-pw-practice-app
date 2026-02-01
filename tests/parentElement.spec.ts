import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});


test('locate child element', async ({ page }) => {

    await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox', {name: 'Email'}).click();
  
    await page.locator('nb-card', {has: page.locator('#inputEmail1')} ).getByRole('textbox', {name: 'Email'}).click();

    await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: 'Email'}).click();

    //click on a element using the color: RED

    await page.locator('nb-card', {has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Password'}).click();

    //chaining filter
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"}).getByRole('textbox', {name: 'Email'}).click();

    //Not recommended
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox',{name: "Email"}).click();

});