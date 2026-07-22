<?php
/**
 * Plugin Name:       Wing Services List
 * Description:        Gutenberg block to build and render a list of services (title, short description and image) from the block editor.
 * Version:           1.0.0
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Author:            Alejo
 * License:           GPL-2.0-or-later
 * Text Domain:       wing-services-list
 *
 * @package WingServicesList
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

/**
 * Register both blocks from their compiled metadata in /build.
 *
 * register_block_type() reads each block.json and wires up the editor script,
 * the editor styles and the shared front-end/editor styles automatically.
 */
function wing_services_list_register_blocks() {
	register_block_type( __DIR__ . '/build/services-list' );
	register_block_type( __DIR__ . '/build/service-item' );
}
add_action( 'init', 'wing_services_list_register_blocks' );
