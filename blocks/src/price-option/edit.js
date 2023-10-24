import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
} from '@wordpress/block-editor';
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
			<InspectorControls group="list">
				<PanelColorSettings
					title={ __( 'Hover Color', 'stripe-wp' ) }
					initialOpen
					colorSettings={ [
						{
							value: attributes.hoverTextColor,
							onChange: ( value ) =>
								setAttributes( { hoverTextColor: value } ),
							label: __( 'Hover Text Color', 'stripe-wp' ),
						},
						{
							value: attributes.hoverBackgroundColor,
							onChange: ( value ) =>
								setAttributes( {
									hoverBackgroundColor: value,
								} ),
							label: __( 'Hover Background Color', 'stripe-wp' ),
						},
					] }
				/>
			</InspectorControls>
			<span className="swp-d-none">{ __( 'Price option:' ) }</span>
			<span className="wp-block-stripe-wp-price-option__currency">$</span>
			<TextControl
				type="number"
				className="wp-block-stripe-wp-price-option__amount"
				value={ attributes.unitAmount }
				step="0.01"
				min="0.01"
				max="99_999.99"
				onChange={ ( value ) => setAttributes( { unitAmount: value } ) }
			/>
		</div>
	);
}
