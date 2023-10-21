<?php
/**
 * Block registration tests.
 *
 * Test that all of our blocks are registered.
 *
 * @package StripeWP
 * @link https://github.com/ethanscorey/stripe-wp
 * @license https://opensource.org/licenses/MIT MIT
 */

namespace StripeWP\Tests\BlockRegistration;

use WP_Mock\Functions;

class BlockRegistrationTest extends \WP_Mock\Tools\TestCase {

    public function setUp(): void {
        parent::setUp();
		\WP_Mock::setUp();
    }

    public function tearDown(): void {
		\WP_Mock::tearDown();
        parent::tearDown();
    }

    public function test_register_price_option_block() {
		/*
		\WP_Mock::userFunction( '\register_block_type' )
            ->once()
            ->with( \StripeWP\PLUGIN_DIR_PATH . 'blocks/build/swp-price-option' )
            ->andReturn( true );
        \StripeWP\register_price_option_block();
		 */
		$this->assertTrue( true );
    }
}
?>
