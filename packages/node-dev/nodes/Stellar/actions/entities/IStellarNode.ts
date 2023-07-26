import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

export type StellarResources = {
	accountMerge: 'accountMerge';
	settings: 'bumpSequence' | 'manageData' | 'setOptions';
	claimableBalance: 'createClaimableBalance' | 'claimClaimableBalance';
	clawback: 'clawback' | 'clawbackClaimableBalance';
	fundAccount: 'fundAccount';
	liquidityPool: 'liquidityPoolDeposit' | 'liquidityPoolWithdraw';
	newAccount: 'createAccount';
	offers: 'manageSellOffer' | 'manageBuyOffer' | 'createPassiveSellOffer';
	payments: 'getPayment' | 'makePayment' | 'pathPaymentStrictSend' | 'pathPaymentStrictReceive';
	server: 'findLiquidityPool' | 'findPayments';
	sponsorship: 'beginSponsoring' | 'endSponsoring' | 'revokeSponsorship';
	swapAssets: 'swap';
	transaction: 'build' | 'sign';
	trust: 'changeTrust' | 'setTrustline';
};

export type Stellar = AllEntities<StellarResources>;

type StellarAccountMerge = Entity<StellarResources, 'accountMerge'>;
type StellarSettings = Entity<StellarResources, 'settings'>;
type StellarClaimableBalance = Entity<StellarResources, 'claimableBalance'>;
type StellarClawback = Entity<StellarResources, 'clawback'>;
type StellarFundAccount = Entity<StellarResources, 'fundAccount'>;
type StellarLiquidityPool = Entity<StellarResources, 'liquidityPool'>;
type StellarNewAccount = Entity<StellarResources, 'newAccount'>;
type StellarOffers = Entity<StellarResources, 'offers'>;
type StellarPayments = Entity<StellarResources, 'payments'>;
type StellarServer = Entity<StellarResources, 'server'>;
type StellarSponsorship = Entity<StellarResources, 'sponsorship'>;
type StellarSwapAssets = Entity<StellarResources, 'swapAssets'>;
type StellarTransaction = Entity<StellarResources, 'transaction'>;
type StellarTrust = Entity<StellarResources, 'trust'>;

export type AccountMergeProperties = PropertiesOf<StellarAccountMerge>;
export type SettingsProperties = PropertiesOf<StellarSettings>;
export type ClaimableBalanceProperties = PropertiesOf<StellarClaimableBalance>;
export type ClawbackProperties = PropertiesOf<StellarClawback>;
export type FundAccountProperties = PropertiesOf<StellarFundAccount>;
export type LiquidityPoolProperties = PropertiesOf<StellarLiquidityPool>;
export type NewAccountProperties = PropertiesOf<StellarNewAccount>;
export type OffersProperties = PropertiesOf<StellarOffers>;
export type PaymentsProperties = PropertiesOf<StellarPayments>;
export type ServerProperties = PropertiesOf<StellarServer>;
export type SponsorshipProperties = PropertiesOf<StellarSponsorship>;
export type SwapAssetsProperties = PropertiesOf<StellarSwapAssets>;
export type TransactionProperties = PropertiesOf<StellarTransaction>;
export type TrustProperties = PropertiesOf<StellarTrust>;
