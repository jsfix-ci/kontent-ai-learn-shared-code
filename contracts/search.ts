import { Operation } from '../reference/preprocessedModels';

export interface IRecord {
    readonly content: string;
    readonly id: string;
    readonly title: string;
    readonly heading: string;
    readonly codename: string;
    readonly objectID: string;
    readonly section: string;
    readonly order?: string;
    readonly platforms?: string[];
}

export interface IItemRecordsBlob {
    readonly codename: string;
    readonly id: string;
    readonly operation: Operation;
    readonly itemRecords: IRecord[];
}
