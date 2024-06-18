import { driver, $, expect } from '@wdio/globals'

class LandingPage{
    //elemen locator

    get dahLogin() { return $('android=new UiSelector().resourceId("android:id/content")') }
    get Hamburger() { return $('//*[@content-desc="test-Menu"]')}
    get cartIcon() { return $('//android.view.ViewGroup[@content-desc="test-Cart"]') }

    get WebViewModeMenu() { return $('//android.view.ViewGroup[@content-desc="test-WEBVIEW"]') }
    get QRCodeMenu() { return $('//android.view.ViewGroup[@content-desc="test-QR CODE SCANNER"]') }
    get GeoLocMenu() { return $('//android.view.ViewGroup[@content-desc="test-GEO LOCATION"]') }
    get DrawingMenu() { return $('//android.view.ViewGroup[@content-desc="test-DRAWING"]') }
    get LogOut() { return $('//android.view.ViewGroup[@content-desc="test-LOGOUT"]') }
    
    get WebViewPage() { return $('//*[@content-desc="test-WEBVIEW SELECTION"]')}
    get WebViewText() { return $('//*[@content-desc="test-enter a https url here..."]') }
    get WebViewbtn() { return $('//*[@content-desc="test-GO TO SITE"]')}
    
    get PopUpQR() { return $('//android.widget.TextView[@resource-id="com.android.packageinstaller:id/permission_message"]')}
    //get allowPictbtnPopUp() { return $('//android.widget.Button[@resource-id="com.android.packageinstaller:id/permission_allow_button"]') }
    //get denyPictbtnPopUp() { return $('//android.widget.Button[@resource-id="com.android.packageinstaller:id/permission_deny_button"]')}

    get katalog1() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]') }
    get titleProd1() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]') }
    get DescProd1() { return $('//android.widget.TextView[@text="Sauce Labs Backpack"]') }
    get PriceProd1() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$29.99"]') }
    get add2Cart1() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]') }
    get removeCart1() { return $('(//android.view.ViewGroup[@content-desc="test-REMOVE"])[1]') }

    get katalog2() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[2]') }
    get titleProd2() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Bike Light"]') }
    get DescProd2() { return $('//android.widget.TextView[@text="Sauce Labs Bike Light"]') }
    get PriceProd2() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$9.99"]') }
    get add2Cart2() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[2]') }
    get removeCart2() { return $('(//android.view.ViewGroup[@content-desc="test-REMOVE"])[2]') }
    //Untuk membaca katalog 3 dan 4 lakukan scroll vertical from=1000Y to=640Y

    get katalog3() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[3]') }
    get titleProd3() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Bolt T-Shirt"]') }
    get DescProd3() { return $('//android.widget.TextView[@text="Sauce Labs Bolt T-Shirt"]') }
    get PriceProd3() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$15.99"]') }
    get add2Cart3() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[3]') }
    get removeCart3() { return $('(//android.view.ViewGroup[@content-desc="test-REMOVE"])[3]') }

    get katalog4() { return $('(//android.view.ViewGroup[@content-desc="test-Item"])[4]') }
    get titleProd4() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Fleece Jacket"]') }
    get DescProd4() { return $('//android.widget.TextView[@text="Sauce Labs Fleece Jacket"]') }
    get PriceProd4() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$49.99"]') }
    get add2Cart4() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[4]') }
    get removeCart4() { return $('(//android.view.ViewGroup[@content-desc="test-REMOVE"])[4]') }
    
    get backToProd() { return $('//android.view.ViewGroup[@content-desc="test-BACK TO PRODUCTS"]') }

    get listMenu() { return $('//android.widget.ScrollView[@content-desc="test-PRODUCTS"]/android.view.ViewGroup/android.view.ViewGroup[4]') }
    get gridMenu() { return $('//android.widget.ScrollView[@content-desc="test-PRODUCTS"]/android.view.ViewGroup/android.view.ViewGroup[2]') }
    get Tooglebtn() { return $('//android.view.ViewGroup[@content-desc="test-Toggle"]') }
    
    get filterbtn() { return $('//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]') }
    get optionAZ() { return $('//android.widget.TextView[@text="Name (A to Z)"]')}
    get optionZA() { return $('//android.widget.TextView[@text="Name (Z to A)"]')}
    get optionLH() { return $('//android.widget.TextView[@text="Price (low to high)"]') }
    get optionHL() { return $('//android.widget.TextView[@text="Price (high to low)"]') }
    
    get ElemenNamaProduk() { return $$('//*[@content-desc="test-Item title"]') }
    get ElemenHargaProduk() { return $$('//*[@content-desc="test-Price"]') }
    
    get cart1Prod() { return $('//android.widget.TextView[@text="$29.99"]') }
    get lanjutShop() { return $('//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]') }
    get cart2() { return $('//android.view.ViewGroup[@content-desc="test-ADD TO CART"]') }
    get checkout() { return $('//android.view.ViewGroup[@content-desc="test-CHECKOUT"]') }
    
    get FirstnameOrder() { return $('//android.widget.EditText[@content-desc="test-First Name"]') }
    get LastnameOrder() { return $('//android.widget.EditText[@content-desc="test-Last Name"]') }
    get PostalCode() { return $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]') }
    get ContinuePay() { return $('//android.view.ViewGroup[@content-desc="test-CONTINUE"]') }

    get HargaSemuaProduk() { return $('//android.widget.TextView[@text="Item total: $39.98"]') }
    //page actions

    async prodDetail1() {
        await this.katalog1.click()
    }
    
    async prodDetail2() {
        await this.katalog2.click()
    }
    
    async prodDetail3() {
        await this.katalog3.click()
    }

    async prodDetail4() {
        await this.katalog4.click()
    }

    async titleKatalog1(){
        const title1 = await this.titleProd1.getText()
        return title1
    }

    async titleKatalog2(){
        const title2 = await this.titleProd2.getText()
        return title2
    }

    async titleKatalog3(){
        const title3 = await this.titleProd3.getText()
        return title3
    }

    async titleKatalog4(){
        const title4 = await this.titleProd4.getText()
        return title4
    }
    
    async backToProduct(){
        await this.backToProd.click()
    }

    async tooglebtn(){
        await this.Tooglebtn.click()
    }

    async sortNameAscen(){
        await this.filterbtn.click()
        await this.optionAZ.click()
    }

    async sortNameDescen(){
        await this.filterbtn.click()
        await this.optionZA.click()
    }

    async sortPriceAscen(){
        await this.filterbtn.click()
        await this.optionLH.click()
    }

    async sortPriceDescen(){
        await this.filterbtn.click()
        await this.optionHL.click()
    }

    async getAllProduct(){

        const SemuaNamaProduk = []
        const iniProduk = await this.ElemenNamaProduk

        for (const NamaProduk of iniProduk){
            const TeksNamaProduk = await NamaProduk.getText()
            SemuaNamaProduk.push(TeksNamaProduk)
        }

        return SemuaNamaProduk
    }

    async getAllProdPrice(){
        const SemuaHargaProduk = []
        const PriceProduk = await this.ElemenHargaProduk

        for (const HargaProduk of PriceProduk){
            const TeksHargaProduk = await HargaProduk.getText()
            SemuaHargaProduk.push(TeksHargaProduk)
        }
        const HargaAsli = SemuaHargaProduk.map(dolar => dolar.replace('$', ''))
        const HargaString = HargaAsli.map(Number)
        return HargaString
        
    }
    
    async cartProd1(){
        await this.add2Cart1.click()
    }

    async cartProd2(){
        await this.add2Cart2.click()
    }

    async cartProd3(){
        await this.add2Cart3.click()
    }

    async cartProd4(){
        await this.add2Cart4.click()
    }

    async badgeCart(){
        const cartCount = await this.cartIcon.getText()
        return cartCount
    }

    async removeProd1(){
        await this.removeCart1.click()
    }

    async removeProd2(){
        await this.removeCart2.click()
    }

    async removeProd3(){
        await this.removeCart3.click()
    }

    async removeProd4(){
        await this.removeCart4.click()
    }

    async CartPage(){
        await this.cartIcon.click()
    }

    async HargaProd1(){
        const harga = await this.PriceProd1.getText()
        if (typeof harga === 'string' || harga instanceof String) {
            let HapusDolar = harga.replace('$', '')
            let priceValue = parseFloat(HapusDolar)
            return priceValue;
        } else {
            throw new Error('priceText is not a string')
        }
    }

    async HargaProd1String(){
        const hargaString = await this.PriceProd1.getText()
        return hargaString
    }
    
    async HargaProd2(){
        const harga2 = await this.PriceProd2.getText()
        if (typeof harga2 === 'string' || harga2 instanceof String) {
            let HapusDolar2 = harga2.replace('$', '')
            let priceValue2 = parseFloat(HapusDolar2)
            return priceValue2;
        } else {
            throw new Error('priceText is not a string')
        }
    }

    async HargaProd2String(){
        const hargaString2 = await this.PriceProd2.getText()
        return hargaString2
    }

    async OrderLagi(){
        await this.lanjutShop.click()
    }

    async OrderCart2(){
        await this.cart2.click()
    }
    async HargaProduct2(){
        const regoe = await $('//android.widget.TextView[@content-desc="test-Price"]').getText()
        if (typeof regoe === 'string' || regoe instanceof String) {
            let HapusDolar2 = regoe.replace('$', '')
            let priceValue2 = parseFloat(HapusDolar2)
            return priceValue2;
        } else {
            throw new Error('priceText is not a string')
        }
    }

    async CheckOut(){
        await this.checkout.click()
    }

    async datadiri(){
        await this.FirstnameOrder.setValue('Saya')
        await this.LastnameOrder.setValue('Pesan')
        await this.PostalCode.setValue('2')
        await this.ContinuePay.click()
    }

    async PriceAllProduct(){
        const hargatot = await this.HargaSemuaProduk.getText()
        if (typeof hargatot === 'string' || hargatot instanceof String) {
            let HapusDolarTot = hargatot.replace('$', '')
            let priceValueTot = parseFloat(HapusDolarTot)
            return priceValueTot;
        } else {
            throw new Error('priceText is not a string')
        }
    }

    async PriceAllProducts(){
        const hargatot = await this.HargaSemuaProduk.getText()
        return hargatot
    }
}

export default new LandingPage()