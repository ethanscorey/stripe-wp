<?php
/**
 * PHPUnit bootstrap file.
 *
 * @package Stripe_Wp
 */

$swp_tests_dir = getenv( 'WP_TESTS_DIR' );

if ( ! $swp_tests_dir ) {
	$swp_tests_dir = rtrim( sys_get_temp_dir(), '/\\' ) . '/wordpress-tests-lib';
}

// Forward custom PHPUnit Polyfills configuration to PHPUnit bootstrap file.
$swp_phpunit_polyfills_path = getenv( 'WP_TESTS_PHPUNIT_POLYFILLS_PATH' );
if ( false !== $swp_phpunit_polyfills_path ) {
	define( 'WP_TESTS_PHPUNIT_POLYFILLS_PATH', $swp_phpunit_polyfills_path );
}

if ( ! file_exists( "{$swp_tests_dir}/includes/functions.php" ) ) {
	echo "Could not find {$swp_tests_dir}/includes/functions.php, have you run bin/install-wp-tests.sh ?" . PHP_EOL; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	exit( 1 );
}

// Give access to tests_add_filter() function.
require_once "{$swp_tests_dir}/includes/functions.php";

/**
 * Manually load the plugin being tested.
 */
function swp_manually_load_plugin() {
	require dirname( __DIR__ ) . '/stripe-wp.php';
}

tests_add_filter( 'muplugins_loaded', 'swp_manually_load_plugin' );

// Start up the WP testing environment.
require "{$swp_tests_dir}/includes/bootstrap.php";
