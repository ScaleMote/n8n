import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP10 from '../../../transport/SEP10';

export async function send(this: IExecuteFunctions) {
	const signedXdr = this.getNodeParameter('signedXdr', 0) as string;
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const sep10 = new SEP10(anclapCredentials);
	return await sep10.sendChallenge(signedXdr);
}
