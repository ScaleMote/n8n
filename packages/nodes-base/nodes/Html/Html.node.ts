import cheerio from 'cheerio';
import type {
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { placeholder } from './placeholder';
import { getResolvables, getValue } from './utils';
import type { IValueData } from './types';

export class Html implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'HTML',
		name: 'html',
		icon: 'file:html.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: 'Work with HTML',
		defaults: {
			name: 'HTML',
		},
		inputs: ['main'],
		outputs: ['main'],
		parameterPane: 'wide',
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Generate HTML Template',
						value: 'generateHtmlTemplate',
						action: 'Generate HTML template',
					},
					{
						name: 'Extract HTML Content',
						value: 'extractHtmlContent',
						action: 'Extract HTML Content',
					},
				],
				default: 'generateHtmlTemplate',
			},
			{
				displayName: 'HTML Template',
				name: 'html',
				typeOptions: {
					editor: 'htmlEditor',
				},
				type: 'string',
				default: placeholder,
				noDataExpression: true,
				description: 'HTML template to render',
				displayOptions: {
					show: {
						operation: ['generateHtmlTemplate'],
					},
				},
			},
			{
				displayName:
					'<b>Tips</b>: Type ctrl+space for completions. Use <code>{{ }}</code> for expressions and <code>&lt;style&gt;</code> tags for CSS. JS in <code>&lt;script&gt;</code> tags is included but not executed in n8n.',
				name: 'notice',
				type: 'notice',
				default: '',
				displayOptions: {
					show: {
						operation: ['generateHtmlTemplate'],
					},
				},
			},
			{
				displayName: 'Source Data',
				name: 'sourceData',
				type: 'options',
				options: [
					{
						name: 'Binary',
						value: 'binary',
					},
					{
						name: 'JSON',
						value: 'json',
					},
				],
				default: 'json',
				description: 'If HTML should be read from binary or JSON data',
				displayOptions: {
					show: {
						operation: ['extractHtmlContent'],
					},
				},
			},
			{
				displayName: 'Binary Property',
				name: 'dataPropertyName',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['extractHtmlContent'],
						sourceData: ['binary'],
					},
				},
				default: 'data',
				required: true,
				description:
					'Name of the binary property in which the HTML to extract the data from can be found',
			},
			{
				displayName: 'JSON Property',
				name: 'dataPropertyName',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['extractHtmlContent'],
						sourceData: ['json'],
					},
				},
				default: 'data',
				required: true,
				description:
					'Name of the JSON property in which the HTML to extract the data from can be found. The property can either contain a string or an array of strings.',
			},
			{
				displayName: 'Extraction Values',
				name: 'extractionValues',
				placeholder: 'Add Value',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				displayOptions: {
					show: {
						operation: ['extractHtmlContent'],
					},
				},
				default: {},
				options: [
					{
						name: 'values',
						displayName: 'Values',
						values: [
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								default: '',
								description: 'The key under which the extracted value should be saved',
							},
							{
								displayName: 'CSS Selector',
								name: 'cssSelector',
								type: 'string',
								default: '',
								placeholder: '.price',
								description: 'The CSS selector to use',
							},
							{
								displayName: 'Return Value',
								name: 'returnValue',
								type: 'options',
								options: [
									{
										name: 'Attribute',
										value: 'attribute',
										description: 'Get an attribute value like "class" from an element',
									},
									{
										name: 'HTML',
										value: 'html',
										description: 'Get the HTML the element contains',
									},
									{
										name: 'Text',
										value: 'text',
										description: 'Get only the text content of the element',
									},
									{
										name: 'Value',
										value: 'value',
										description: 'Get value of an input, select or textarea',
									},
								],
								default: 'text',
								description: 'What kind of data should be returned',
							},
							{
								displayName: 'Attribute',
								name: 'attribute',
								type: 'string',
								displayOptions: {
									show: {
										returnValue: ['attribute'],
									},
								},
								default: '',
								placeholder: 'class',
								description: 'The name of the attribute to return the value off',
							},
							{
								displayName: 'Return Array',
								name: 'returnArray',
								type: 'boolean',
								default: false,
								description:
									'Whether to return the values as an array so if multiple ones get found they also get returned separately. If not set all will be returned as a single string.',
							},
						],
					},
				],
			},

			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				displayOptions: {
					show: {
						operation: ['extractHtmlContent'],
					},
				},
				options: [
					{
						displayName: 'Trim Values',
						name: 'trimValues',
						type: 'boolean',
						default: true,
						description:
							'Whether to remove automatically all spaces and newlines from the beginning and end of the values',
					},
				],
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let item: INodeExecutionData;
		const returnData: INodeExecutionData[] = [];
		const operation = this.getNodeParameter('operation', 0);

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				if (operation === 'generateHtmlTemplate') {
					// ----------------------------------
					//       generateHtmlTemplate
					// ----------------------------------

					let html = this.getNodeParameter('html', itemIndex) as string;

					for (const resolvable of getResolvables(html)) {
						html = html.replace(
							resolvable,
							this.evaluateExpression(resolvable, itemIndex) as string,
						);
					}

					const result = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ html }),
						{
							itemData: { item: itemIndex },
						},
					);

					returnData.push(...result);
				} else if (operation === 'extractHtmlContent') {
					// ----------------------------------
					//         extractHtmlContent
					// ----------------------------------

					const dataPropertyName = this.getNodeParameter('dataPropertyName', itemIndex);
					const extractionValues = this.getNodeParameter(
						'extractionValues',
						itemIndex,
					) as IDataObject;
					const options = this.getNodeParameter('options', itemIndex, {});
					const sourceData = this.getNodeParameter('sourceData', itemIndex) as string;

					item = items[itemIndex];

					let htmlArray: string[] | string = [];
					if (sourceData === 'json') {
						if (item.json[dataPropertyName] === undefined) {
							throw new NodeOperationError(
								this.getNode(),
								`No property named "${dataPropertyName}" exists!`,
								{ itemIndex },
							);
						}
						htmlArray = item.json[dataPropertyName] as string;
					} else {
						if (item.binary === undefined) {
							throw new NodeOperationError(
								this.getNode(),
								'No item does not contain binary data!',
								{
									itemIndex,
								},
							);
						}
						if (item.binary[dataPropertyName] === undefined) {
							throw new NodeOperationError(
								this.getNode(),
								`No property named "${dataPropertyName}" exists!`,
								{ itemIndex },
							);
						}

						const binaryDataBuffer = await this.helpers.getBinaryDataBuffer(
							itemIndex,
							dataPropertyName,
						);
						htmlArray = binaryDataBuffer.toString('utf-8');
					}

					// Convert it always to array that it works with a string or an array of strings
					if (!Array.isArray(htmlArray)) {
						htmlArray = [htmlArray];
					}

					for (const html of htmlArray as string[]) {
						const $ = cheerio.load(html);

						const newItem: INodeExecutionData = {
							json: {},
							pairedItem: {
								item: itemIndex,
							},
						};

						// Iterate over all the defined values which should be extracted
						let htmlElement;
						for (const valueData of extractionValues.values as IValueData[]) {
							htmlElement = $(valueData.cssSelector);

							if (valueData.returnArray) {
								// An array should be returned so iterate over one
								// value at a time
								newItem.json[valueData.key] = [];
								htmlElement.each((i, el) => {
									(newItem.json[valueData.key] as Array<string | undefined>).push(
										getValue($(el), valueData, options),
									);
								});
							} else {
								// One single value should be returned
								newItem.json[valueData.key] = getValue(htmlElement, valueData, options);
							}
						}
						returnData.push(newItem);
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error.message,
						},
						pairedItem: {
							item: itemIndex,
						},
					});
					continue;
				}

				throw error;
			}
		}

		return this.prepareOutputData(returnData);
	}
}
