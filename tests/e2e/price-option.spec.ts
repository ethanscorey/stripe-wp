const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

const insertPriceOption = async ( editor ) => {
	await editor.insertBlock( { name: 'stripe-wp/donate-form' } );
	await editor.canvas
		.locator( 'role=document[name="Block: Stripe Donation Form"]' )
		.click();
	await editor.canvas
		.locator( 'role=button[name="Add Stripe Price Option"i]' )
		.click();
};

test.describe( 'Stripe Price Option Block', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test( 'can insert price option in a donate form', async ( { editor } ) => {
		await insertPriceOption( editor );
		expect( await editor.getEditedPostContent() ).toMatchSnapshot();
	} );
} );
