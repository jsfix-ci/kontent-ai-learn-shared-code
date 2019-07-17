interface IConfiguration {
    readonly azureAccountName: string;
    readonly azureStorageKey: string;
    readonly searchAdminApiKey: string;
    readonly searchAppId: string;
    readonly searchIndexName: string;
    readonly kenticoProjectId: string;
    readonly securedApiKey: string;
    readonly clearIndexUrl: string;
}

export class Configuration {
    public static keys = {} as IConfiguration;

    public static set = (isTest: boolean, section?: string) => {
        Configuration.keys = {
            azureAccountName: Configuration.getEnvironmentVariable('Azure.StorageAccountName'),
            azureStorageKey: Configuration.getEnvironmentVariable('Azure.StorageKey'),
            clearIndexUrl: Configuration.getClearIndexUrl(isTest, section),
            kenticoProjectId: Configuration.getEnvironmentVariable('KC.ProjectId', isTest),
            searchAdminApiKey: Configuration.getEnvironmentVariable('Search.ApiKey', isTest),
            searchAppId: Configuration.getEnvironmentVariable('Search.AppId', isTest),
            searchIndexName: Configuration.getEnvironmentVariable('Search.IndexName', isTest),
            securedApiKey: Configuration.getEnvironmentVariable('KC.SecuredApiKey', isTest),
        }
    };

    private static getEnvironmentVariable = (variableName: string, isTest?: boolean): string =>
        process.env[`${variableName}${isTest ? '.Test' : ''}`] || '';

    private static getClearIndexUrl(isTest, section) {
        const isTestQuery = isTest
            ? '&isTest=enabled'
            : '';

        return `${process.env['Azure.ClearIndexUrl']}${isTestQuery}&section=${section}`;
    }
}
