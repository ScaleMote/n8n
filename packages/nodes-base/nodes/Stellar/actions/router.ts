import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import type { Stellar } from '../actions/entities/IStellarNode';
import { resources } from './resources';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const operation = this.getNodeParameter('operation', 0);
	const resource = this.getNodeParameter('resource', 0);
	const stellar = { resource, operation } as Stellar;
	const items = this.getInputData();
	const nodeOutput: IDataObject[] = [];
	let response;

	for (const item of items) {
		if (stellar.resource != 'transaction' && item.json.operation) {
			nodeOutput.push(item);
		}
	}

	try {
		response = await resources[stellar.resource].operations[stellar.operation].execute.call(this);
		nodeOutput.push(response as IDataObject);
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}

	return [this.helpers.returnJsonArray(nodeOutput)];
}
