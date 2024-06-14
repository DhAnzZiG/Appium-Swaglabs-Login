import { driver, $, expect } from '@wdio/globals'
import { scrollVert, scrollHorz } from '../../fungsiLain/scrollVertHorz.js'
import LoginPage from '../pageobjects/loginPOM.js'
import PageAwal from '../pageobjects/landingPagePOM.js'

describe('UJI FITUR HALAMAN PRODUK APLIKASI SWAGLABS', function(){
    before('Pastikan User Sudah Login', async function(){
            await driver.pause(2000)
            await LoginPage.filledAll('standard_user', 'secret_sauce')
            await LoginPage.klikLogin()
            //Assertion
            await expect(PageAwal.dahLogin).toBeDisplayed()
    })
    describe('1. Uji Fitur Hamburger (-)', function(){
        it('Tidak Berhasil', async function(){

        })
    })
})