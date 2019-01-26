import { Selector, t } from 'testcafe';

export default class IntroPage {

    constructor() {
    	this.createAccountButton = Selector('[uid=introPage__signUp__button]')
    	this.loginButton = Selector('[uid=introPage__login__button]')
    	this.learnMoreButton = Selector('[uid=introPage__learnMore__button]')
    }

    async clickCreateAccountButton(){
    	await t.click(this.createAccountButton)
    }
    
    async clickLogInButton(){
    	await t.click(this.loginButton)
    }
    
    async clickLearnMoreButton(){
    	await t.click(this.learnMoreButton)
    }

}
