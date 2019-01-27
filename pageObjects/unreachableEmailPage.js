import { Selector, t } from 'testcafe';

export default class UnreachableEmailPage {

    constructor() {
        this.confirmButton = Selector('[uid=profileEmailPage__save__button]')
        this.confirmButtonText = Selector('[uid=profileEmailPage__save__button] > span')
        this.emailInput = Selector('[uid=profileEmailPage__email__input]')
        this.warnning = Selector('.settings__item--warning')
        this.confirmButtonText = "Confirm"
        this.updateButtonText = "Update"
    }

    async confirmEmailUnreachable(){
    	await t.click(this.confirmButton)
    }

    async editEmail(email){
    	await t.typeText(this.emailInput,email)
    }

    async hasWarnningText(){
    	return await this.warnning.innerText.length > 0
    }

    async getButtonText(){
    	return await this.confirmButtonText.innerText
    }

}
