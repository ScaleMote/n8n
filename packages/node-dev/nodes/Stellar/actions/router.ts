import { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { Stellar } from '../actions/entities/IStellarNode';
import resources from './resources';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const operation = this.getNodeParameter('operation', 0);
	const resource = this.getNodeParameter('resource', 0) as string;
	const stellar = { resource, operation } as Stellar;
	const items = this.getInputData();
	let nodeOutput: IDataObject[] = [];
	let response;

	for (const item of items) {
		if (stellar.resource != 'transaction' && item.json.operation) {
			nodeOutput.push(item);
		}
	}

	try {
		response = await resources[stellar.resource].operations[stellar.operation].execute.call(this);
		nodeOutput.push(response as IDataObject);
	} catch (error) {
		throw new Error(error);
	}

	return [this.helpers.returnJsonArray(nodeOutput)];
}
