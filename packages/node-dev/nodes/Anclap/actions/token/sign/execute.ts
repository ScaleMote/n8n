import { IExecuteFunctions } from 'n8n-workflow';

import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP10 from '../../../transport/SEP10';

export async function sign(this: IExecuteFunctions) {
	const challengeXdr = this.getNodeParameter('challengeXdr', 0) as string;

	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const sep10 = new SEP10(anclapCredentials);

	return await sep10.signChallenge(challengeXdr);
}
