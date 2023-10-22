<?php
/**
 * Class BlockRegistrationTest
 *
 * @package Stripe_Wp
 */

/**
 * Test that blocks are registered.
 */
class BlockRegistrationTest extends WP_UnitTestCase {

	/**
	 * Test that donate form block is registered.
	 */
	public function test_register_donate_form_block() {
		$registered_block = WP_Block_Type_Registry::get_instance()->get_registered( 'stripe-wp/donate-form' );
		$this->assertNotNull( $registered_block, 'Donate form block is not registered.' );
	}

	/**
	 * Test that price option block is registered.
	 */
	public function test_register_price_option_block() {
		$registered_block = WP_Block_Type_Registry::get_instance()->get_registered( 'stripe-wp/price-option' );
		$this->assertNotNull( $registered_block, 'Price option block is not registered.' );
	}
}
