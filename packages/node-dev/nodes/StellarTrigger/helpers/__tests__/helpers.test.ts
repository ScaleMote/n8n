/**
 * @vitest-environment jsdom
 */
import { describe, expect, it } from 'vitest';
import { validateTx } from '../helpers';
import { INodeAssets } from '../../fixedCollectionTypes';

describe('Validate TX', () => {
	it('Should return true if TX has the same code', () => {
		const assets: INodeAssets = { codes: ['yUSDC'], issuers: ['1234'] };
		const tx = { asset_code: 'yUSDC' };
		const isTxValid = validateTx(tx, assets);

		expect(isTxValid).toBe(true);
	});

	it('Should return true if TX has the same issuer', () => {
		const assets: INodeAssets = { codes: ['yUSDC'], issuers: ['1234'] };
		const tx = { asset_issuer: '1234' };
		const isTxValid = validateTx(tx, assets);

		expect(isTxValid).toBe(true);
	});

	it('Should return true if TX has the same type', () => {
		const assets: INodeAssets = { codes: ['native'], issuers: [''] };
		const tx = { asset_type: 'native' };
		const isTxValid = validateTx(tx, assets);

		expect(isTxValid).toBe(true);
	});

	it(`Should return false if the transaction doesn't have a valid code`, () => {
		const assets: INodeAssets = { codes: ['yUSDC'], issuers: ['1234'] };
		const tx = { asset_code: 'ARS' };
		const isTxValid = validateTx(tx, assets);

		expect(isTxValid).toBe(false);
	});

	it('Should return true if TX has one valid code', () => {
		const assets: INodeAssets = { codes: ['yUSDC', 'ARS'], issuers: ['1234'] };
		const tx = { asset_code: 'ARS' };
		const isTxValid = validateTx(tx, assets);

		expect(isTxValid).toBe(true);
	});

	it('Should return true if the array of codes and issuers are empty', () => {
		const assets: INodeAssets = { codes: [], issuers: [] };
		const tx = { asset_code: 'ARS' };
		const isTxValid = validateTx(tx, assets);

		expect(isTxValid).toBe(true);
	});
});
