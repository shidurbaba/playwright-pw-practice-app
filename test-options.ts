import { test as base } from '@playwright/test'
import { PageManager } from '../playwright-pw-practice-app/page-objects/pageManager'


export type TestOptions =
    {
        globalsQaURL: string
        formLayoutsPage: string
        pageManager : PageManager
    }

export const test = base.extend<TestOptions>(
    {
        globalsQaURL: ['', { option: true }],

        //this is a custom fixture acts like a before hook.
        //By saying auto-true you are saying that forms layout fixtures should be automatically initialized as a very first thing when we run the test.
        formLayoutsPage: async ({ page }, use) => {
            await page.goto('/');
            await page.getByText('Forms').click()
            await page.getByText('Form Layouts').click()
            await use('') //empty string because we are not using it.
            console.log('Tear Down')
            await page.close()
            console.log('Closed Browser')
        },

        pageManager: async({page, formLayoutsPage}, use)=> //adding formLayoutsPage fixture to create dependencies
            {
            const pm = new PageManager(page)
            await use(pm)
            }

    })