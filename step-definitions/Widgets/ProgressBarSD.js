const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const ProgressBarPage  = require("../../POM/Widgets/ProgressBar")

const progressBarPage  = new ProgressBarPage ();

When(/^i click on widgets$/, async function (){
    await progressBarPage.clickWidgetsButton()
    await browser.pause(2000)
})

When(/^i click on progress bar$/, async function (){
    await progressBarPage.clickProgressBarButton()

    await browser.pause(2000)
})

When(/^i click start and stop it at 69%$/, async function (){
    await progressBarPage.clickStartButton()
    await progressBarPage.waitUntil69Percent()
    await browser.pause(4000)

})

Then(/^i Verify progress stopped at 69%$/, async function (){
    const progressWidth = await progressBarPage.is69Displayed()
    expect(progressWidth).to.be.true
  });

