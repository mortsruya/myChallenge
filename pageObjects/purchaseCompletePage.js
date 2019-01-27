import { Selector, t } from 'testcafe';
import PaymentMethodPage from'../pageObjects/paymentMethodPage';

const paymentMethodPage = new PaymentMethodPage()
const masterCard = {
    number: "5555555555554444",
    expirationDate: "1225",
    cvv: "123"
}

export default class PurchaseCompletePage {

    constructor() {
    	this.purchaseCompleteMsg = Selector('[tmd=payment-purchase-complete]')
    	this.addressDisplayed = {
    		zipcode: Selector('.displayAddress > span > :nth-child(5)'), 
    		city: Selector('.displayAddress > span > :nth-child(4)'), 
    		street: Selector('.displayAddress > span > :nth-child(3)'), 
    		apartmentDetails: Selector('.displayAddress > span > :nth-child(2)'), 
    		fullName: Selector('.displayAddress > span > :nth-child(1)')
    	}
    	this.countryDisplayed = Selector('.displayAddress > :nth-child(2)')
    	this.finishButton = Selector('[uid=orderPage__finish__button]')
    	this.seeMyReceiptButton = Selector('[uid=orderPage__seeMyReceipt__button]')
    }

    async navigateToPurchaseCompletePage() {
    	let loginEmail = 'mail' + new Date().getTime() + '@gmail.com'
    	let loginPassword = '123456'
    	let shippingDetails = {
    		zipcode:"11557", 
    		city:"city", 
    		street:"street", 
    		apartmentDetails:"door", 
    		fullName:"fullName"
    	}
    	await this.navigateToPurchaseCompletePage(loginEmail,loginPassword,shippingDetails) 
    }

    async navigateToPurchaseCompletePage(email,password,shippingDetails) {
    	await this.navigateToPaymentMethodPage(email, password, shippingDetails)
    	await this.paymentMethodPage.navigateToPaymentMethodPage()
    	await paymentMethodPage.payWithValidCreditCard(masterCard)
    	await t.wait(20000)
    }

}

