<?php
/**
 * Stripe WP
 *
 * @package   Stripe WP
 * @author    Ethan Corey
 * @copyright 2023
 * @license   MIT
 *
 * @wordpress-plugin
 * Plugin Name:       Stripe WP
 * Plugin URI:        https://github.com/ethanscorey/stripe-wp/
 * Description:       A Stripe integration for WordPress.
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      7.2
 * Author:            Ethan Corey
 * Author URI:        https://github.com/ethanscorey/
 * Text Domain:       stripe-wp
 * License:           MIT
 * License URI:       https://opensource.org/license/mit/
 * Update URI:        https://github.com/ethanscorey/stripe-wp/releases
 */

namespace StripeWP;

if ( function_exists( 'plugin_dir_path' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
} else {
	// Set to test directory if we are running unit tests.
	define( __NAMESPACE__ . '\PLUGIN_DIR_PATH', __DIR__ . '/tests/' );
}
define( __NAMESPACE__ . '\BLOCK_DIR_PATH', PLUGIN_DIR_PATH . 'blocks/build/' );


/**
 * Get the path to a block's directory.
 *
 * Locate the block's directory within the plugin directory.
 *
 * @param string $block_name The name of the block.
 * @return string The block directory path.
 */
function get_block_path( string $block_name ) {
	return BLOCK_DIR_PATH . $block_name;
}


/**
 * Register the donate form block.
 */
function register_donate_form_block() {
	$block_path = get_block_path( 'donate-form' );
	register_block_type( $block_path );
}
add_action( 'init', __NAMESPACE__ . '\register_donate_form_block' );
