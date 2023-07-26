import { createAccount } from './newAccount';
import { fundAccount } from './fundAccount';
import { swap } from './swapAssets';
import { build, sign } from './transaction';
import { createPassiveSellOffer, manageBuyOffer, manageSellOffer } from './offers';
import { bumpSequence, manageData, setOptions } from './settings';
import { beginSponsoring, endSponsoring, revokeSponsorship } from './sponsorship';
import { accountMerge } from './accountMerge';
import { liquidityPoolDeposit, liquidityPoolWithdraw } from './liquidityPool';
import { claimClaimableBalance, createClaimableBalance } from './claimable';
import { clawback, clawbackClaimableBalance } from './clawback';
import { changeTrust, setTrustline } from './trust';
import { findLiquidityPool, findPayments } from './server';

import { makePayment, pathPaymentStrictReceive, pathPaymentStrictSend } from './payments';
import { StellarResources } from '../actions/entities/IStellarNode';

interface IOperations {
	operations: { [key: string]: { execute: () => Promise<{}> | {} } };
}

const resources: { [key in keyof StellarResources]: IOperations } = {
	newAccount: {
		operations: {
			createAccount: { execute: createAccount.execute },
		},
	},
	fundAccount: {
		operations: {
			fundAccount: { execute: fundAccount.execute },
		},
	},
	swapAssets: {
		operations: {
			swap: { execute: swap.execute },
		},
	},
	accountMerge: { operations: { accountMerge: { execute: accountMerge.execute } } },
	settings: {
		operations: {
			bumpSequence: { execute: bumpSequence.execute },
			manageData: { execute: manageData.execute },
			setOptions: { execute: setOptions.execute },
		},
	},
	transaction: {
		operations: { build: { execute: build.execute }, sign: { execute: sign.execute } },
	},
	offers: {
		operations: {
			createPassiveSellOffer: { execute: createPassiveSellOffer.execute },
			manageBuyOffer: { execute: manageBuyOffer.execute },
			manageSellOffer: { execute: manageSellOffer.execute },
		},
	},
	sponsorship: {
		operations: {
			beginSponsoring: { execute: beginSponsoring.execute },
			endSponsoring: { execute: endSponsoring.execute },
			revokeSponsorship: { execute: revokeSponsorship.execute },
		},
	},
	liquidityPool: {
		operations: {
			liquidityPoolDeposit: { execute: liquidityPoolDeposit.execute },
			liquidityPoolWithdraw: { execute: liquidityPoolWithdraw.execute },
		},
	},
	claimableBalance: {
		operations: {
			claimClaimableBalance: { execute: claimClaimableBalance.execute },
			createClaimableBalance: { execute: createClaimableBalance.execute },
		},
	},
	clawback: {
		operations: {
			clawback: { execute: clawback.execute },
			clawbackClaimableBalance: { execute: clawbackClaimableBalance.execute },
		},
	},
	trust: {
		operations: {
			changeTrust: { execute: changeTrust.execute },
			setTrustline: { execute: setTrustline.execute },
		},
	},
	server: {
		operations: {
			findPayments: { execute: findPayments.execute },
			findLiquidityPool: { execute: findLiquidityPool.execute },
		},
	},
	payments: {
		operations: {
			makePayment: { execute: makePayment.execute },
			pathPaymentStrictReceive: { execute: pathPaymentStrictReceive.execute },
			pathPaymentStrictSend: { execute: pathPaymentStrictSend.execute },
		},
	},
};

export default resources;
