import {
    ContentItem,
    ContentItemSystemAttributes,
    Elements,
    IContentItemConfig,
    IContentItemRawData,
} from 'kentico-cloud-delivery';

import { IWebhookContentItem } from '../contracts/kenticoCloud';
import { getRootCodenamesOfItem } from './getRootCodenamesOfItem';

const constructRichTextElement = (modularContent: string[]) => new Elements.RichTextElement({
    contentTypeSystem: null as any,
    propertyName: '',
    rawElement: {
        name: '',
        type: 'rich_text',
        value: '',
    },
}, modularContent, {
        images: [],
        links: [],
        resolveHtmlFunc: () => '',
    });

const constructLinkedItemsElement = (linkItemCodenames: string[]) => new Elements.LinkedItemsElement({
    contentTypeSystem: null as any,
    propertyName: '',
    rawElement: {
        name: '',
        type: 'rich_text',
        value: linkItemCodenames,
    },
}, []);

const constructSystemAttributes = (type: string, codename: string) => new ContentItemSystemAttributes({
    codename,
    id: '',
    language: '',
    lastModified: new Date(),
    name: '',
    sitemapLocations: [],
    type,
});

const constructDebugData: () => IContentItemRawData = () => {
    return {
        elements: {},
    }
};

const constructConfigData: () => IContentItemConfig = () => {
    return {
        propertyResolver: undefined,
        richTextResolver: undefined,
        urlSlugResolver: undefined,
    };
};

const rootItemType: string = 'root_item_codename';
const allItems: ContentItem[] = [{
    _config: constructConfigData(),
    _raw: constructDebugData(),
    content: constructRichTextElement([]),
    system: constructSystemAttributes('callout', 'hello_world'),
}, {
    _config: constructConfigData(),
    _raw: constructDebugData(),
    content: constructRichTextElement(['hello_world']),
    system: constructSystemAttributes('content_chunk', 'some_chunk'),
}, {
    _config: constructConfigData(),
    _raw: constructDebugData(),
    description: constructRichTextElement(['some_chunk']),
    system: constructSystemAttributes(rootItemType, 'content_management_api'),
}, {
    _config: constructConfigData(),
    _raw: constructDebugData(),
    description: constructRichTextElement(['hello_world']),
    system: constructSystemAttributes(rootItemType, 'delivery_api'),
}];

const allItemsWithCodeSamples: ContentItem[] = [{
    _config: constructConfigData(),
    _raw: constructDebugData(),
    code_samples: constructLinkedItemsElement(['hello_world']),
    system: constructSystemAttributes('code_samples', 'hello_world_samples'),
}, {
    _config: constructConfigData(),
    _raw: constructDebugData(),
    content: constructRichTextElement(['hello_world_samples']),
    system: constructSystemAttributes('content_chunk', 'code_sample_chunk'),
}, {
    _config: constructConfigData(),
    _raw: constructDebugData(),
    description: constructRichTextElement(['code_sample_chunk']),
    system: constructSystemAttributes(rootItemType, 'delivery_api'),
}];

describe('getRootCodenamesOfItem', () => {
    it('returns both root zapi specification items', () => {
        const item: IWebhookContentItem = {
            codename: 'hello_world',
            language: 'default',
            type: 'callout',
        };
        const expectedResult: string[] = ['delivery_api', 'content_management_api'];

        const actualResult = getRootCodenamesOfItem(item, allItems, [rootItemType]);

        expect(actualResult).toEqual(expectedResult);
    });

    it('returns root of a nested code_sample item', () => {
        const item: IWebhookContentItem = {
            codename: 'hello_world',
            language: 'default',
            type: 'code_sample',
        };
        const expectedResult: string[] = ['delivery_api'];

        const actualResult = getRootCodenamesOfItem(item, allItemsWithCodeSamples, [rootItemType]);

        expect(actualResult).toEqual(expectedResult);
    });

    it('returns an empty array when it finds no root items', () => {
        const item: IWebhookContentItem = {
            codename: 'some_codename',
            language: 'default',
            type: 'some_type',
        };
        const expectedResult: string[] = [];

        const actualResult = getRootCodenamesOfItem(item, allItemsWithCodeSamples, [rootItemType]);

        expect(actualResult).toEqual(expectedResult);
    });
});
