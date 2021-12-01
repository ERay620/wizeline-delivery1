import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';


fixture `Fixture: Positive Login with Environment Variables`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to log in successfuly by providing valid credentilas', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)

    await t.wait(3000).expect(todoistPage.plusAddTaskIcon.exists).ok().wait(3000)
   
 
       
})

