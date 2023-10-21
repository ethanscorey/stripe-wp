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

/**
 * Block registration test case.
 */
class BlockRegistrationTest extends \WP_Mock\Tools\TestCase {

	/**
	 * Set up WP_Mock
	 */
	public function setUp(): void {
		parent::setUp();
		\WP_Mock::setUp();
	}

	/**
	 * Tear down WP_Mock
	 */
	public function tearDown(): void {
		\WP_Mock::tearDown();
		parent::tearDown();
	}

	/**
	 * Test that we can get the block path.
	 */
	public function test_get_block_path(): void {
		$test_value = 'test-block';
		$expected   = \StripeWP\BLOCK_DIR_PATH . $test_value;
		$this->assertEquals(
			$expected,
			\StripeWP\get_block_path( $test_value ),
		);
	}
}
