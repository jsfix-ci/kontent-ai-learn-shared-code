export enum ReferenceOperation {
    Initialize = 'INITIALIZE',
    Update = 'UPDATE',
    Preview = 'PREVIEW',
}

export interface IPreprocessedData {
    readonly zapiSpecificationCodename: string,
    readonly items: IPreprocessedItems,
    readonly operation: ReferenceOperation,
}

export interface IPreprocessedItems {
    [keys: string]: object;
}

export interface ISystemAttributes {
    readonly id: string,
    readonly codename: string;
    readonly contentType: string,
}

export interface IZapiSpecification extends ISystemAttributes {
    readonly apiReference: string[],
    readonly categories: string[],
    readonly contact: string[],
    readonly description: string,
    readonly license: string[],
    readonly security: string[],
    readonly servers: string,
    readonly termsOfService: string,
    readonly title: string,
    readonly url: string,
    readonly version: string,
}

export interface ISecurityScheme extends ISystemAttributes {
    readonly apiKeyLocation: string[],
    readonly apiKeyName: string,
    readonly apiReference: string[],
    readonly bearerFormat: string,
    readonly description: string,
    readonly name: string,
    readonly scheme: string,
    readonly type: string[],
}

export interface ILicense extends ISystemAttributes {
    readonly apiReference: string[],
    readonly name: string,
    readonly url: string,
}

export interface IContact extends ISystemAttributes {
    readonly apiReference: string[],
    readonly email: string,
    readonly name: string,
    readonly url: string,
}

export interface ICategory extends ISystemAttributes {
    readonly apiReference: string[],
    readonly description: string,
    readonly name: string,
    readonly pathOperations: string[],
    readonly url: string,
}

export interface IPathOperation extends ISystemAttributes {
    readonly apiReference: string[],
    readonly codeSamples: string[],
    readonly deprecated: string[],
    readonly description: string,
    readonly parameters: string[],
    readonly path: string,
    readonly pathOperation: string[],
    readonly requestBody: string,
    readonly responses: string,
    readonly name: string,
    readonly url: string,
}

export interface IParameter extends ISystemAttributes {
    readonly apiReference: string[],
    readonly deprecated: string[],
    readonly description: string,
    readonly example: string,
    readonly explode: string[],
    readonly location: string[],
    readonly name: string,
    readonly required: string[],
    readonly schema: string[],
    readonly style: string[],
}

export interface IRequestBody extends ISystemAttributes {
    readonly description: string,
    readonly example: string,
    readonly mediaType: string[],
    readonly required: string[],
    readonly schema: string,
}

export interface IResponse extends ISystemAttributes {
    readonly apiReference: string[],
    readonly description: string,
    readonly example: string,
    readonly headers: string[],
    readonly httpStatus: string[],
    readonly mediaType: string[],
    readonly schema: string,
}

export interface IServer extends ISystemAttributes {
    readonly description: string,
    readonly url: string,
}

export interface IImage extends ISystemAttributes {
    readonly border: string[],
    readonly zoomable: string[],
    readonly description: string,
    readonly imageWidth: string[],
    readonly url: string,
    readonly asset: IAsset,
}

export interface IAsset {
    readonly name: string;
    readonly type: string;
    readonly size: number;
    readonly description?: string;
    readonly url: string;
    readonly width?: number;
    readonly height?: number;
}

export interface ICallout extends ISystemAttributes {
    readonly content: string,
    readonly type: string[],
}

export interface ICodeSample extends ISystemAttributes {
    readonly code: string,
    readonly platform: string[],
    readonly programmingLanguage: string[],
}

export interface ICodeSamples extends ISystemAttributes {
    readonly codeSamples: string[],
}

export interface IContentChunk extends ISystemAttributes {
    readonly content: string,
    readonly platform: string[],
}

export interface ISchemaElements {
    readonly name: string,
    readonly description: string,
    readonly example: string,
}

export interface ISchemaObjectPropertyElements {
    readonly nullable: string[],
    readonly readonly: string[],
    readonly writeonly: string[],
}

export interface ISchemaAllOf extends ISystemAttributes, ISchemaElements {
    readonly apiReference: string[],
    readonly schemas: string,
}

export interface ISchemaAnyOf extends ISystemAttributes, ISchemaElements, ISchemaObjectPropertyElements {
    readonly apiReference: string[],
    readonly schemas: string[],
}

export interface ISchemaArray extends ISystemAttributes, ISchemaElements {
    readonly apiReference: string[],
    readonly items: string,
    readonly uniqueItems: string[],
}

export interface ISchemaBoolean extends ISystemAttributes, ISchemaElements, ISchemaObjectPropertyElements {
    readonly apiReference: string[],
}

export interface ISchemaInteger extends ISystemAttributes, ISchemaElements, ISchemaObjectPropertyElements {
    readonly acceptedValues: string,
    readonly apiReference: string[],
    readonly defaultValue: number,
    readonly format: string[],
    readonly minimum: number,
    readonly maximum: number,
}

export interface ISchemaObject extends ISystemAttributes, ISchemaElements {
    readonly apiReference: string[],
    readonly required: string,
    readonly properties: string,
    readonly additionalProperties: string,
}

export interface ISchemaOneOf extends ISystemAttributes, ISchemaElements {
    readonly apiReference: string[],
    readonly schemas: string[],
    readonly discriminator: string,
}

export interface ISchemaString extends ISystemAttributes, ISchemaElements, ISchemaObjectPropertyElements {
    readonly acceptedValues: string,
    readonly apiReference: string[],
    readonly defaultValue: string,
    readonly format: string,
    readonly maxLength: number,
    readonly minLength: number,
}

export interface ISchemaNumber extends ISystemAttributes, ISchemaElements, ISchemaObjectPropertyElements {
    readonly acceptedValues: string,
    readonly apiReference: string[],
    readonly format: string[],
    readonly maximum: number,
    readonly minimum: number,
}

export interface IDiscriminator extends ISystemAttributes {
    readonly propertyName: string,
    readonly mapping: string,
}

export interface IDiscriminatorMapItem extends ISystemAttributes {
    readonly discriminatorValue: string,
    readonly schema: string[],
}

export interface IPropertyReferencingASchema extends ISystemAttributes {
    readonly name: string,
    readonly schema: string[],
}
