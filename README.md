![master](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/actions/workflows/npm-publish.yml/badge.svg)

# Kontent.ai Learn - Shared code

This repository contains shared code from all of other Kontent.ai Learn repositories.

## Publish to NPM

This repository is published to NPM as the [kontent-ai-learn-shared-code](https://www.npmjs.com/package/kontent-ai-learn-shared-code) package.

To publish a new version of the kontent-ai-learn-shared-code library to the NPM registry:

1. Increase the main `version` in `project.json`.
2. Push your change to the `master` branch.

The [NPM Publish GitHub Action](https://github.com/marketplace/actions/npm-publish) will take care of the rest. If you push code changes without increasing the `version` in `project.json`, the new code will not be published to NPM.

## Shared functions

### Azure storage

[getBlobContainerName](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/azureStorage/getBlobContainerName.ts) - Returns name of a blob container specified in an [event grid event](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/contracts/eventGrid.ts#L26).

[getBlobFromStorage](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/azureStorage/getBlobFromStorage.ts) - Async function that returns content of an Azure blob as a JSON object.

### Kontent utils

[getRootCodenamesOfItem](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/kontentUtils/getRootCodenamesOfItem.ts) - Traverses structured content from Kontent and returns codenames of found root items. Requires:

* `item` - data about the item where the traversal starts
* `allItems` - items from the Kontent.ai project
* `rootItemTypes` - types of the root content items

## Shared classes

### Configuration

Contains [configuration settings](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/configuration/configuration.ts) that are shared between the other Kontent.ai Learn repositories:

* `azureAccountName`
* `azureContainerName`
* `azureStorageKey`
* `searchAdminApiKey`
* `searchAppId`
* `searchIndexName`
* `kenticoProjectId`
* `securedApiKey`
* `previewApiKey`
* `docsWebsiteUrl`

## Shared interfaces

### Contracts

[Event Grid](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/contracts/eventGrid.ts) - Specifies an [Azure Event Grid schema](https://docs.microsoft.com/en-us/azure/event-grid/event-schema), along with the options for passed data in the event's `data` property.

[Kontent](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/contracts/kontent.ts) - Contains an `IWebhookContentItem` that specifies data sent in a webhook reacting to a change in published content.

[Search](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/contracts/search.ts) - Contains a contract for records sent to [Index Sync](https://github.com/Kontent-ai-Learn/kontent-ai-learn-index-sync) service.

### Reference

[Preprocessed models](https://github.com/Kontent-ai-Learn/kontent-ai-learn-shared-code/blob/master/reference/preprocessedModels.ts) - Interfaces of preprocessed data models from Kontent. Those models are based on an [OpenAPI Specification 3.0.2](https://github.com/OAI/OpenAPI-Specification).

## How To Contribute

Feel free to open a new issue where you describe your proposed changes, or even create a new pull request from your branch with proposed changes.

## License

All the source codes are published under MIT license.
