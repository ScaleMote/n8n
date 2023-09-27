import type { INodeProperties } from 'n8n-workflow';
import { transactionsDescription } from './transactions/description';
import { transactionDescription } from './transaction/description';
import { feeDescription } from './fee/description';
import { transferServerDescription } from './transferServer/description';
import { quoteServerDescription } from './quoteServer/description';
import { pricesDescription } from './prices/description';
import { priceDescription } from './price/description';
import { firmQuoteDescription } from './firmQuote/description';
import { quoteDescription } from './quote/description';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'transactions',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['info'],
			},
		},
		options: [
			{
				name: 'Get Fee Amount',
				value: 'fee',
				action: 'Get Fee Amount',
			},
			{
				name: 'Get Firm Quote',
				value: 'firmQuote',
				action: 'Get Firm Quote',
			},
			{
				name: 'Get Indicative Price',
				value: 'price',
				action: 'Get Indicative Price',
			},
			{
				name: 'Get Indicative Prices',
				value: 'prices',
				action: 'Get Indicative Prices',
			},
			{
				name: 'Get Quote by ID',
				value: 'quote',
				action: 'Get Quote by ID',
			},
			{
				name: 'Get Quote Server Info',
				value: 'quoteServer',
				action: 'Get Quote Server Info',
			},
			{
				name: 'Get Transaction By ID',
				value: 'transaction',
				action: 'Get transaction by ID',
			},
			{
				name: 'Get Transactions',
				value: 'transactions',
				action: 'Get transactions',
			},
			{
				name: 'Get Transfer Server Info',
				value: 'transferServer',
				action: 'Get Transfer Server Info',
			},
		],
	},
	...transactionsDescription,
	...transactionDescription,
	...feeDescription,
	...transferServerDescription,
	...quoteServerDescription,
	...pricesDescription,
	...priceDescription,
	...firmQuoteDescription,
	...quoteDescription,
];
