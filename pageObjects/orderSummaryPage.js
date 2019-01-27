import { Selector, t } from 'testcafe';

export default class OrderSummaryPage {

    constructor() {
    	this.totalAmount = Selector('.orderSummary__total > div > :nth-child(2)')
    	this.emailOfOrder = Selector('.footer > p > span')
    }

   
}
