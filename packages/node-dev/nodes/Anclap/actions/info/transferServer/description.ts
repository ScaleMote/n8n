import { INodeProperties } from 'n8n-workflow';

export const transferServerDescription: INodeProperties[] = [
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		required: true,
		options: [
			{
				name: 'SEP24',
				value: 'sep24',
			},
			{
				name: 'SEP6',
				value: 'sep6',
			},
		],
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transferServer'],
			},
		},
		default: 'sep24',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transferServer'],
			},
		},
		default: false,
	},
	{
		displayName: 'Language',
		name: 'lang',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transferServer'],
			},
		},
		default: '',
		placeholder: '',
		description:
			'Defaults to EN if not specified or if the specified language is not supported. Language code specified using RFC 4646. error fields and other human readable messages in the response should be in this language.',
	},
];
