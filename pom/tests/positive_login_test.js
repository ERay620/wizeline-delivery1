import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoist_page from '../pages/todoist_page';


fixture `Positive Login feature test`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to log in successfuly by providing valid credentilas', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)

    await t.wait(3000).expect(todoist_page.addTask.exists).ok()
   

    console.log('This is the content of an element from from the homePage: '
     + await todoist_page.addTask.textContent)
       
})

