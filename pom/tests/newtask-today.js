import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoistPage from '../pages/todoist_page';
import XPathSelector from '../data/xpath-selector'



fixture `Positive Login feature test`
.page   `${URLS.BASE_URL}`

test('As a user, I should be able to log in successfuly by providing valid credentilas', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(CREDENTIALS.STANDART_USER.MYUSERNAME, CREDENTIALS.STANDART_USER.PASSWORD)

   // await t.wait(3000).expect(todoistPage.addTask.exists).ok()
    
  
      await todoistPage.typeTaskNameDescription()


    
  
      const todayDateXPath = '//button[@aria-label="2021-11-25"]/span'
      const todayDate = XPathSelector(todayDateXPath);

      await todoistPage.openCalendarTable()

      await t.click(todayDate)

      await todoistPage.submitTask()

      await t.wait(3000).expect(todoistPage.addedTask.exists).ok().wait(3000)
   

   // console.log('This is the content of an element from from the homePage: '
   // + await todoistPage.addTask.textContent)

   
    //t.todoistPage.submitTaskToday()

   

/*


    
    
    await t
    .click(todayDate)
    click(todoistPage.addTaskButton)*/

    
})

