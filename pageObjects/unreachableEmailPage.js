import { Selector, t } from 'testcafe';

export default class UnreachableEmailPage {

    constructor() {
        this.confirmButton = Selector('[uid=profileEmailPage__save__button]')
    }

    async confirmEmailUnreachable(){
    	await t.click(this.confirmButton)
    }

}
