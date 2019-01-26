import { Selector, t } from 'testcafe';

export default class ShippingAddressPage {

    constructor() {
    	this.zipcodeInput = Selector('[uid=address__postalCode__input]')
    	this.showDeliveryTimeButton = Selector('[uid=deliveryPage__continue__button]')
    	this.cityInput = Selector('[uid=address__city__input]')
    	this.steetInput = Selector('[uid=address__addressOne__input]')
    	this.apartmentDetailsInput = Selector('[uid=address__addressTwo__input]')
    	this.fullNameInput = Selector('[uid=address__fullName__input]')
    	this.continueButton = Selector('[uid=deliveryPage__continue__button]')
    }

    async enterShippingAddress(zipcode,city,steet,apartmentDetails,fullName){
    	await t
        	.typeText(this.zipcodeInput, zipcode)
        	.click(this.showDeliveryTimeButton)
        	.typeText(this.cityInput,city)
        	.typeText(this.steetInput,steet)
        	.typeText(this.apartmentDetailsInput,apartmentDetails)
        	.typeText(this.fullNameInput,fullName)
        	.click(this.continueButton)
    }


}
