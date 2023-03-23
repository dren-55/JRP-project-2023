const Commands = require("../Commands")

class Links {

    commands = new Commands();

    elementsLocator = '//div[@class="category-cards"]/div[1]'
    linksLocator = '//span[text()="Links"]'
    homeLinkLocator = '//a[@id="simpleLink"]'

    async clickElementsButton(){
        await this.commands.clickWebElement(this.elementsLocator)
    }

    async clickLinksButton(){
        await this.commands.clickWebElement(this.linksLocator)
    }

    async clickHomeLinkButton(){
        await this.commands.clickWebElement(this.homeLinkLocator)
    }
    async switchWindow() {
        await this.commands.switchWindowHandle()
    }
    async getHomePgTitle() {
        return await this.commands.getWindowTitle()
    }

}
module.exports = Links