import { Selector, t } from 'testcafe';

export default class BasePage {

    constructor() {
        this.backButton = Selector('.back-button')
        this.xButton = Selector('[uid=nacButton__close]')
    }

    async getNaturalCycleUrl() {
    	return this.naturalCycleUrl
    }

    async clickBackButton(){
    	await t.click(this.backButton)
    }

    async clickX(){
    	await t.click(this.xButton)
    }
}
