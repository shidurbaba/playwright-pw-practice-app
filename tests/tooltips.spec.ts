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

    test('tooltip Example', async ({ page }) => {
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Tooltip').click()

        const tooltipCard = page.locator('nb-card',{hasText: "Tooltip Placements"})
        await tooltipCard.getByRole('button', {name: "Top"}).hover()

        const tooltip = await page.locator('nb-tooltip').textContent();
        expect(tooltip).toEqual('This is a tooltip')

    }

    )








});