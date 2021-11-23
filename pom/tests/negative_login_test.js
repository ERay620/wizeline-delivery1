import { CREDENTIALS, URLS } from '../data/constants'
import loginPage from '../pages/login_page'
import todoist_page from '../pages/todoist_page';


fixture `Negative Login feature test`
.page   `${URLS.BASE_URL}`

test('As a user, I should not be able to log in with empty  credentilas', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm(" ", " " )

    await t.expect(loginPage.invalidEmail.exists).ok()
   
    
})


test('As a user, when I type a wrong credentilas, I should get a warning message ', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)

    await loginPage.submitLoginForm("aytemurerol1@gmail.com", " 22" )

    await t.expect(loginPage.wrongEmailPassword.exists).ok()
   
    
})

test('As a user, when I leave  password empty, I should get a warning message ', async t => {

    await t
    .maximizeWindow()
    .click(loginPage.openLoginForm)
    .typeText(loginPage.usernameInput, "aytemurerol@gmail.com")
    .click(loginPage.loginButton)

    await t.expect(loginPage.blankPassword.exists).ok()
   
    
})

