import { INodeProperties } from 'n8n-workflow';

export const quoteServerDescription: INodeProperties[] = [
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
				operation: ['quoteServer'],
			},
		},
		default: 'sep38',
	},
];
