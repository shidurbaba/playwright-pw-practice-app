import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByText('Button Triggering AJAX Request').click();
});


test.skip('auto-waiting example', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    await successButton.click();
    //playwright will wait for 30 seconds, next reduce the timeout in playwright.config.ts timeout to 10 sec

    const txt = await successButton.textContent();
    expect(txt).toEqual('Data loaded with AJAX get request.')
});

test.skip('auto-waiting example attached state', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    await successButton.click();

    //Implement an outer wait logic
    await successButton.waitFor({state: "attached"});
    const txt = await successButton.allTextContents();
    expect(txt).toContain('Data loaded with AJAX get request.')
});

test.skip('auto-waiting example toHaveText with expect timeout', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    
    expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
});

test('alternative waits', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //wait for element
    // await page.waitForSelector('.bg-success')

    //wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be completed
    await page.waitForLoadState('networkidle');

    const txt = await successButton.allTextContents();
    expect(txt).toContain('Data loaded with AJAX get request.')
});



