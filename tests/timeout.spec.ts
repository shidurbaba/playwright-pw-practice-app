import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }, testInfo) => {
//     await page.goto('http://uitestingplayground.com/ajax');
//     await page.getByText('Button Triggering AJAX Request').click();
//     testInfo.setTimeout(testInfo.timeout + 15000);
//     //modify the test timeout for a particular suite using before each hook. 
//     // The object testInfo.timeout will increase the default timeout to 7000
// });

test.beforeEach(async ({ page }) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByText('Button Triggering AJAX Request').click();
 
  
});

test.skip('timeouts', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    await successButton.click();
    //playwright will wait for 30 seconds (default timeout)

    /**
     * To configure your global and action time modify playwright.config.ts file
     */

});

test.skip('timeouts - override action timeout from config file', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    await successButton.click({ timeout: 17000 });
    //playwright will wait for 30 seconds (default timeout)

    /**
     * To configure your global and action time modify playwright.config.ts file
     */

});

test.skip('timeouts - when test timeout is lower then command timeout', async ({ page }) => {
    //our test timeout is lower than command timeout
    test.setTimeout(10000)
    const successButton = page.locator('.bg-success')
    await successButton.click();

});

test.skip('timeouts - slow will increase the default timeout in three times', async ({ page }) => {
    test.slow()
    const successButton = page.locator('.bg-success')
    await successButton.click();

});






