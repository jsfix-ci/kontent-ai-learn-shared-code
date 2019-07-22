export interface IKenticoCloudError extends Error {
    readonly errorCode: number,
}

export interface IWebhookContentItem {
    readonly codename: string,
    readonly language: string;
    readonly type: string,
}
