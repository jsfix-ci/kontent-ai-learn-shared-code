| [master](https://github.com/KenticoDocs/cloud-docs-open-api-provider/tree/master) | [develop](https://github.com/KenticoDocs/cloud-docs-open-api-provider/tree/develop) |
|:---:|:---:|
| [![Build Status](https://travis-ci.com/KenticoDocs/cloud-docs-shared-code.svg?branch=master)](https://travis-ci.com/KenticoDocs/cloud-docs-shared-code) [![codebeat badge](https://codebeat.co/badges/5e2e635c-23e4-4ba7-b9d0-822aa723f1d0)](https://codebeat.co/projects/github-com-kenticodocs-cloud-docs-shared-code-master) | [![Build Status](https://travis-ci.com/KenticoDocs/cloud-docs-shared-code.svg?branch=develop)](https://travis-ci.com/KenticoDocs/cloud-docs-shared-code) [![codebeat badge](https://codebeat.co/badges/8d1a5ca9-e848-4e37-b03e-46ae72b9443d)](https://codebeat.co/projects/github-com-kenticodocs-cloud-docs-shared-code-develop) |

# Kentico Cloud Documentation - Shared code

This repository contains shared code from all of other Kentico Cloud Docs repositories.

## Shared functions

### Azure storage

[getBlobContainerName](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/azureStorage/getBlobContainerName.ts) - Returns name of a blob container specified in an [event grid event](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/contracts/eventGrid.ts#L26).

[getBlobFromStorage](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/azureStorage/getBlobFromStorage.ts) - Async function that returns content of an Azure blob as a JSON object.

### Kentico Cloud utils

[getRootCodenamesOfItem](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/cloudUtils/getRootCodenamesOfItem.ts) - Traverses structured content from Kentico Cloud and returns codenames of found root items. Requires:
 * `item` - data about the item where the traversal starts
 * `allItems` - items from Kentico Cloud project
 * `rootItemTypes` - types of the root content items

## Shared classes

### Configuration

Contains [configuration settings](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/configuration/configuration.ts) that are shared between the other Kentico Cloud Docs repositories:

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

[Event Grid](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/contracts/eventGrid.ts) - Specifies an [Azure Event Grid schema](https://docs.microsoft.com/en-us/azure/event-grid/event-schema), along with the options for passed data in the event's `data` property.

[Kentico Cloud](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/contracts/kenticoCloud.ts) - Contains an `IWebhookContentItem` that specifies data sent in a webhook reacting to a change in published content.

[Search](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/contracts/search.ts) - Contains a contract for records sent to [IndexSync](https://github.com/KenticoDocs/cloud-docs-index-sync) service.

### Reference

[Preprocessed models](https://github.com/KenticoDocs/cloud-docs-shared-code/blob/master/reference/preprocessedModels.ts) - Interfaces of preprocessed data models from Kentico Cloud. Those models are based on an [OpenAPI Specification 3.0.2](https://github.com/OAI/OpenAPI-Specification).

## How To Contribute
Feel free to open a new issue where you describe your proposed changes, or even create a new pull request from your branch with proposed changes.

## Licence
All the source codes are published under MIT licence.
