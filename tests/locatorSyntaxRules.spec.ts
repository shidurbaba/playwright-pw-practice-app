import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});


test('Locator syntax rules', async ({ page }) => {

    //1. Locate by tag name
    //<input _ngcontent-pqb-c287="" type="email" nbinput="" fullwidth="" id="inputEmail1" placeholder="Email" ng-reflect-full-width="" class="input-full-width size-medium status-basic shape-rectangle nb-transition">
    await page.locator('input').first().click(); //this will click on the first input field on the page

    //2. Locate by id
    await page.locator('#inputEmail1').click();

    //3. Locate by class value
    page.locator('.shape-rectangle');

    //4. Locate by attribute - playwright will all web elements with attribute value []
    page.locator('[placeholder="Email"]');

    //5. By Full Class Value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

    //6. Combine different selectors
    page.locator('input[placeholder="Email"].shape-rectangle');

    //7. Xpath locator (No recommend to use it)
    page.locator('//input[@id="inputEmail1"]');

    //8. Partial Text Match
    page.locator(':text("Using")')

    //9. Exact Text Match
    page.locator(':text-is("Using the Grid")')

});
