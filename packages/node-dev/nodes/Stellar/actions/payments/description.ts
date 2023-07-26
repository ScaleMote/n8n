import { INodeProperties } from 'n8n-workflow';
import * as makePayment from './makePayment';
import * as pathPaymentStrictSend from './pathPaymentStrictSend';
import * as pathPaymentStrictReceive from './pathPaymentStrictReceive';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'makePayment',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['payments'],
			},
		},
		options: [
			{
				name: 'Make Payment',
				value: 'makePayment',
				description: 'Sends an specific asset to a destination account',
				action: 'Make payment',
			},
			{
				name: 'Path Payment Strict Send',
				value: 'pathPaymentStrictSend',
				description:
					'Sends an amount in a specific asset to a destination account through a path of offer',
				action: 'Make path payment strict send',
			},
			{
				name: 'Path Payment Strict Receive',
				value: 'pathPaymentStrictReceive',
				description:
					'Sends an amount in a specific asset to a destination account through a path of offer',
				action: 'Make path payment strict  receive',
			},
		],
	},
	...makePayment.description,
	...pathPaymentStrictSend.description,
	...pathPaymentStrictReceive.description,
];

export default description;
