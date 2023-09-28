import type { Asset, Server } from 'stellar-sdk';
import { Operation } from 'stellar-sdk';

async function findOffers(
	server: Server,
	sourceAsset: Asset,
	destinationAsset: Asset,
	amount: string,
) {
	const assets = [destinationAsset];

	return server.strictSendPaths(sourceAsset, amount, assets).call();
}

function getMinDestinationAmount(offer: string, percentage: string) {
	const parsedOffer = Number(offer);
	const parsedPercentage = Number(percentage);
	const result = parsedOffer - parsedOffer * (parsedPercentage / 100);

	return `${result}`;
}

export async function getSwapAssetsOperation(
	server: Server,
	sourceAsset: Asset,
	destinationAsset: Asset,
	amount: string,
	publicKey: string,
	slippageAmount: string,
) {
	const offers = await findOffers(server, sourceAsset, destinationAsset, amount);

	if (!slippageAmount) {
		return 'Please, select a slippage tolerance';
	}

	if (offers.records) {
		const bestOffer = offers.records[0];
		const paymentOperation = Operation.pathPaymentStrictSend({
			destination: publicKey,
			sendAsset: sourceAsset,
			sendAmount: amount,
			destAsset: destinationAsset,
			destMin: getMinDestinationAmount(bestOffer.destination_amount, slippageAmount),
		});

		return paymentOperation.toXDR('base64');
	} else {
		throw new Error();
	}
}
