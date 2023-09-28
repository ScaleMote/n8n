import { AnclapCredentials } from '../../../transport/AnclapCredentials';
import type { IExecuteFunctions } from 'n8n-workflow';
import { SEP38 } from '../../../transport/SEP38';

export async function getQuoteServer(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));

	const sep38 = new SEP38(anclapCredentials, '');

	return sep38.getInfo();
}
