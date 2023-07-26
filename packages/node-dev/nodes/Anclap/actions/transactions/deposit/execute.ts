import { IExecuteFunctions } from 'n8n-workflow';
import SEP6 from '../../../transport/SEP6';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import DepositRequest from '../../../transport/requests/DepositRequest/DepositRequest';
import IDepositRequest from '../../../transport/requests/DepositRequest/IDepositRequest';

export async function deposit(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const amount = this.getNodeParameter('amount', 0) as string;
	const assetCode = this.getNodeParameter('assetCode', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;
	const getSep6DepositInfo = async () => {
		const sep6 = new SEP6(anclapCredentials, token);

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
		return await sep6.deposit(depositRequest);
	};

	return await getSep6DepositInfo();
}
