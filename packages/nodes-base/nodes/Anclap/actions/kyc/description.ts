import type { INodeProperties } from 'n8n-workflow';
import { description as statusDescription } from './status';
import { description as callbackDescription } from './callback';
import { description as registrationDescription } from './registration';
import { description as fileUploadDescription } from './fileUpload';
import { description as filesDescription } from './files';
import { description as binaryRegistrationDescription } from './binaryRegistration';
import { description as deleteDescription } from './delete';
import { description as verificationCodesDescription } from './verification';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'kyc',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
			},
		},
		options: [
			{
				name: 'Delete KYC Information',
				value: 'deleteKYCInformation',
				action: 'Delete KYC Information',
			},
			{
				name: 'Get Files',
				value: 'files',
				action: 'Get Files',
			},
			{
				name: 'Get Status',
				value: 'status',
				action: 'Get Status',
			},
			{
				name: 'Send Binary File IDs',
				value: 'binaryRegistration',
				action: 'Send Binary file IDs',
			},
			{
				name: 'Send KYC Information',
				value: 'registration',
				action: 'Send KYC Information',
			},
			{
				name: 'Send Verification Code',
				value: 'verificationCodes',
				action: 'Send Verification Code',
			},
			{
				name: 'Set Callback URL',
				value: 'callback',
				action: 'Set Callback URL',
			},
			{
				name: 'Upload Binary File',
				value: 'fileUpload',
				action: 'Upload Binary File',
			},
		],
	},
	...statusDescription,
	...callbackDescription,
	...registrationDescription,
	...fileUploadDescription,
	...filesDescription,
	...binaryRegistrationDescription,
	...deleteDescription,
	...verificationCodesDescription,
];
