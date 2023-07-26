import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function manageData(this: IExecuteFunctions) {
	try {
		const name = this.getNodeParameter('entryName', 0) as string;
		const entryValue = this.getNodeParameter('entryValue', 0) as string;
		let value = entryValue ? entryValue : null;

		const manageDataOperation = Operation.manageData({ name, value }).toXDR('base64');

		return { operation: manageDataOperation };
	} catch (error) {
		throw new Error(error);
	}
}
