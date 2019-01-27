import { Selector, t } from 'testcafe';
import IntroPage from '../pageObjects/introPage';
import CreateAccountPage from '../pageObjects/createAccountPage';

const introPage = new IntroPage()
const createAccountPage = new CreateAccountPage()

export default class EulaPage {

    constructor() {
    	this.beforeYouStart = Selector('[uid=beforeYouStart__terms__modal]')
    	this.acceptTermsButton = Selector('[uid=auth__terms__accept__button]')
    	this.declineTermsButton = Selector('[uid=auth__terms__decline__button]')
        this.AreYouSureAlert = Selector('#alert-hdr-0').withExactText("Are you sure?")
        this.IAmSureAlertButton = Selector('.alert-button').nth(0)
        this.CancelAlertButton =  Selector('.alert-button').nth(1)
    } 


    async clickAcceptTerms(){
    	await t.click(this.acceptTermsButton)
    }

    async clickDeclineTerms(){
    	await t.click(this.declineTermsButton)
    }

    async navigateToEulaPage(){
        await introPage.clickCreateAccountButton()
        await createAccountPage.createAccount('mail' + new Date().getTime() + '@gmail.com',"123456")
    }


}
