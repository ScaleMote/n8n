export default interface IPayment {
	id: string;
	sourceAccount: string;
	transactionHash: string;
	assetType?: string;
	assetCode?: string;
	assetIssuer?: string;
	from: string;
	amount: string;
	createdAt: string;
	transaction: string;
	link: string;
}
