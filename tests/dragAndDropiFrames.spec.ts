import { test, expect } from '@playwright/test';
import { using } from 'rxjs';

test.beforeEach(async ({ page }) => {
    console.log("Navigating to Browser")
    await page.goto('http://www.globalsqa.com/demo-site/draganddrop/');

});

//iframe - it's kind of a website inside of the website, you can tell that by HTML code and body
test.describe('Drag And Drop Example', async () => {


    test.skip('Drag And Drop With iFrame - Example 1', async ({ page }) => {
        test.slow()

        const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')

        await frame.locator('li', { hasText: "High Tatras 2" }).dragTo(frame.locator('#trash'))

    })

    test('Drag And Drop With iFrame - Example 2 ', async ({ page }) => {
        test.slow()

        const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')
        await frame.locator('li', { hasText: "High Tatras 2" }).dragTo(frame.locator('#trash'))
        await frame.locator('li', { hasText: "High Tatras 4" }).hover()
        await page.mouse.down() //Mouse movement for more precise control over the drag and drop.
        await frame.locator('#trash').hover()
        await page.mouse.up()

        await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2, High Tatras 4"])
    })










































    // test.afterEach(async ({ page }) => {
    //     await page.close()
    //     console.log('Close Browser')

    // })




});