export interface IKenticoKontentError extends Error {
    readonly errorCode: number,
}

export interface IWebhookContentItem {
    readonly codename: string,
    readonly id: string;
    readonly language: string;
    readonly type: string,
}
