import { describe, it, expect } from 'vitest';
import IAsset from '../../../../entities/IAsset';
import Payment from '../../../../entities/Payment';
import NoPaymentFoundError from '../../errors/NoPaymentFoundError';
import { filterPaymentFromAccount, filterPaymentFromAsset } from '../helpers';

const paymentList: Payment[] = [
	{
		id: 'mockId1',
		sourceAccount: 'mockSourceAccount1',
		transactionHash: 'f36eb3689ff19350',
		assetType: 'native',
		from: 'mockAccountFrom1',
		amount: '200.0000000',
		createdAt: '2023-06-14T07:28:14Z',
		transaction: 'https://horizon.stellar.org/transactions/f36eb3689ff19350',
		link: 'https://horizon.stellar.org/operations/200774302155427841',
	},
	{
		id: 'mockId2',
		sourceAccount: 'mockSourceAccount2',
		transactionHash: '157918c9aca4680',
		assetCode: 'USDC',
		assetIssuer: 'issuerA',
		from: 'mockAccountFrom2',
		amount: '702.3300000',
		createdAt: '2023-06-13T18:50:10Z',
		transaction: 'https://horizon.stellar.org/transactions/157918c9aca4680',
		link: 'https://horizon.stellar.org/operations/200739822158143489',
	},
	{
		id: 'mockId3',
		sourceAccount: 'mockSourceAccount3',
		transactionHash: '88eae8bfb636',
		assetCode: 'yUSDC',
		assetIssuer: 'issuerB',
		from: 'mockAccountFrom3',
		amount: '16213.5000000',
		createdAt: '2023-06-13T18:48:09Z',
		transaction: 'https://horizon.stellar.org/transactions/88eae8bfb636',
		link: 'https://horizon.stellar.org/operations/200739731964358657',
	},
];

describe('filterPaymentFromAsset', () => {
	it('should return the first payment with the same asset code and issuer when the asset is not native', () => {
		const asset: IAsset['values'] = { isNative: false, code: 'USDC', issuer: 'issuerA' };

		const result = filterPaymentFromAsset(asset, paymentList);

		expect(result).toEqual({
			id: 'mockId2',
			sourceAccount: 'mockSourceAccount2',
			transactionHash: '157918c9aca4680',
			assetCode: 'USDC',
			assetIssuer: 'issuerA',
			from: 'mockAccountFrom2',
			amount: '702.3300000',
			createdAt: '2023-06-13T18:50:10Z',
			transaction: 'https://horizon.stellar.org/transactions/157918c9aca4680',
			link: 'https://horizon.stellar.org/operations/200739822158143489',
		});
	});

	it('should throw a NoPaymentFoundError when no payment matches the asset', () => {
		const asset: IAsset['values'] = { isNative: false, code: 'ARS', issuer: 'issuerA' };

		expect(() => filterPaymentFromAsset(asset, paymentList)).toThrow(NoPaymentFoundError);
	});
});

describe('filterPaymentFromAccount', () => {
	it('should return the first payment from the account provided', () => {
		const fromAccount = 'mockSourceAccount3';
		const result = filterPaymentFromAccount(fromAccount, paymentList);

		expect(result).toEqual({
			id: 'mockId3',
			sourceAccount: 'mockSourceAccount3',
			transactionHash: '88eae8bfb636',
			assetCode: 'yUSDC',
			assetIssuer: 'issuerB',
			from: 'mockAccountFrom3',
			amount: '16213.5000000',
			createdAt: '2023-06-13T18:48:09Z',
			transaction: 'https://horizon.stellar.org/transactions/88eae8bfb636',
			link: 'https://horizon.stellar.org/operations/200739731964358657',
		});
	});

	it('should throw a NoPaymentFoundError when no payment matches the asset', () => {
		const fromAccount = 'mockSourceAccount4';

		expect(() => filterPaymentFromAccount(fromAccount, paymentList)).toThrow(NoPaymentFoundError);
	});
});
