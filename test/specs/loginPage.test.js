import { driver, $, expect } from '@wdio/globals'
import { scrollVert, scrollHorz } from '../../fungsiLain/scrollVertHorz.js'
import LoginPage from '../pageobjects/loginPOM.js'
import PageAwal from '../pageobjects/landingPagePOM.js'


describe('UJI FITUR LOGIN APLIKASI SWAGLABS', function(){
    describe('1. Fitur Login (-) langsung click tombol Login', function(){
        it('Tidak Berhasil Login, Harap isi Field Username dan Password', async function(){
            await driver.pause(2000)
            await LoginPage.klikLogin()
            const pesanError = await LoginPage.errorLogin()
            await driver.pause(2000)
            await LoginPage.hapusField()
            //Assertion
            await expect(LoginPage.errLoginMsg).toHaveText(pesanError)
    
        })
    })

    describe('2. Fitur Login (-) Isi Username Saja', function(){
        it('Tidak Berhasil Login, Harap isi Field Password', async function(){
            await driver.pause(2000)
            await LoginPage.userfilled('standard_user')
            const pesanError = await LoginPage.errorLogin()
            await driver.pause(2000)
            await LoginPage.hapusField()
            //Assertion
            await expect(LoginPage.errLoginMsg).toHaveText(pesanError)
        })
    })

    describe('3. Fitur Login (-) Isi Password Saja', function(){
        it('Tidak Berhasil Login, Harap isi Field Username', async function(){
            await driver.pause(2000)
            await LoginPage.passfilled('secret_sauce')
            const pesanError = await LoginPage.errorLogin()
            await driver.pause(2000)
            await LoginPage.hapusField()
            //Assertion
            await expect(LoginPage.errLoginMsg).toHaveText(pesanError)
        })
    })

    describe('4. Fitur Login (-) Isi Username dan Password Salah ', function(){
        it('Tidak Berhasil Login, Harap isi Sesuai Data yang Terdaftar', async function(){
            await driver.pause(2000)
            await LoginPage.filledAll('userSalah', 'passSalah')
            const pesanError = await LoginPage.errorLogin()
            await driver.pause(2000)
            await LoginPage.hapusField()
            //Assertion
            await expect(LoginPage.errLoginMsg).toHaveText(pesanError)
        })
    })

    describe('5. Fitur Login (-) Autofill Locked User ', function(){
        it('Tidak Berhasil Login, Harap isi Sesuai Data yang Terdaftar', async function(){
            await driver.pause(2000)
            await scrollVert(1000, 100)
            await LoginPage.LockedUser()
            await scrollVert(100, 1000)
            await LoginPage.klikLogin()
            const pesanError = await LoginPage.errorLogin()
            await driver.pause(2000)
            await LoginPage.hapusField()
            //Assertion
            await expect(LoginPage.errLoginMsg).toHaveText(pesanError)
        })
    })

    describe('6. Fitur Login (+) Autofill Standard User ', function(){
        it('Berhasil Login, Menuju Halaman Produk', async function(){
            await driver.pause(2000)
            await scrollVert(1000, 100)
            await LoginPage.StandardUser()
            await scrollVert(100, 1000)
            await LoginPage.klikLogin()

            await driver.pause(2000)
            //Assertion
            await expect(PageAwal.dahLogin).toBeDisplayed()
            await driver.back()

        })
    })

    describe('7. Fitur Login (+) User Credentials ', function(){
        it('Berhasil Login, Menuju Halaman Produk', async function(){
            await driver.pause(2000)
            await LoginPage.filledAll('standard_user', 'secret_sauce')
            await LoginPage.klikLogin()

            await driver.pause(2000)
            //Assertion
            await expect(PageAwal.dahLogin).toBeDisplayed()
            //await driver.back()
        })
    })

    // describe('8. Fitur Login (-) User Invalid Credentials ', function(){
    //     it.only('Berhasil Login, Menuju Halaman Produk', async function(){
    //         await driver.pause(2000)
    //         await LoginPage.filledAll('salahUser', 'salahPass')
    //         await LoginPage.klikLogin()

    //         await driver.pause(2000)
    //         //Assertion
    //         await expect(PageAwal.dahLogin).toBeDisplayed()
    //     })
    // })

    //adanya driver.back() tidak mempengaruhi await pada Test ke 8 diatas kenapa ya?
})