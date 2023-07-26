import { IBaseStandardFieldsRequest } from './IBaseStandardFieldsRequest';

export interface IFinancialAccountFieldsRequest extends IBaseStandardFieldsRequest {
	bankAccountType?: string;
	bankNumber?: string;
	bankPhoneNumber?: string;
	bankBranchNumber?: string;
	clabeNumber?: string;
	cbuNumber?: string;
	cbuAlias?: string;
}
