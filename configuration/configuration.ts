interface IConfiguration {
    readonly azureAccountName: string;
    readonly azureContainerName: string;
    readonly azureStorageKey: string;
    readonly searchAdminApiKey: string;
    readonly searchAppId: string;
    readonly searchIndexName: string;
    readonly kenticoProjectId: string;
    readonly securedApiKey: string;
    readonly previewApiKey: string;
    readonly docsWebsiteUrl: string;
}

export class Configuration {
    public static keys = {} as IConfiguration;

    public static set = (isTest: boolean) => {
        Configuration.keys = {
            azureAccountName: Configuration.getEnvironmentVariable('Azure.StorageAccountName'),
            azureContainerName: Configuration.getEnvironmentVariable('Azure.ContainerName', isTest),
            azureStorageKey: Configuration.getEnvironmentVariable('Azure.StorageKey'),
            docsWebsiteUrl: Configuration.getEnvironmentVariable('DocsWebsiteUrl', isTest),
            kenticoProjectId: Configuration.getEnvironmentVariable('KC.ProjectId', isTest),
            previewApiKey: Configuration.getEnvironmentVariable('KC.PreviewApiKey', isTest),
            searchAdminApiKey: Configuration.getEnvironmentVariable('Search.ApiKey', isTest),
            searchAppId: Configuration.getEnvironmentVariable('Search.AppId', isTest),
            searchIndexName: Configuration.getEnvironmentVariable('Search.IndexName', isTest),
            securedApiKey: Configuration.getEnvironmentVariable('KC.SecuredApiKey', isTest),
        }
    };

    public static getClearIndexUrl = (isTest: boolean, section: string): string => {
        const isTestQuery = isTest
            ? '&isTest=enabled'
            : '';

        return `${process.env['Azure.ClearIndexUrl']}${isTestQuery}&section=${section}`;
    };

    private static getEnvironmentVariable = (variableName: string, isTest?: boolean): string =>
        process.env[`${variableName}${isTest ? '.Test' : ''}`] || '';
}
