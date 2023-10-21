<?php
/**
 * Plugin setup tests
 *
 * Test that our plugin is set up correctly.
 *
 * @package StripeWP
 * @link https://github.com/ethanscorey/stripe-wp
 * @license https://opensource.org/licenses/MIT MIT
 */

namespace StripeWP\Tests\BlockRegistration;

use PHPUnit\Framework\TestCase;

/**
 * Plugin setup test case.
 */
class PluginSetupTest extends TestCase {

	/**
	 * Test that constants are defined.
	 */
	public function test_register_price_option_block() {
		$test_dir = dirname( __DIR__ ) . '/';
		$this->assertEquals(
			$test_dir,
			\StripeWP\PLUGIN_DIR_PATH,
		);
		$this->assertEquals(
			$test_dir . 'blocks/build/',
			\StripeWP\BLOCK_DIR_PATH,
		);
	}
}
