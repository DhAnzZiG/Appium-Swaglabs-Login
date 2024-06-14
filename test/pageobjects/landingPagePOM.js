import { driver, $, expect } from '@wdio/globals'

class LandingPage{
    //elemen locator

    get dahLogin() { return $('android=new UiSelector().resourceId("android:id/content")') }
    get Hamburger() { return $('//*[@content-desc="test-Menu"]')}

    //page actions
    
}

export default new LandingPage()