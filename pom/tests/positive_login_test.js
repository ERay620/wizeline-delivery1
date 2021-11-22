
import { Selector, t } from 'testcafe';
import XPathSelector from '../data/xpath-selector'
import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoist_page from '../pages/todoist_page';

//const getStartedXPath = '(//a[text() = "Get Started"])[1]'
const getStartedXPath = '(//a[text() ="Log in"])[1]'
const getStarted =      XPathSelector(getStartedXPath);


fixture `Positive Login feature test`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to log in successfuly by providing valid credentilas', async t => {

    await t
    .maximizeWindow()
    .click(getStarted)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD )

    await t.expect(todoist_page.addTask.exists).ok()
   
   
    console.log( await todoist_page.addTask.textContent)
       
})

