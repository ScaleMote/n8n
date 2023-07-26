import { INodeProperties } from 'n8n-workflow';
import * as manageSellOffer from './manageSellOffer';
import * as manageBuyOffer from './manageBuyOffer';
import * as createPassiveSellOffer from './createPassiveSellOffer';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'manageSellOffer',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['offers'],
			},
		},
		options: [
			{
				name: 'Manage Sell Offer',
				value: 'manageSellOffer',
				description: 'Creates, updates, or deletes an offer',
				action: 'Manage sell offer',
			},
			{
				name: 'Manage Buy Offer',
				value: 'manageBuyOffer',
				description: 'Creates, updates, or deletes an offer',
				action: 'Manage buy offer',
			},
			{
				name: 'Create Passive Sell Offer',
				value: 'createPassiveSellOffer',
				description:
					'Creates an offer that does not take another offer of equal price when created',
				action: 'Create passive sell offer',
			},
		],
	},
	...manageSellOffer.description,
	...manageBuyOffer.description,
	...createPassiveSellOffer.description,
];

export default description;
