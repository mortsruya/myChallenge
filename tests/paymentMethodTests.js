
import { Selector } from 'testcafe';
import PaymentMethodPage from'../pageObjects/paymentMethodPage';
import PurchaseCompletePage from '../pageObjects/purchaseCompletePage';

const paymentMethodPage = new PaymentMethodPage()
const purchaseCompletePage = new PurchaseCompletePage()

fixture `Payment method page tests`
    .page `https://master--ncapp3.netlify.com/`
    .beforeEach( async t => { 
        await paymentMethodPage.navigateToPaymentMethodPageDef()
    })


test('(#32) pay with mastercard', async t => {   
    await paymentMethodPage.payWithValidCreditCard(paymentMethodPage.masterCard)
    await t.wait(20000)
    await t.expect(purchaseCompletePage.purchaseCompleteMsg.exists).ok()
});

test('(#31) pay with visa', async t => {   
    await paymentMethodPage.payWithValidCreditCard(paymentMethodPage.visa)
    await t.wait(20000)
    await t.expect(purchaseCompletePage.purchaseCompleteMsg.exists).ok()
});

test('(#34) credit card fields should be mandatory-cvv', async t => {   
    await t.click(paymentMethodPage.creditCardTab)
    await paymentMethodPage.enterCreditCardNumber(paymentMethodPage.masterCard.number)
    await paymentMethodPage.enterCreditCardExpirationDate(paymentMethodPage.masterCard.expirationDate)
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});
test('(#34) credit card fields should be mandatory-expirationDate', async t => {   
    await t.click(paymentMethodPage.creditCardTab)
    await paymentMethodPage.enterCreditCardNumber(paymentMethodPage.masterCard.number)
    await paymentMethodPage.enterCreditCardCvv(paymentMethodPage.masterCard.cvv)
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});
test('(#34) credit card fields should be mandatory-number', async t => {   
    await t.click(paymentMethodPage.creditCardTab)
    await paymentMethodPage.enterCreditCardExpirationDate(paymentMethodPage.masterCard.expirationDate)
    await paymentMethodPage.enterCreditCardCvv(paymentMethodPage.masterCard.cvv)
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});

test('(#36) credit card expiration date should be in the future', async t => {   
    await paymentMethodPage.enterCreditCardDetails({
        number: paymentMethodPage.masterCard.number, 
        expirationDate:"1287", 
        cvv: paymentMethodPage.masterCard.cvv
    })
    await t.expect(paymentMethodPage.addAndPay.hasAttribute('disabled')).ok();
});
