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
        this.countryList = Selector('[uid=address__country__list]')
        this.selectedCountry = Selector('[uid=address__country__list] > div')
    }

    async enterShippingAddress(iZipcode,iCity,iSteet,iApartmentDetails,iFullName){
    	let shippingDetails = {
            zipcode:iZipcode, 
            city:iCity, 
            street:iSteet, 
            apartmentDetails:iApartmentDetails, 
            fullName:iFullName
        }
        await this.enterShippingAddress(shippingDetails)
    }
    async enterShippingAddressObj(shippingDetails){
        await t
            .typeText(this.zipcodeInput, shippingDetails.zipcode)
            .click(this.showDeliveryTimeButton)
            .typeText(this.cityInput,shippingDetails.city)
            .typeText(this.steetInput,shippingDetails.street)
            .typeText(this.apartmentDetailsInput,shippingDetails.apartmentDetails)
            .typeText(this.fullNameInput,shippingDetails.fullName)
            .click(this.continueButton)
    }

}
