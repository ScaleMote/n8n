import { INodeProperties } from 'n8n-workflow';

export const quoteDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['quote'],
			},
		},
		default: '',
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		required: true,
		options: [
			{
				name: 'SEP38',
				value: 'sep38',
			},
		],
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['quote'],
			},
		},
		default: 'sep38',
	},
	{
		displayName: 'Quote ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['quote'],
			},
		},
		default: '',
		placeholder: 'de762cda-a193-4961-861e-57b31fed6eb3',
		description:
			'The unique identifier for the quote. Same as the id returned in the POST /quote response.',
	},
];
