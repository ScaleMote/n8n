import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import type { AnclapResources } from './resources';
import { resources } from './resources';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const operation = this.getNodeParameter('operation', 0);
	const resource = this.getNodeParameter('resource', 0) as AnclapResources;
	const anclap = { resource, operation };
	const items = this.getInputData();
	const output: IDataObject[] = [];
	let response;

	for (const item of items) {
		if (item.json.operation) {
			output.push(item);
		}
	}

	try {
		response = await resources[anclap.resource].operations[anclap.operation].execute.call(this);
		output.push(response as IDataObject);
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}

	return [this.helpers.returnJsonArray(output)];
}
