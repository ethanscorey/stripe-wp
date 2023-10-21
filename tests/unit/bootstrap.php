<?php
/**
 * PHPUnit bootstrap file for unit tests
 *
 * @package Stripe_Wp
 */

$swp_plugin_dir = dirname( dirname( __DIR__ ) );

require_once $swp_plugin_dir . '/vendor/autoload.php';

WP_Mock::bootstrap();

require_once $swp_plugin_dir . '/stripe-wp.php';
