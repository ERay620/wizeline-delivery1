import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';
import XPathSelector from '../data/xpath-selector'



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

/*
 
      await todoistPage.typeTaskNameDescription()
  
      
      await t. click(todoistPage.addTaskButton)

      .wait(3000).expect(todoistPage.addedTask.exists).ok()

      console.log('This is the content of an element from from the homePage: '
     + await todoistPage.addedTask.textContent)

     await t.
     click(todoistPage.taskContent)
     .click(todoistPage.moreActions)
     .click(todoistPage.deleteTaskModal)
     .click(todoistPage.deletTask).wait(2000)
     .click(todoistPage.navigateInbox)
     .expect(todoistPage.allClear.exists).ok()

     console.log('This is the content of an element from from the homePage: '
     + await todoistPage.allClear.textContent)
*/

