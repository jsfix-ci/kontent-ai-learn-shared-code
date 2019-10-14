import { ContentItem, Elements } from 'kentico-cloud-delivery';

import { IWebhookContentItem } from '../contracts/kontent';

interface IContext {
    readonly visitedItems: string[],
    readonly rootItemCodenames: string[],
    readonly newItemsToVisit: ContentItem[],
    readonly allItems: ContentItem[],
}

export const getRootCodenamesOfItem = (
    item: IWebhookContentItem,
    allItems: ContentItem[],
    rootItemTypes: string[],
): string[] =>
    rootItemTypes.includes(item.type)
        ? [item.codename]
        : getRootParents(item.codename, allItems, rootItemTypes);

const getRootParents = (codename: string, allItems: ContentItem[], rootItemTypes: string[]): string[] => {
    let itemsToVisit: ContentItem[] = getDirectParents(codename, allItems);
    const visitedItems: string[] = [];
    const rootItemCodenames: string[] = [];

    while (itemsToVisit.length > 0) {
        const newItemsToVisit: ContentItem[] = [];

        itemsToVisit.forEach((item) => processItem(
            item,
            rootItemTypes,
            {
                allItems,
                newItemsToVisit,
                rootItemCodenames,
                visitedItems,
            }));

        itemsToVisit = newItemsToVisit;
    }

    return rootItemCodenames;
};

const processItem = (itemToProcess: ContentItem, rootItemTypes: string[], context: IContext): void => {
    const itemCodename: string = itemToProcess.system.codename;

    if (context.visitedItems.includes(itemCodename)) {
        return;
    }
    context.visitedItems.push(itemCodename);

    if (rootItemTypes.includes(itemToProcess.system.type)) {
        context.rootItemCodenames.push(itemCodename);
    } else {
        const parents = getDirectParents(itemCodename, context.allItems);
        parents.forEach((item) => context.newItemsToVisit.push(item));
    }
};

const getDirectParents = (codename: string, allItems: ContentItem[]): ContentItem[] =>
    allItems.filter((item) => isInAnyElement(item, codename));

const isInAnyElement = (
    parentItem: ContentItem,
    codename: string): boolean =>
    Object
        .keys(parentItem)
        .map((key) => {
            const element = parentItem[key];
            if (element instanceof Elements.RichTextElement) {
                return element.linkedItemCodenames.includes(codename);
            }

            if (element instanceof Elements.LinkedItemsElement) {
                return element.itemCodenames.includes(codename);
            }

            return false;
        })
        .reduce((accumulator, current) => current === true ? true : accumulator, false);
