import { Selector, t } from 'testcafe';

export default class SubscriptionPlansPage {

    constructor() {
 		this.annualPlanButton = Selector('[uid=subscription__plan__YEAR__button]')
    }

    async selectAnnualPlan(){
    	await t.click(this.annualPlanButton)
    }
}
