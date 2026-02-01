import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});


test('Resusing the locators', async ({ page }) => {
      const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'});
      const emailField = basicForm.getByRole('textbox', {name: 'Email'})
      const passwordField = basicForm.getByRole('textbox', {name: 'Password'})
      const checkbox = basicForm.filter({has: page.locator('nb-checkbox')})
      const submitButton = basicForm.getByRole('button')

      await emailField.fill('test@test.com');
      await passwordField.fill('Welcome123');
      await checkbox.click();
      await submitButton.click();

      await expect(emailField).toHaveValue('test@test.com');
  
});