import { driver, $, expect } from '@wdio/globals'
class CartPage{
    get cartIcon() { return $('//android.view.ViewGroup[@content-desc="test-Cart"]') }
    
    getCartText() {
        return this.cartIcon.getText();
    }

}

export default new CartPage()

//             await driver.pause(1000)
//             await PageAwal.tooglebtn()
//             await scrollVert(1000, 850)
//             let addProdCount = 0

//             const products = [
//                 ProductPage.product1,
//                 ProductPage.product2,
//                 ProductPage.product3,
//                 ProductPage.product4
//             ]
//             products.forEach(product => {
//                 ProductPage.addToCart(product);
//                 addProdCount++;
//             });

//             await driver.pause(2000)
//             const badgeText = CartPage.getCartText()

//             if (cartText === addProdCount.toString()) {
//                 console.log('Berhasil Badge Icon sesuai');
//             } else {
//                 console.log(`Gagal, Seharusnya ${addProdCount} tapi malah ${cartText}`);
//             }

//             expect(cartText).toBe(addProdCount.toString());