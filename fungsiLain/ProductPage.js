import { driver, $, expect } from '@wdio/globals'
class ProductPage{
    get add2Cart1() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]') }
    get add2Cart2() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[2]') }
    get add2Cart3() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[3]') }
    get add2Cart4() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[4]') }

    addToCart(productElement) {
        if (productElement.waitForExist({ timeout: 5000 })) {
            productElement.click();
        } else {
            throw new Error('Product element not found or not visible');
        }
    }
}

export default new ProductPage()