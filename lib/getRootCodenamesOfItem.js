"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kentico_cloud_delivery_1 = require("kentico-cloud-delivery");
exports.getRootCodenamesOfItem = (item, allItems, rootItemTypes) => rootItemTypes.includes(item.type)
    ? [item.codename]
    : getRootParents(item.codename, allItems, rootItemTypes);
const getRootParents = (codename, allItems, rootItemTypes) => {
    let itemsToVisit = getDirectParents(codename, allItems);
    const visitedItems = [];
    const rootItemCodenames = [];
    while (itemsToVisit.length > 0) {
        const newItemsToVisit = [];
        itemsToVisit.forEach((item) => processItem(item, rootItemTypes, {
            allItems,
            newItemsToVisit,
            rootItemCodenames,
            visitedItems,
        }));
        itemsToVisit = newItemsToVisit;
    }
    return rootItemCodenames;
};
const processItem = (itemToProcess, rootItemTypes, context) => {
    const itemCodename = itemToProcess.system.codename;
    if (context.visitedItems.includes(itemCodename)) {
        return;
    }
    context.visitedItems.push(itemCodename);
    if (rootItemTypes.includes(itemToProcess.system.type)) {
        context.rootItemCodenames.push(itemCodename);
    }
    else {
        const parents = getDirectParents(itemCodename, context.allItems);
        parents.forEach((item) => context.newItemsToVisit.push(item));
    }
};
const getDirectParents = (codename, allItems) => allItems.filter((item) => isInAnyRichTextElement(item, codename) ||
    isInAnyLinkedItemsElement(item.elements, codename));
const isInAnyRichTextElement = (parentItem, codename) => isInElements(parentItem, codename, kentico_cloud_delivery_1.FieldType.RichText);
const isInAnyLinkedItemsElement = (itemElements, codename) => itemElements && isInElements(itemElements, codename, kentico_cloud_delivery_1.FieldType.ModularContent);
const isInElements = (parentItem, codename, fieldType) => Object
    .keys(parentItem)
    .map((key) => {
    const element = parentItem[key];
    if (element.type && element.type === fieldType) {
        const itemsInElement = element.linkedItemCodenames
            ? element.linkedItemCodenames
            : element.value;
        return itemsInElement.includes(codename);
    }
})
    .reduce((accumulator, current) => accumulator || current, false);
//# sourceMappingURL=getRootCodenamesOfItem.js.map