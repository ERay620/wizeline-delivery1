import { Selector, t} from 'testcafe'
import XPathSelector from '../data/xpath-selector'

//const getStartedXPath = '(//a[text() = "Get Started"])[1]'
const loginXPath = '(//a[text() ="Log in"])[1]'
const openLoginForm =      XPathSelector(loginXPath);

const invalidEmailXPath = '//span[text () = "Invalid email address."]'
const invalidEmail =      XPathSelector(invalidEmailXPath);

const blankPasswordXPath = '//span[text () = "Blank password."]'
const blankPassword =      XPathSelector(blankPasswordXPath);

const wrongEmailPasswordXPath = '//span[text () = "Wrong email or password."]'
const wrongEmailPassword =      XPathSelector(wrongEmailPasswordXPath);





class LoginPage {
    constructor() {
        this.usernameInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('button').withAttribute('class', 'submit_btn ist_button ist_button_red sel_login').withText('Log in');
        this.openLoginForm = openLoginForm
        this.invalidEmail = invalidEmail
        this.blankPassword = blankPassword
        this.wrongEmailPassword = wrongEmailPassword

    }

    async submitLoginForm(username, password ) {
        await t
    .typeText(this.usernameInput, username)
    .typeText(this.passwordInput, password)
    .click(this.loginButton)
    }
    
}

export default new LoginPage

