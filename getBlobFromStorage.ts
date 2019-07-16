import {
    Aborter,
    BlobURL,
    SharedKeyCredential,
    StorageURL,
} from '@azure/storage-blob';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

export const getBlobFromStorage = async <BlobData>(
    url: string,
    azureAccountName: string,
    azureStorageKey: string,
): Promise<BlobData> => {
    const sharedKeyCredential = new SharedKeyCredential(azureAccountName, azureStorageKey);
    const pipeline = StorageURL.newPipeline(sharedKeyCredential);
    const blobUrl = new BlobURL(url, pipeline);

    const blobResponse = await blobUrl.download(Aborter.none, 0);
    const blobContent = await streamToString(blobResponse.readableStreamBody);

    return JSON.parse(blobContent);
};

const streamToString = async (readableStream: JQueryStyleEventEmitter): Promise<string> =>
    new Promise((resolve, reject) => {
        const chunks: string[] = [];
        readableStream.on('data', (data: any) => {
            chunks.push(data.toString());
        });
        readableStream.on('end', () => {
            resolve(chunks.join(''));
        });
        readableStream.on('error', reject);
    });
