import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import * as token from './actions/token';
import * as transactions from './actions/transactions';
import * as info from './actions/info';
import * as kyc from './actions/kyc';
import * as utils from './actions/utils';
import { router } from './actions/router';

export class Anclap implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Anclap',
		name: 'anclap',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:anclap.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: 'Anclap Node',
		defaults: {
			name: 'Anclap',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'anclapApi', required: true }],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				default: 'token',
				options: [
					{
						name: 'Token',
						value: 'token',
					},
					{
						name: 'Transaction',
						value: 'transactions',
					},
					{
						name: 'Info',
						value: 'info',
					},
					{
						name: 'KYC',
						value: 'kyc',
					},
					{
						name: 'Utils',
						value: 'utils',
					},
				],
				noDataExpression: true,
				required: true,
				description: 'Operation Type:',
			},
			...token.description,
			...transactions.description,
			...info.description,
			...kyc.description,
			...utils.description,
		],
	};
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return router.call(this);
	}
}
