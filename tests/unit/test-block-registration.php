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

use WP_Mock;

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

	/**
	 * Test that donate form block is registered.
	 */
	public function test_register_donate_form_block(): void {
		WP_Mock::userFunction( 'register_block_type' )
			->once()
			->with( \StripeWP\get_block_path( 'donate-form' ) )
			->andReturn( true );
		$this->assertNull( \StripeWP\register_donate_form_block() );
	}

	/**
	 * Test that price option block is registered.
	 */
	public function test_register_price_option_block(): void {
		WP_Mock::userFunction( 'register_block_type' )
			->once()
			->with( \StripeWP\get_block_path( 'price-option' ) )
			->andReturn( true );
		$this->assertNull( \StripeWP\register_price_option_block() );
	}
}
