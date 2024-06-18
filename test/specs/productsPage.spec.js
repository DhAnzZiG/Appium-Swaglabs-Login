import { driver, $, expect } from '@wdio/globals'
import { scrollVert, scrollHorz } from '../../fungsiLain/scrollVertHorz.js'
import LoginPage from '../pageobjects/loginPOM.js'
import PageAwal from '../pageobjects/landingPagePOM.js'
import { sortedAscend, sortedDescend } from '../../fungsiLain/checkSorting.js'
import CartPage from '../../fungsiLain/CartPage.js'
import ProductPage from '../../fungsiLain/ProductPage.js'

describe('UJI FITUR HALAMAN PRODUK APLIKASI SWAGLABS', function(){
    before('Pastikan User Sudah Login', async function(){
            await driver.pause(2000)
            await LoginPage.filledAll('standard_user', 'secret_sauce')
            await LoginPage.klikLogin()
            //Assertion
            await expect(PageAwal.dahLogin).toBeDisplayed()
    })

    describe('1. Uji Fitur Detail Produk 1 (+)', function(){
        it('Berhasil pindah ke Laman Detail produk', async function(){
            await driver.pause(2000)
            const judulProduk1 = await PageAwal.titleKatalog1()
            await driver.pause(2000)
            await PageAwal.prodDetail1()
            await scrollVert(1000, 700)
            //Assertion
            await driver.pause(2000)
            await expect(PageAwal.DescProd1).toHaveText(judulProduk1)
            //Back To Products
            await PageAwal.backToProduct()
        })
    })

    describe('2. Uji Fitur Detail Produk 2 (+)', function(){
        it('Berhasil pindah ke Laman Detail produk', async function(){
            await driver.pause(2000)
            const judulProduk2 = await PageAwal.titleKatalog2()
            await driver.pause(2000)
            await PageAwal.prodDetail2()
            await scrollVert(1000, 670)
            //Assertion
            await driver.pause(2000)
            await expect(PageAwal.DescProd2).toHaveText(judulProduk2)
            //Back To Products
            await PageAwal.backToProduct()
        })
    })

    describe('3. Uji Fitur Detail Produk 3 (+) dengan scroll kebawah', function(){
        it('Berhasil pindah ke Laman Detail produk', async function(){
            await driver.pause(2000)
            await scrollVert(1000, 640)
            const judulProduk3 = await PageAwal.titleKatalog3()
            await PageAwal.prodDetail3()
            await scrollVert(1000, 700)
            //Assertion
            await driver.pause(2000)
            await expect(PageAwal.DescProd3).toHaveText(judulProduk3)
            //Back To Products
            await PageAwal.backToProduct()
        })
    })

    describe('4. Uji Fitur Detail Produk 4 (+) dengan scroll kebawah', function(){
        it('Berhasil pindah ke Laman Detail produk', async function(){
            await driver.pause(2000)
            const judulProduk4 = await PageAwal.titleKatalog4()
            await PageAwal.prodDetail4()
            await scrollVert(1000, 650)
            //Assertion
            await driver.pause(2000)
            await expect(PageAwal.DescProd4).toHaveText(judulProduk4)
            //Back To Products
            await PageAwal.backToProduct()
            await scrollVert(640,1000)
        })
    })

    describe('5. Uji Fitur Menu Toggle (+)', function(){
        it('Berhasil Mengubah view dari Grid menjadi List', async function(){
            await driver.pause(1000)
            await PageAwal.tooglebtn()
            //Assertion
            await expect(PageAwal.listMenu).toBeDisplayed()
            await driver.pause(2000)
        })
    })

    describe('6. Uji Fitur Menu Toggle (+)', function(){
        it('Berhasil Mengubah view dari List menjadi kembali Grid', async function(){
            await driver.pause(1000)
            await PageAwal.tooglebtn()
            //Assertion
            await expect(PageAwal.gridMenu).toBeDisplayed()
            await driver.pause(2000)
        })
    })

    describe('7. Uji Fitur Menu Filter By Name Descending (+)', function(){
        it('Berhasil Mengurutkan Produk dari nama Z ke nama A', async function(){

            //pilih sortir dari Z ke A
            await driver.pause(1000)
            await PageAwal.sortNameDescen()
                
            //ambil semua elemen yg berjudul Produk
            const SemuaNamaProduk = await PageAwal.getAllProduct()

            //Assertion
            const Z_ke_A = sortedDescend(SemuaNamaProduk)
            await driver.pause(2000)
            await expect (Z_ke_A).toBe(true)
        })
    })

    describe('8. Uji Fitur Menu Filter By Name Ascending (+)', function(){
        it('Berhasil Mengurutkan Produk dari nama A ke nama Z', async function(){

            //pilih sortir dari Z ke A
            await driver.pause(1000)
            await PageAwal.sortNameAscen()
                
            //ambil semua elemen yg berjudul Produk
            const SemuaNamaProduk = await PageAwal.getAllProduct()

            //Assertion
            const A_ke_Z = sortedAscend(SemuaNamaProduk)
            await driver.pause(2000)
            await expect (A_ke_Z).toBe(true)
        })
    })

    describe('9. Uji Fitur Menu Filter By Price Ascending (+)',function(){
        it('Berhasil Mengurutkan Produk dari Harga Rendah ke Harga Tinggi',async function(){
        
            //pilih sortir dari Low ke High
            await PageAwal.sortPriceAscen()
            
            //ambil semua elemen yg berjudul Price
            const HargaString = await PageAwal.getAllProdPrice()
            //console.log(HargaString)

            //Assertion
            const HargaSortAscend = sortedAscend(HargaString)
            //console.log(HargaSortAscend)

            await driver.pause(2000)
            await expect (HargaSortAscend).toBe(true)
        } )
    })

    describe('10. Uji Fitur Menu Filter By Price Descending (+)',function(){
        it('Berhasil Mengurutkan Produk dari Harga Tinggi ke Harga Rendah',async function(){
        
            //pilih sortir dari High ke Low
            await PageAwal.sortPriceDescen()
            
            //ambil semua elemen yg berjudul Price
            const HargaString = await PageAwal.getAllProdPrice()
            //console.log(HargaString)

            //Assertion
            const HargaSortDescend = sortedDescend(HargaString)
            //console.log(HargaSortDescend)

            await driver.pause(2000)
            await expect (HargaSortDescend).toBe(true)
            
        } )
    })

    describe('11. Uji Fitur Badge pada Icon Cart (+)',function(){
        it('Berhasil Menampilkan Jumlah Barang Pada Icon Cart',async function(){
            await PageAwal.sortNameAscen()
            await driver.pause(1000)
            await PageAwal.tooglebtn()
            await driver.pause(1000)
            await PageAwal.cartProd1()
            //await driver.pause(1000)
            //await PageAwal.cartProd2()

            const count = await PageAwal.badgeCart()
            await expect(PageAwal.cartIcon).toHaveText(count)

            await PageAwal.removeProd1()
            //await driver.pause(1000)
            //await PageAwal.removeProd2()
        } )
    })

    describe('12. Uji Fitur Add to Cart apakah sesuai (+)',function(){
        it('Berhasil Menampilkan Barang yang sesuai di Klik Add to Cart',async function(){
            await driver.pause(1000)
            await PageAwal.cartProd1()
            const Harga = await PageAwal.HargaProd1String()
            await driver.pause(1000)
            await PageAwal.CartPage()

            await expect(PageAwal.cart1Prod).toHaveText(Harga)
            await PageAwal.OrderLagi()

        } )
    })
    
    describe('13. Uji Fitur Payment apakah sesuai (+)',function(){
        it('Berhasil Menampilkan Harga Total yang sesuai',async function(){
            await driver.pause(1000)
            await PageAwal.tooglebtn()
            const Harga1 = await PageAwal.HargaProd1()
            await PageAwal.prodDetail2()
            await scrollVert(1000, 670)
            await driver.pause(1000)
            const Harga2 = await PageAwal.HargaProduct2()
            const total = Harga1 + Harga2
            const HargaTotal = total.toString()
            await PageAwal.OrderCart2()
            await driver.pause(1000)
            await PageAwal.CartPage()
            await scrollVert(1000, 550)
            await PageAwal.CheckOut()
            await driver.pause(1000)
            await PageAwal.datadiri()
            await scrollVert(1200, 670)
            await driver.pause(1000)
           
            await expect(PageAwal.HargaSemuaProduk).toHaveText(
                expect.stringContaining(HargaTotal)
            )
        } )
    })
})