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

    test('input fields', async ({ page }) => {
        const usingTheGridEmailInput = page.locator('nb-card',{hasText: "Using the Grid"}).getByRole('textbox',{name: "Email"});
        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear();
        await usingTheGridEmailInput.pressSequentially('test2@test.com', {delay: 500})

        //generic assertions
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect (inputValue).toEqual('test2@test.com')

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')

    })

    
    test('radio buttons', async ({ page }) => {
        const usingTheGridForm = page.locator('nb-card',{hasText: "Using the Grid"})
        
        await usingTheGridForm.getByLabel('Option 1').check({force: true})
        
        await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force: true}) //Another option to check the radiobutton

        //How to validate if our selection was successful?
        const radioStatus = await usingTheGridForm.getByRole('radio', {name: "Option 2"}).isChecked()
        expect(radioStatus).toBeTruthy();

        //How to validate using locator?
        await expect(usingTheGridForm.getByRole('radio', {name: "Option 2"})).toBeChecked()

        //How to check if Option 1 is not checked without creating a new constant?
        expect(await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()).toBeFalsy()

        //How to check if Option 2 is checked without creating a new constant?
        expect(await usingTheGridForm.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy()


    })





});