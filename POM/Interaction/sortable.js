const Commands = require("../Commands")

class SortablePage {

    commands = new Commands();

   interactionsLocator = '//div[contains(@class , "mt-4")][5]'
   sortableLocator = '//span[contains(text(),"Sortable")]'
   sortableList1 = "//div[@id='demo-tabpane-list']//div[contains(@class,'list-group-item')][1]"


   async clickInteractionsButton(){
    await this.commands.clickWebElement(this.interactionsLocator)
}

    async clickSortableButton(){
    await this.commands.clickWebElement(this.sortableLocator)
}


async arrangeListInDescendingOrder() {
  const listItems = await this.commands.findAllWebElement(this.sortableList);
  const itemsCount = listItems.length;
  const expectedOrder = ['six','five','four','three','two','one'];

  for (let i = 0; i < itemsCount; i++) {
    const itemText = await this.commands.getTextOfWebElement(listItems[i]);
    const expectedIndex = expectedOrder.indexOf(itemText);
    if (i !== expectedIndex) {
      await listItems[expectedIndex].dragAndDrop(listItems[i]);
      const temp = listItems[expectedIndex];
      listItems[expectedIndex] = listItems[i];
      listItems[i] = temp;
    }
  }
}


async getSortedTextValues() {
  const listItems = await this.commands.findAllWebElement(this.sortableList);
  const sortedItems = await Promise.all(
    listItems.map(async (item) => {
      return await this.commands.getTextOfWebElement(item);
    })
  );
  return sortedItems.sort((a, b) => b.localeCompare(a));
}


}
module.exports = SortablePage