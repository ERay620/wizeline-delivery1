import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';


fixture `Fixture: Create a new task for tomorrow`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to to creta a new task for tomorrow', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)

    await todoistPage.typeTaskNameDescription()
    await todoistPage.scheduleTaskTomorrow()
    await todoistPage.deletaAllMyTask(1)

    console.log('This is the content of an element from from the homePage: '
    + await todoistPage.allClear.textContent)
    
    
})

