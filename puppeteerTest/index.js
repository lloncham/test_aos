const puppeteer = require('puppeteer');
const SUCCESS = require('./success');
const FAIL = require('./fail');

const successtest = async browser => {

	const page = await browser.newPage()
	const USERNAME_SELECTOR = '#email';
	const PASSWORD_SELECTOR = '#psw';
	const BUTTON_SELECTOR = '#root > div > div > div > button'

	await page.goto('http://localhost:3000/');
	await page.click(USERNAME_SELECTOR);
	await page.keyboard.type(SUCCESS.username);
	await page.click(PASSWORD_SELECTOR);
	await page.keyboard.type(SUCCESS.password);
	await page.click(BUTTON_SELECTOR);
	await page.waitForNavigation();
}

const failtest = async (browser) => {

	const page = await browser.newPage()
	const USERNAME_SELECTOR = '#email';
	const PASSWORD_SELECTOR = '#psw';
	const BUTTON_SELECTOR = '#root > div > div > div > button'

	await page.goto('http://localhost:3000/');
	await page.click(BUTTON_SELECTOR);
	await page.click(USERNAME_SELECTOR);
	await page.keyboard.type(FAIL.username);
	await page.click(PASSWORD_SELECTOR);
	await page.keyboard.type(FAIL.password);
	await page.click(BUTTON_SELECTOR);
	await page.waitForNavigation();
}

const alltests = async () => {

	const browser = await puppeteer.launch({ headless: false })
	await Promise.all(failtest(browser), successtest(browser));
}

alltests();
