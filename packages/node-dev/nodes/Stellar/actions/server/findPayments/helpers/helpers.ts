import { Server, ServerApi } from 'stellar-sdk';
import Payment from '../../../entities/Payment';
import NoPaymentFoundError from '../errors/NoPaymentFoundError';
import IAsset from '../../../entities/IAsset';

function paymentMapper(paymentRecord: ServerApi.PaymentOperationRecord) {
	const {
		id,
		source_account,
		transaction_hash,
		asset_type,
		asset_code,
		asset_issuer,
		from,
		amount,
		created_at,
		_links,
	} = paymentRecord;
	return new Payment(
		id,
		source_account,
		transaction_hash,
		asset_type,
		from,
		amount,
		created_at,
		_links.transaction,
		_links.self,
		asset_code,
		asset_issuer,
	);
}

export function filterPaymentFromAccount(fromAccount: string, paymentList: Payment[]) {
	const firstPaymentFromAccount = paymentList.find(
		(payment) => payment.sourceAccount === fromAccount,
	);
	if (!firstPaymentFromAccount) {
		throw new NoPaymentFoundError();
	}
	return firstPaymentFromAccount;
}

export function filterPaymentFromAsset(asset: IAsset['values'], paymentList: Payment[]) {
	let firstPaymentFromAsset: Payment | undefined;

	if (asset.isNative) {
		firstPaymentFromAsset = paymentList.find((payment) => payment.assetType === 'native');
	} else {
		firstPaymentFromAsset = paymentList.find(
			(payment) => payment.assetCode === asset.code && payment.assetIssuer === asset.issuer,
		);
	}
	if (!firstPaymentFromAsset) {
		throw new NoPaymentFoundError();
	}
	return firstPaymentFromAsset;
}

export async function getPayments(
	server: Server,
	destinationAccount: string,
	limit: number,
	order: orderType,
): Promise<Payment[]> {
	const firstPayments: Payment[] = [];

	try {
		const { records: paymentRecords } = await server
			.payments()
			.forAccount(destinationAccount)
			.order(order)
			.limit(limit)
			.call();
		paymentRecords.forEach((paymentRecord) => {
			firstPayments.push(paymentMapper(paymentRecord));
		});
		return firstPayments;
	} catch {
		throw new NoPaymentFoundError();
	}
}

type orderType = 'asc' | 'desc';
