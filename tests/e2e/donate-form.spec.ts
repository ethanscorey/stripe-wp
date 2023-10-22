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

	test( 'can insert price options', async ( { editor } ) => {
		await editor.insertBlock( { name: 'stripe-wp/donate-form' } );
		await editor.canvas
			.locator( 'role=document[name="Block: Stripe Donation Form"]' )
			.click();
		await editor.canvas
			.locator( 'role=button[name="Add Stripe Price Option"i]' )
			.click();
		expect( await editor.getEditedPostContent() ).toMatchSnapshot();
	} );
} );
