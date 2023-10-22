/**
 * Copied with minor tweaks from
 * https://github.com/WordPress/gutenberg/blob/8fa0d979977a248aab4ef2f0870de32e5d9e73b2/test/e2e/playwright.config.ts
 */

/**
 * External dependencies
 */
import { fileURLToPath } from 'url';
import { defineConfig, devices } from '@playwright/test';

/**
 * WordPress dependencies
 */
const baseConfig = require( '@wordpress/scripts/config/playwright.config' );

const config = defineConfig( {
	...baseConfig,
	reporter: process.env.CI
		? [ [ 'github' ], [ './config/flaky-tests-reporter.ts' ] ]
		: 'list',
	workers: 1,
	globalSetup: fileURLToPath(
		new URL( './tests/e2e/global-setup.ts', 'file:' + __filename ).href
	),
	testDir: './tests/e2e',
	projects: [
		{
			name: 'chromium',
			use: { ...devices[ 'Desktop Chrome' ] },
			grepInvert: /-chromium/,
		},
		{
			name: 'firefox',
			use: { ...devices[ 'Desktop Firefox' ] },
			grep: /@firefox/,
			grepInvert: /-firefox/,
		},
	],
} );

export default config;
