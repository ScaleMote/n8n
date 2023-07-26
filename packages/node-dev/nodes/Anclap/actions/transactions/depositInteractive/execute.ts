import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP24 from '../../../transport/SEP24';
import DepositRequest from '../../../transport/requests/DepositRequest/DepositRequest';
import IDepositRequest from '../../../transport/requests/DepositRequest/IDepositRequest';

export async function depositInteractive(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const amount = this.getNodeParameter('amount', 0) as string;
	const assetCode = this.getNodeParameter('assetCode', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const getSep24DepositUrl = async () => {
		const sep24 = new SEP24(anclapCredentials, token);

		let depositRequest: IDepositRequest;

		if (showOptionalValues) {
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

			depositRequest = new DepositRequest({
				assetCode,
				amount,
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
			depositRequest = new DepositRequest({ assetCode, amount, type });
		}

		return await sep24.getDepositInteractiveUrl(depositRequest);
	};

	return await getSep24DepositUrl();
}
