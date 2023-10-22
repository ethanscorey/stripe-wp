/**
 * Copied with minor tweaks from
 * https://github.com/WordPress/gutenberg/blob/8fa0d979977a248aab4ef2f0870de32e5d9e73b2/test/e2e/config/global-setup.ts
 */

/**
 * External dependencies
 */
import { request, type FullConfig } from '@playwright/test';
/**
 * WordPress dependencies
 */
import { RequestUtils } from '@wordpress/e2e-test-utils-playwright';

async function globalSetup( config: FullConfig ) {
	const { storageState, baseURL } = config.projects[ 0 ].use;
	const storageStatePath =
		typeof storageState === 'string' ? storageState : undefined;

	const requestContext = await request.newContext( {
		baseURL,
	} );

	const requestUtils = new RequestUtils( requestContext, {
		storageStatePath,
	} );

	// Authenticate and save the storageState to disk.
	await requestUtils.setupRest();

	// Reset the test environment before running the tests.
	await Promise.all( [
		requestUtils.activateTheme( 'twentytwentyone' ),
		requestUtils.deleteAllPosts(),
		requestUtils.deleteAllBlocks(),
		requestUtils.resetPreferences(),
		requestUtils.activatePlugin( 'stripe-wp' ),
	] );

	await requestContext.dispose();
}

export default globalSetup;
