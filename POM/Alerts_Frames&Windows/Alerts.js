const Commands = require("../Commands")

class Alerts {

    commands = new Commands();

    alertsFramesWindowsLocator = "//h5[contains(text(),'Alerts, Frame & Windows')]"
    alertsLocator = '//span[text()="Alerts"]'
    promptBoxButtonLocator = "//button[@id='promtButton']"
    getPromptResult = '#promptResult'

    async clickAFWButton(){
        await this.commands.clickWebElement(this.alertsFramesWindowsLocator)
    }

    async clickAlertsButton(){
        await this.commands.clickWebElement(this.alertsLocator)
    }

    async clickPromptBoxButton(){
        await this.commands.clickWebElement(this.promptBoxButtonLocator)
    }

    async enterPromptBoxText(text) {
        await browser.sendAlertText(text);
        await browser.acceptAlert();
      }

    async promptBoxResult(){
       return await this.commands.getTextOfWebElement(this.getPromptResult)
    }    
}
module.exports = Alerts