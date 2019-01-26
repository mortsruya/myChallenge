
import { Selector } from 'testcafe';
import IntroPage from '../pageObjects/introPage';
import CreateAccountPage from '../pageObjects/createAccountPage';
import EulaPage from '../pageObjects/eulaPage';
import BasePage from '../pageObjects/basePage'

const basePage = new BasePage()
const introPage = new IntroPage()
const createAccountPage = new CreateAccountPage()
const eulaPage = new EulaPage()
const newEmail = 'mail' + new Date().getTime() + '@gmail.com'
const longPassword = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'


fixture `Creating an account`
    .page `https://master--ncapp3.netlify.com/`;  

test('(#2) Create account with valid email and password', async t => {
    await introPage.clickCreateAccountButton()
    await createAccountPage.typeEmail(newEmail)
    await createAccountPage.typePassword('123456')
    await createAccountPage.clickCreateNewAccountButton()
    await t.expect(eulaPage.beforeYouStart.exists).ok()
});

test('(#3) Create account with invalid email format', async t => {
    await introPage.clickCreateAccountButton()
    await createAccountPage.typeEmail('invalidEmail@..com')
    await createAccountPage.typePassword('123456')
    await t.expect(createAccountPage.createNewAccountButton.hasAttribute('disabled')).ok();
});

test('(#5) Create account with invalid email - special chars', async t => {
    await introPage.clickCreateAccountButton()
    await createAccountPage.typeEmail('invalid~1|?@&*(Email!\'\/\'23@a.com')
    await createAccountPage.typePassword('123456')
    await t.expect(createAccountPage.createNewAccountButton.hasAttribute('disabled')).ok();
});

test('(#6) Create account with invalid password - less than 6 chars', async t => {
    await introPage.clickCreateAccountButton()
    await createAccountPage.typeEmail('newEmail')
    await createAccountPage.typePassword('12345')
    await t.expect(createAccountPage.createNewAccountButton.hasAttribute('disabled')).ok();
});

test('(#7) Create account with invalid password - more than 200 chars', async t => {
    await introPage.clickCreateAccountButton()
    await createAccountPage.typeEmail(newEmail)
    await createAccountPage.typePassword(longPassword)
    await t.expect(createAccountPage.createNewAccountButton.hasAttribute('disabled')).ok();
});
