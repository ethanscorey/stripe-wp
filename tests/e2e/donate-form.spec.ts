/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Stripe Donate Form Block', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test( 'can insert block', async ( { editor } ) => {
		await editor.insertBlock( { name: 'stripe-wp/donate-form' } );
		await expect(
			editor.canvas.locator(
				'role=document[name="Block: Stripe Donation Form"]'
			)
		).toBeFocused();
	} );
} );
