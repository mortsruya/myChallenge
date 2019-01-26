import { Selector, t } from 'testcafe';

import IntroPage from '../pageObjects/introPage';
import CreateAccountPage from '../pageObjects/createAccountPage';
import EulaPage from '../pageObjects/eulaPage';
import UnreachableEmailPage from '../pageObjects/unreachableEmailPage';
import SubscriptionPlansPage from '../pageObjects/subscriptionPlansPage';
import ShippingAddressPage from '../pageObjects/shippingAddressPage';

const introPage = new IntroPage()
const createAccountPage = new CreateAccountPage()
const eulaPage = new EulaPage()
const unreachableEmailPage = new UnreachableEmailPage()
const subscriptionPlansPage = new SubscriptionPlansPage()
const shippingAddressPage = new ShippingAddressPage()


export default class PaymentMethodPage {
    constructor() {
        this.creditCardNumberIframe = Selector('#braintree-hosted-field-number')
        this.creditCardExpirationIframe = Selector('#braintree-hosted-field-expirationDate')
        this.creditCardCvvIframe = Selector('#braintree-hosted-field-cvv')

        this.paypalTab = Selector('.payment__paypal');
    	this.creditCardTab = Selector('.payment__visa');
    	this.cardNumberInput = Selector('#credit-card-number')
    	this.dateExpirationInput = Selector('#expiration')
    	this.cvvInput = Selector('#cvv')
    	this.addAndPay = Selector('[uid=payment__pay__button]')

    }

    async payWithValidCreditCard(creditCard){
    	this.enterCreditCardDetails(creditCard);
        await t.click(this.addAndPay)
    }

    async enterCreditCardDetails(creditCard){
        await t.click(this.creditCardTab)
        this.enterCreditCardNumber(creditCard.number)
        this.enterCreditCardExpirationDate(creditCard.expirationDate)
        this.enterCreditCardCvv(creditCard.cvv)
    }
    async enterCreditCardNumber(creditCardNum){
        await t
            .switchToIframe(this.creditCardNumberIframe)
            .typeText(this.cardNumberInput,creditCardNum)
            .switchToMainWindow()
    }
    async enterCreditCardExpirationDate(creditCardExpirationDate){
        await t
            .switchToIframe(this.creditCardExpirationIframe)
            .typeText(this.dateExpirationInput,creditCardExpirationDate)
            .switchToMainWindow()
    }
    async enterCreditCardCvv(creditCardCvv){
        await t
            .switchToIframe(this.creditCardCvvIframe)
            .typeText(this.cvvInput,creditCardCvv)
            .switchToMainWindow()
    }


    async navigateToPaymentMethodPage(){
        await introPage.clickCreateAccountButton()
        await createAccountPage.createAccount('mail' + new Date().getTime() + '@gmail.com',"123456")
        await eulaPage.clickAcceptTerms()
        //TODO: remove when i know how to init the reachable email before the test
        await unreachableEmailPage.confirmEmailUnreachable()
        await subscriptionPlansPage.selectAnnualPlan()
        await shippingAddressPage.enterShippingAddress("11557","city","street","door","fullName")
    }

}
