const Commands = require("../Commands")

class ProgressBarPage  {

    commands = new Commands();

    widgetsLocator = '//h5[contains(text(),"Widgets")]'
    progressBarButtonLocator = '//span[contains(text(),"Progress Bar")]'
    startButtonLocator = '//button[@id="startStopButton"]'
    fullGreenBarLocator = '//div[contains(text(),"100%")]'
    stopButtonLocator = '//button[@id="startStopButton"]'
    progressBarAt69Locator = '//div[contains(text(),"69%")]'



    async clickWidgetsButton(){
        await this.commands.clickWebElement(this.widgetsLocator)
    }

    async clickProgressBarButton(){
        await this.commands.clickWebElement(this.progressBarButtonLocator)
    }
    async clickStartButton(){
        await this.commands.clickWebElement(this.startButtonLocator)
    }

    async waitUntil69Percent(){
       await browser.waitUntil(async() => {
            const progressBarAt69 = this.progressBarAt69Locator
            if (await this.commands.isWebElementDisplayed(progressBarAt69)) {
             await this.commands.clickWebElement(this.stopButtonLocator)
              return true;
            } else {
              return false;
            }
          }, {timeout: 8000, interval: 100});

    }
    
    async is69Displayed(){
        return await this.commands.isWebElementDisplayed(this.progressBarAt69Locator)
    }


}
module.exports = ProgressBarPage 