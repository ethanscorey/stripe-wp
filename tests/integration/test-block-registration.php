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
}
