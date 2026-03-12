import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"



export class FormLayoutPage extends HelperBase {

    constructor(page: Page) //Our constructor expects a page parameter (fixture) to be passed inside of this class.
    {
        super(page) // Assign it to the local field.

    }

    /**
     * Fills out Grid form with user details
     * @param email - valid email for the test user
     * @param password - valid password
     * @param optionText - valid optional text
     */

    async submitUsingThegridFormWithCredetialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: "Using the Grid" })
        await usingTheGridForm.getByRole('textbox', { name: "Email" }).fill(email)
        await usingTheGridForm.getByRole('textbox', { name: "Password" }).fill(password)
        await usingTheGridForm.getByRole('radio', { name: optionText }).check({ force: true })
        await usingTheGridForm.getByRole('button').click()
    }

    /**
     * Fills out the Inline form with user details
     * @param name - should be first and last name
     * @param email - valid email for the test user
     * @param rememberMe - true or false if user sesion to be safed
     */
    async submitInLineFormWithNameAndCheckbox(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator('nb-card', { hasText: "Inline form" })
        await inlineForm.getByRole('textbox', { name: "Jane Doe" }).fill(name)
        await inlineForm.getByRole('textbox', { name: "Email" }).fill(email)
        if(rememberMe)
            await inlineForm.getByRole('checkbox').check({force:true})
            await inlineForm.getByRole('button').click()
    }



}