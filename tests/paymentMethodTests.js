
import { Selector } from 'testcafe';
import IntroPage from '../pageObjects/introPage';
import CreateAccountPage from '../pageObjects/createAccountPage';
import EulaPage from '../pageObjects/eulaPage';
import BasePage from '../pageObjects/basePage';
import SubscriptionPlansPage from '../pageObjects/subscriptionPlansPage';
import PurchaseCompletePage from '../pageObjects/purchaseCompletePage';
import UnreachableEmailPage from '../pageObjects/unreachableEmailPage';
import ShippingAddressPage from '../pageObjects/shippingAddressPage';
import PaymentMethodPage from'../pageObjects/paymentMethodPage';

const introPage = new IntroPage()
const createAccountPage = new CreateAccountPage()
const eulaPage = new EulaPage()
const unreachableEmailPage = new UnreachableEmailPage()
const subscriptionPlansPage = new SubscriptionPlansPage()
const shippingAddressPage = new ShippingAddressPage()
const paymentMethodPage = new PaymentMethodPage()
const purchaseCompletePage = new PurchaseCompletePage()


const basePage = new BasePage()

const masterCard = {
    number: "5555555555554444",
    expirationDate: "1225",
    cvv: "123"
}

const visa = {
    number: "4005519200000004",
    expirationDate: "1226",
    cvv: "123"
}


fixture `insert a payment method`
    .page `https://master--ncapp3.netlify.com/`;  

// test('(#32) pay with mastercard', async t => {   
//     await paymentMethodPage.navigateToPaymentMethodPage()
//     await paymentMethodPage.payWithValidCreditCard(masterCard)
//     await t.wait(20000)
//     await t.expect(purchaseCompletePage.purchaseCompleteMsg.exists).ok()
// });

// test('(#31) pay with visa', async t => {   
//     await paymentMethodPage.navigateToPaymentMethodPage()
//     await paymentMethodPage.payWithValidCreditCard(visa)
//     await t.wait(20000)
//     await t.expect(purchaseCompletePage.purchaseCompleteMsg.exists).ok()
// });

test('(#34) credit card fields should be mandatory-cvv', async t => {   
    await paymentMethodPage.navigateToPaymentMethodPage()
    await t.click(paymentMethodPage.creditCardTab)
    await paymentMethodPage.enterCreditCardNumber(masterCard.number)
    await paymentMethodPage.enterCreditCardExpirationDate(masterCard.expirationDate)
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});
test('(#34) credit card fields should be mandatory-expirationDate', async t => {   
    await paymentMethodPage.navigateToPaymentMethodPage()
    await t.click(paymentMethodPage.creditCardTab)
    await paymentMethodPage.enterCreditCardNumber(masterCard.number)
    await paymentMethodPage.enterCreditCardCvv(masterCard.cvv)
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});
test('(#34) credit card fields should be mandatory-number', async t => {   
    await paymentMethodPage.navigateToPaymentMethodPage()
    await t.click(paymentMethodPage.creditCardTab)
    await paymentMethodPage.enterCreditCardExpirationDate(masterCard.expirationDate)
    await paymentMethodPage.enterCreditCardCvv(masterCard.cvv)
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});

test('(#36) credit card expiration date should be in the future', async t => {   
    await paymentMethodPage.navigateToPaymentMethodPage()
    await paymentMethodPage.enterCreditCardDetails({number: "4005519200000004", expirationDate:"1287", cvv: "111"})
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});
