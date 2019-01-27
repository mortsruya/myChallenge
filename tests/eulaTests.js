
import { Selector } from 'testcafe';
import CreateAccountPage from '../pageObjects/createAccountPage';
import EulaPage from '../pageObjects/eulaPage';
import UnreachableEmailPage from '../pageObjects/unreachableEmailPage';

const createAccountPage = new CreateAccountPage()
const eulaPage = new EulaPage()
const unreachableEmailPage = new UnreachableEmailPage()

fixture `Eula options`
    .page `https://master--ncapp3.netlify.com/`
    .beforeEach( async t => { 
        await eulaPage.navigateToEulaPage()    
    })

test('(#17) Accept Eula', async t => {
    await eulaPage.clickAcceptTerms()
    //TODO: update when i know how to init the reachable email before the test
    await t.expect(unreachableEmailPage.confirmButton.exists).ok()
});

test('(#15) Decline Eula', async t => {
    await  t
        .click(eulaPage.declineTermsButton)
        .click(eulaPage.IAmSureAlertButton)
        .expect(createAccountPage.createNewAccountButton.exists).ok()
});
