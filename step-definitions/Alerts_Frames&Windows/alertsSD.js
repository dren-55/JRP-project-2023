const { When, Then } = require("@wdio/cucumber-framework");
const Alerts = require("../../POM/Alerts_Frames&Windows/Alerts")

const alerts = new Alerts();

When(/^i click on Alerts Frames and Windows$/, async function (){
    await alerts.clickAFWButton()
    await browser.pause(2000)
})
When(/^i click on Alerts$/, async function (){
    await alerts.clickAlertsButton()
    await browser.pause(2000)
})
When(/^i click on "prompt box will appear"$/, async function (){
    await alerts.clickPromptBoxButton()
    await browser.pause(2000)
})

When(/^i enter the name (.+) and press ok$/, async (name) => {
    await alerts.enterPromptBoxText(name);
    await browser.pause(2000)

  });

  Then(/^i verify the prompt box displays the message You entered (.*)$/, async (name) => {
    const promptBoxResultText = await alerts.promptBoxResult()
    console.log(`------------------------->${promptBoxResultText}`)
    await expect(promptBoxResultText).toBe(`You entered ${name}`);
  });
  