import { Selector, t } from 'testcafe';

export default class ThantsItPage {

    constructor() {
    	this.onBoardingdone = Selector('[tmd=onboarding-done] > md')
    	this.getStartedButton = Selector('[uid=regDone__getSatarted__button]')
    }

   
}
