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
    	this.purchaseCompleteMsg = Selector('[tmd=payment-purchase-complete]');
    	this.addressDisplayed = {
    		zipcode: Selector('.displayAddress').find('span').find('p').child(4), 
    		city: Selector('.displayAddress > span > p').nth(3),  
    		street: Selector('.displayAddress > span > p').nth(2),
    		apartmentDetails: Selector('.displayAddress > span > p').nth(1),
    		fullName: Selector('.displayAddress > span > p').nth(0)
    	};
    	this.countryDisplayed = Selector('.displayAddress:nth-child(0)')
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

