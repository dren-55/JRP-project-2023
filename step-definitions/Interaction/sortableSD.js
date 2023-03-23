const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SortablePage = require("../../POM/Interaction/sortable")

const sortablePage = new SortablePage();

When(/^i click on interactions$/, async function (){
    await sortablePage.clickInteractionsButton()
    await browser.pause(2000)
})

When(/^i click on Sortable$/, async function (){
    await sortablePage.clickSortableButton();
    await browser.pause(2000)
})

When("i create a list from 6 to 1", async () => {
    // const sortablePage = new SortablePage(this.driver);
    await sortablePage.arrangeListInDescendingOrder();
    await browser.pause(4000)

  });

  Then("i verify the changes", async () => {
    const sortedTextValues = await sortablePage.getSortedTextValues();
    const expectedTextValues = ['six','five','four','three','two','one'];
    expect(sortedTextValues).to.eql(expectedTextValues);
});
