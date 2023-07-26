import AnclapCredentials from '../../../transport/AnclapCredentials';
import { IExecuteFunctions } from 'n8n-workflow';
import SEP38 from '../../../transport/SEP38';
import IPricesRequest from '../../../transport/requests/PricesRequest/IPricesRequest';
import { PricesRequest } from '../../../transport/requests/PricesRequest/PricesRequest';

export async function getPrices(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sellAsset = this.getNodeParameter('sellAsset', 0) as string;
	const sellAmount = this.getNodeParameter('sellAmount', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const sep38 = new SEP38(anclapCredentials, token);

	let pricesRequest: IPricesRequest;

	if (showOptionalValues) {
		const sellDeliveryMethod = this.getNodeParameter('sellDeliveryMethod', 0) as string;
		const buyDeliveryMethod = this.getNodeParameter('buyDeliveryMethod', 0) as string;
		const countryCode = this.getNodeParameter('countryCode', 0) as string;

		pricesRequest = new PricesRequest({
			sellAsset,
			sellAmount,
			sellDeliveryMethod,
			buyDeliveryMethod,
			countryCode,
		});
	} else {
		pricesRequest = new PricesRequest({ sellAsset, sellAmount });
	}

	return await sep38.getPrices(pricesRequest);
}
