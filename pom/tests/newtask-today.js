import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';


fixture `As a user, I should be able to creta a new task for today`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to creta a new task for today', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)

    await todoistPage.createTasks(1)
    await todoistPage.deletaAllMyTask(1)

    await t
    .click(todoistPage.navigateInbox)
    .expect(todoistPage.allClear.exists).ok()
   


    
})
