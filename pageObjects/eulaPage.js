import { Selector, t } from 'testcafe';

export default class EulaPage {

    constructor() {
    	this.beforeYouStart = Selector('[uid=beforeYouStart__terms__modal]')
    	this.acceptTermsButton = Selector('[uid=auth__terms__accept__button]')
    	this.declineTermsButton = Selector('[uid=auth__terms__decline__button]')
    } 


    async clickAcceptTerms(){
    	await t.click(this.acceptTermsButton)
    }

    async clickDeclineTerms(){
    	await t.click(this.declineTermsButton)
    }
}
