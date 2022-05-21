const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');

const pathDriver = "/c/Users/Fernanda/Documents/Hiring\ coders/testes/tdd_bdd_jasmine_cucumber/driver/chromedriver"
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder().forBrowser('chrome').setChromeService(service)

Given('I\'m have {string} clientes in my database', function (string) {
	console.log("Inseri os dados na base")
  });

  When('I access the home webpage', async function () {
	await driver.get('http://localhost:3000')
	await driver.sleep(1000)
});


  Then('see the list of {string} itens', async function (string) {
	let qtd = await driver.findElements(By.tagName('tr'));
	assert.equal(qtd.length, parseInt(string))
	await driver.quit();
  })