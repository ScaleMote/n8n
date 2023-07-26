import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import IWithdrawExchangeRequest from '../../../transport/requests/WithdrawRequest/IWithdrawExchangeRequest';
import SEP6 from '../../../transport/SEP6';
import WithdrawExchangeRequest from '../../../transport/requests/WithdrawRequest/WithdrawExchangeRequest';

export async function withdrawExchange(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const type = this.getNodeParameter('type', 0) as string;
	const dest = this.getNodeParameter('dest', 0) as string;
	const amount = this.getNodeParameter('amount', 0) as string;
	const sourceAsset = this?.getNodeParameter('sourceAsset', 0) as string;
	const destinationAsset = this?.getNodeParameter('destinationAsset', 0) as string;
	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const getSep6WithdrawExchangeInfo = async () => {
		const sep6 = new SEP6(anclapCredentials, token);
		let withdrawExchangeRequest: IWithdrawExchangeRequest;

		if (showOptionalValues) {
			const destExtra = this?.getNodeParameter('destExtra', 0) as string;
			const memo = this?.getNodeParameter('memo', 0) as string;
			const memoType = this?.getNodeParameter('memoType', 0) as string;
			const quoteId = this?.getNodeParameter('quoteId', 0) as string;
			const refundMemo = this?.getNodeParameter('refundMemo', 0) as string;
			const refundMemoType = this?.getNodeParameter('refundMemoType', 0) as string;
			const walletName = this?.getNodeParameter('walletName', 0) as string;
			const walletUrl = this?.getNodeParameter('walletUrl', 0) as string;
			const lang = this?.getNodeParameter('lang', 0) as string;
			const onChangeCallback = this?.getNodeParameter('onChangeCallback', 0) as string;
			const countryCode = this?.getNodeParameter('countryCode', 0) as string;

			withdrawExchangeRequest = new WithdrawExchangeRequest({
				sourceAsset,
				destinationAsset,
				dest,
				amount,
				quoteId,
				memoType,
				memo,
				type,
				walletName,
				walletUrl,
				lang,
				onChangeCallback,
				countryCode,
				destExtra,
				refundMemo,
				refundMemoType,
			});
		} else {
			withdrawExchangeRequest = new WithdrawExchangeRequest({
				sourceAsset,
				destinationAsset,
				dest,
				amount,
				type,
			});
		}
		return await sep6.getWithdrawExchange(withdrawExchangeRequest);
	};

	return await getSep6WithdrawExchangeInfo();
}
