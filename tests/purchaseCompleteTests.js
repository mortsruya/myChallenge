
import { Selector } from 'testcafe';
import PaymentMethodPage from'../pageObjects/paymentMethodPage';
import PurchaseCompletePage from '../pageObjects/purchaseCompletePage';
import BasePage from '../pageObjects/basePage';
import OrderSummaryPage from '../pageObjects/orderSummaryPage';
import ThantsItPage from '../pageObjects/thatsItPage';

const thantsItPage = new ThantsItPage()
const orderSummaryPage = new OrderSummaryPage()
const basePage = new BasePage()
const paymentMethodPage = new PaymentMethodPage()
const purchaseCompletePage = new PurchaseCompletePage()



fixture `PurchaseCompleteTests`
    .page `https://master--ncapp3.netlify.com/`



test('(#48,49) see my receipt and finish', async t => {
    let loginEmail = 'mail' + new Date().getTime() + '@gmail.com'
    let shippingDetails = {
        zipcode:"11557", 
        city:"city", 
        street:"street", 
        apartmentDetails:"door", 
        fullName:"fullName"
    }
    
    await paymentMethodPage.navigateToPaymentMethodPage(loginEmail,'123456',shippingDetails)
    await paymentMethodPage.payWithValidCreditCard(paymentMethodPage.masterCard)
    await t.wait(20000)
    await t
        .takeScreenshot('PurchaseCompleteTests/purchaseComplete.png')
        .expect(purchaseCompletePage.purchaseCompleteMsg.exists).ok()
        .expect(purchaseCompletePage.addressDisplayed.zipcode.innerText).eql(shippingDetails.zipcode, addressDisplayed)
        .expect(purchaseCompletePage.addressDisplayed.city.innerText).eql(shippingDetails.city)
        .expect(purchaseCompletePage.addressDisplayed.street.innerText).eql(shippingDetails.street)
        .expect(purchaseCompletePage.addressDisplayed.apartmentDetails.innerText).eql(shippingDetails.apartmentDetails)
        .expect(purchaseCompletePage.addressDisplayed.fullName.innerText).eql(shippingDetails.fullName)
        .click(purchaseCompletePage.seeMyReceiptButton)
        .expect(orderSummaryPage.totalAmount.innerText).contains('590')
        .expect(orderSummaryPage.emailOfOrder.innerText).contains(loginEmail)
        .click(basePage.xButton)
        .click(purchaseCompletePage.finishButton)
        .expect(thantsItPage.onBoardingdone.innerText).eql("That's it. Now let's set up your personal experience.")




    //shipping date same as shippingScreen
    

});
