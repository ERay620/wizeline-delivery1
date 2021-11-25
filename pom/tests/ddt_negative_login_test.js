import { CREDENTIALS, URLS, dataSet, negativeDataSet } from '../data/constants'
import loginPage from '../pages/login_page';
import todoist_page from '../pages/todoist_page';


fixture `Negative Login feature test`
.page   `${URLS.BASE_URL}`


negativeDataSet.forEach(data => {


    test('As a user, I should not be able to log in  by providing invalid credentilas', async t => {
        await t
        .maximizeWindow()
        .click(loginPage.openLoginForm)

        await loginPage.submitLoginForm(data.myUserName, data.myPassword )    
        await t.wait(3000).expect(todoist_page.addedTaskWithPlus.exists).notOk()
  
     });
  
  })
  