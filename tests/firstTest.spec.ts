import { test } from '@playwright/test';

test.beforeAll(async () => {
    console.log('This is the beginning of the test suite');
});


//Main before each hook that will run before each test scenario
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
});



test.describe('suite1', () => {
    //before each hook for this suite
    test.beforeEach(async ({ page }) => {
        await page.getByText('Charts').click();
    });

    test('first test', async ({ page }) => {

        await page.getByText('Form Layouts').click();

    });

    test('navigate to datepicker page', async ({ page }) => {

        await page.getByText('Datepicker').click();

    });

})

test.describe.skip('suite2', () => {
    //before each hook for this suite
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click();
    });

    test('first test', async ({ page }) => {

        await page.getByText('Form Layouts').click();

    });

    test('navigate to datepicker page', async ({ page }) => {

        await page.getByText('Datepicker').click();

    });

})


