import { IWebhookContentItem } from './kontent';

export type IWebhookEventGridEvent = IEventGridEvent<IEventGridWebhookData>;
export type IBlobEventGridEvent = IEventGridEvent<IEventGridBlobData>;
export type INotificationEventGridEvent = IEventGridEvent<IEventGridNotificationData>;

export interface IEventGridEvent<EventGridEventData> {
    readonly id: string;
    readonly topic?: string;
    readonly subject: string;
    readonly data: EventGridEventData;
    readonly eventType: string;
    readonly eventTime: Date;
    readonly metadataVersion?: string;
    readonly dataVersion: string;
}

export interface IEventGridWebhookData {
    readonly test: string,
    readonly webhook: {
        readonly items: IWebhookContentItem[],
        readonly taxonomies: unknown,
    }
}

export interface IEventGridBlobData {
    readonly url: string,
}

export interface IEventGridNotificationData {
    readonly activityTitle: string,
    readonly mode: string,
    readonly text: string,
}
