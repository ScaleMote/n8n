import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import TransferServerRequest from '../../../transport/requests/TransferServerRequest/TransferServerRequest';
import getProtocolProvider from '../../../transport/providers/protocolProvider';
import { Protocol } from '../../../transport/enums/protocol';

export async function getTransferServer(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const protocol = this.getNodeParameter('protocol', 0) as Protocol;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	let transferServerRequest: TransferServerRequest = {};
	if (showOptionalValues) {
		const lang = this?.getNodeParameter('lang', 0) as string;

		transferServerRequest = new TransferServerRequest({ lang });
	}
	const transferServerProvider = getProtocolProvider(anclapCredentials, '', protocol);

	return transferServerRequest
		? await transferServerProvider.getInfo(transferServerRequest)
		: await transferServerProvider.getInfo();
}
