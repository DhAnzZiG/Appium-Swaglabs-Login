import { driver, $, expect } from '@wdio/globals'

class LoginPage{
    //elemen locator

    get FieldUsername() { return $('~test-Username') }
    get FieldPass() { return $('~test-Password') }
    get loginbtn() { return $('~test-LOGIN') }
    get fillStandard() { return $('//*[@content-desc="test-standard_user"]') }
    get fillLocked() { return $('//*[@content-desc="test-locked_out_user"]') }
    get fillProblem() { return $('//*[@content-desc="test-problem_user"]')}
    get errLoginMsg() { return $('//*[@content-desc="test-Error message"]')}

    //page actions
    async klikLogin(){
        await this.loginbtn.click()
    }
    
    async userfilled(userIsi){
        await this.FieldUsername.setValue(userIsi)
        await this.loginbtn.click()
    }

    async passfilled(passIsi){
        await this.FieldPass.setValue(passIsi)
        await this.loginbtn.click()
    }

    async errorLogin(){
        const pesanError = await this.errLoginMsg.getText()
        return pesanError
    }

    async hapusField(){
        if (this.errLoginMsg.isDisplayed()) {
            this.FieldUsername.clearValue();
            this.FieldPass.clearValue();
        }
    }

    async filledAll(userMu, passMu){
        await this.FieldUsername.setValue(userMu)
        await this.FieldPass.setValue(passMu)
        await this.loginbtn.click()
    }

    async LockedUser(){
        const klikLocked = await this.fillLocked
        await klikLocked.click()

    }

    async StandardUser(){
        const klikStandard = await this.fillStandard
        await klikStandard.click()
    }

}

export default new LoginPage()