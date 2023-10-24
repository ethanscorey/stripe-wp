import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

/**
 * Render editor component for submit button block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               The block properties.
 * @param {Object}   props.attributes    The block attributes.
 * @param {Function} props.setAttributes The attribute setter.
 * @return {Element} The submit button component
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<RichText
			{ ...useBlockProps() }
			placeholder={ __( 'Enter donate button text', 'stripe-wp' ) }
			value={ attributes.buttonText }
			onChange={ ( value ) => setAttributes( { buttonText: value } ) }
			tagName="p"
		/>
	);
}
