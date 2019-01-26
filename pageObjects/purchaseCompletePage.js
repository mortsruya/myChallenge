import { Selector, t } from 'testcafe';

export default class PurchaseCompletePage {

    constructor() {
    	this.purchaseCompleteMsg = Selector('[tmd=payment-purchase-complete]')
    }

}

