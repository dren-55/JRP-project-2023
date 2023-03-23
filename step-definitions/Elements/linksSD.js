const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Links = require("../../POM/Elements/Links")
const Commands = require("../../POM/Commands")
const commands = new Commands();
const links =new Links();

Given(/^i am on Demo-qa$/, async function (){
    await browser.url('/');
})
When(/^i click on Elements$/, async function (){
    await links.clickElementsButton()
    await browser.pause(2000)
})
When(/^i click on links$/, async function (){
    await links.clickLinksButton()
    await browser.pause(2000)
})

When(/^i click on Home link$/, async function (){
    await links.clickHomeLinkButton()
    await browser.pause(3000)
})

Then(/^i verify home link is displayed in a new window handle$/, async () => {
    await links.switchWindow()
    const pageTitle = await links.getHomePgTitle()
    console.log(`--------------------------->${pageTitle}`)
    const expectedTitle = 'DEMOQA'
    expect(pageTitle, 'DEMOQA page did NOT open').to.be.equal(expectedTitle)

})