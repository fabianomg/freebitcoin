'use strict'

const puppeteer = require('puppeteer');
var browser = ''
var page = ''
class MainController {
    async main() {
        setTimeout(async () => {
            try {

                browser = await puppeteer.launch({
                    headless: true, 'args': [
                        '--no-sandbox',
                        '--disable-setuid-sandbox'
                    ]
                });
                page = await browser.newPage();

                const cookie = [{
                    name: 'login_auth',
                    value: 'a1efa684f0fa69e06bc8264613e091f5c1cb2135ea414b032e7707699cda5e88',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'password',
                    value: '33455aede354dc146e0e310c0821c5191002c1dcefbef783591f4013aa29a7c8',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'last_play',
                    value: '1583274644',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'btc_address',
                    value: '1PUHtszktUMp8EBni1Hg37vaNEyWp5m22C',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'hide_push_msg',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'hide_lambo_contest_msg',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'hide_earn_btc_msg',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'have_account',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'cookieconsent_dismissed',
                    value: 'yes',
                    domain: 'freebitco.in',
                    path: '/'
                }
                ]


                await page.setCookie(...cookie)
                console.log(await page.cookies('https://freebitco.in/?op=home'));

                await page.goto('https://freebitco.in/?op=home', { timeout: 200000, waitUntil: 'networkidle0' });
                await page.evaluate(() => {
                    document.querySelector('input[id=free_play_form_button]').click();
                });
                console.log('setitimeout')
            } catch (error) {
                console.log(error)
            } finally {
                await browser.close();
            }
        }, 1000);
        setInterval(async () => {
            try {

                browser = await puppeteer.launch({
                    headless: true, 'args': [
                        '--no-sandbox',
                        '--disable-setuid-sandbox'
                    ]
                });
                page = await browser.newPage();

                const cookie = [{
                    name: 'login_auth',
                    value: 'a1efa684f0fa69e06bc8264613e091f5c1cb2135ea414b032e7707699cda5e88',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'password',
                    value: '33455aede354dc146e0e310c0821c5191002c1dcefbef783591f4013aa29a7c8',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'last_play',
                    value: '1583274644',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'btc_address',
                    value: '1PUHtszktUMp8EBni1Hg37vaNEyWp5m22C',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'hide_push_msg',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'hide_lambo_contest_msg',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'hide_earn_btc_msg',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'have_account',
                    value: '1',
                    domain: 'freebitco.in',
                    path: '/'
                },
                {
                    name: 'cookieconsent_dismissed',
                    value: 'yes',
                    domain: 'freebitco.in',
                    path: '/'
                }
                ]


                await page.setCookie(...cookie)
                console.log(await page.cookies('https://freebitco.in/?op=home'));

                await page.goto('https://freebitco.in/?op=home', { timeout: 200000, waitUntil: 'networkidle0' });
                await page.evaluate(() => {
                    document.querySelector('input[id=free_play_form_button]').click();
                });
                console.log('setiinteval')
            } catch (error) {
                console.log(error)
            } finally {
                await browser.close();
            }
        }, 3600000);

    }
}

module.exports = MainController
