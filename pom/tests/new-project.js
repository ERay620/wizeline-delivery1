import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';


fixture `As a user, I should be able to to creta a new Project`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to to creta a new Project', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)
    await todoistPage.ceateNewProject('myprojectName')
 
})

