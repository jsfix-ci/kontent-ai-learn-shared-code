export interface IRecord {
    readonly content: string;
    readonly id: string;
    readonly title: string;
    readonly heading: string;
    readonly codename: string;
    readonly objectID: string;
    readonly section: string;
    readonly apiSpecificationCodename?: string;
    readonly order?: string;
    readonly platforms?: string[];
    readonly urlFragment?: string;
}

export interface IItemRecordsBlob {
    readonly codename: string;
    readonly id: string;
    readonly initialize: boolean;
    readonly itemRecords: IRecord[];
}
