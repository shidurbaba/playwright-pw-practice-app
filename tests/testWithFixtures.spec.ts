import { test } from '../test-options'; //intead of playwright library import fixture from test-options library
import {faker} from '@faker-js/faker'


test('Parameterized Methods Example', async ({pageManager}) => {
    //const pm = new PageManager(page)
    const randomFullName = faker.person.fullName() //Return random fullname of a male person
    const lowerCaseRandomFullName = randomFullName.toLowerCase()
    const randomEmail = `${lowerCaseRandomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pageManager.onformLayoutsPage().submitUsingThegridFormWithCredetialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await pageManager.onformLayoutsPage().submitInLineFormWithNameAndCheckbox(randomFullName, randomEmail, false)
 
   
})

