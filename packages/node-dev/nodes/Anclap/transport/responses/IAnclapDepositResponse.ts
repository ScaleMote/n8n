export default interface IAnclapDepositResponse {
	how: string;
	id: string;
	eta: number;
	min_amount: number;
	max_amount: number;
	fee_fixed: number;
	fee_percent: number;
	extra_info: IMessage;
}

interface IMessage {
	message: string;
}
