import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';


fixture `Fixture: Create ten new tasks then delete`
.page   `${URLS.BASE_URL}`


let taskNumber=10

test('As a user, I should be able to to creta a ten new task for today', async t => {
    
   
    
    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)

    await todoistPage.createTasks(taskNumber)

})


test('As a user, I should be able to delete my created tasks', async t => {
    
        await t
        .maximizeWindow()
        .click(loginPage.openLoginForm)
    
        await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)
        await todoistPage.deletaAllMyTask(taskNumber)

        await t
        .click(todoistPage.navigateInbox)
        .expect(todoistPage.allClear.exists).ok()
        
    })



    