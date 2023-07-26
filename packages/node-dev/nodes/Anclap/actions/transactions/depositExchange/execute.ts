import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP6 from '../../../transport/SEP6';
import DepositExchangeRequest from '../../../transport/requests/DepositRequest/DepositExchangeRequest';
import IDepositExchangeRequest from '../../../transport/requests/DepositRequest/IDepositExchangeRequest';

export async function depositExchange(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sourceAsset = this.getNodeParameter('sourceAsset', 0) as string;
	const destinationAsset = this.getNodeParameter('destinationAsset', 0) as string;
	const amount = this.getNodeParameter('amount', 0) as string;
	const type = this?.getNodeParameter('type', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const getSep6DepositExchangeInfo = async () => {
		const sep6 = new SEP6(anclapCredentials, token);
		let depositExchangeRequest: IDepositExchangeRequest;

		if (showOptionalValues) {
			const quoteId = this?.getNodeParameter('quoteId', 0) as string;
			const memoType = this?.getNodeParameter('memoType', 0) as string;
			const memo = this?.getNodeParameter('memo', 0) as string;
			const walletName = this?.getNodeParameter('walletName', 0) as string;
			const walletUrl = this?.getNodeParameter('walletUrl', 0) as string;
			const lang = this?.getNodeParameter('lang', 0) as string;
			const onChangeCallback = this?.getNodeParameter('onChangeCallback', 0) as string;
			const countryCode = this?.getNodeParameter('countryCode', 0) as string;
			const claimableBalanceSupported = this?.getNodeParameter(
				'claimableBalanceSupported',
				0,
			) as string;

			depositExchangeRequest = new DepositExchangeRequest({
				sourceAsset,
				amount,
				destinationAsset,
				quoteId,
				memoType,
				memo,
				type,
				walletName,
				walletUrl,
				lang,
				onChangeCallback,
				countryCode,
				claimableBalanceSupported,
			});
		} else {
			depositExchangeRequest = new DepositExchangeRequest({
				sourceAsset,
				amount,
				destinationAsset,
				type,
			});
		}
		return await sep6.getDepositExchange(depositExchangeRequest);
	};

	return await getSep6DepositExchangeInfo();
}
