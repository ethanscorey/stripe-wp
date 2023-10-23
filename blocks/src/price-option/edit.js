import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import './editor.scss';

/**
 * Render editor component for price option block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               The block properties.
 * @param {Object}   props.attributes    The block attributes.
 * @param {Function} props.setAttributes The attribute setter.
 * @return {Element} The price option component.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<div className="wp-block-stripe-wp-price-option__input-container">
				<span className="swp-d-none">{ __( 'Price option:' ) }</span>
				<TextControl
					type="number"
					value={ attributes.unit_amount }
					step="0.01"
					min="0.01"
					max="99_999.99"
					onChange={ ( value ) =>
						setAttributes( { unit_amount: value } )
					}
				/>
				<i>$</i>
			</div>
		</div>
	);
}
