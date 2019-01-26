import { Selector, t } from 'testcafe';

export default class CreateAccoutPage {

    constructor() {
    	this.createNewAccountButton = Selector('[uid=signUpOrLoginModal__signUpOrLogin__button]');
    	this.receiveEmailsCheckBox = Selector('#checkbox-2-0')
    	this.passwordInput = Selector('[type=password]')
    	this.emailInput = Selector('[type=email]')

    }


    async typeEmail(email){ 
    	await t.typeText(this.emailInput, email)	
    }
    async typePassword(password){ 
     	await t.typeText(this.passwordInput , password)
    }
    async clickReceiveEmailsCheckBox(){ 
     	await t.click(this.receiveEmailsCheckBox)
    }
    async clickCreateNewAccountButton(){
		await t.click(this.createNewAccountButton)
    }
    async createAccount(email,password){
        await t
        .typeText(this.emailInput, email)
        .typeText(this.passwordInput , password)
        .click(this.createNewAccountButton)
    }
}
