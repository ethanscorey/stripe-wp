import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	PanelColorSettings,
	useBlockEditContext,
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
	const { clientId } = useBlockEditContext();
	return (
		<>
			<style>
				#block-{ clientId }:hover, #block-{ clientId }:active, #block-
				{ clientId }:focus { `{` }
				background-color: { attributes.hoverBackgroundColor }{ ' ' }
				!important; color: { attributes.hoverTextColor } !important;
				{ `}` }
			</style>
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
								label: __(
									'Hover Background Color',
									'stripe-wp'
								),
							},
						] }
					/>
				</InspectorControls>
				<span className="wp-block-stripe-wp-price-option__currency">
					$
				</span>
				<TextControl
					type="number"
					label={ __( 'Input Price', 'stripe-wp' ) }
					className="wp-block-stripe-wp-price-option__amount"
					value={ attributes.unitAmount }
					step="0.01"
					min="0.01"
					max="99_999.99"
					onChange={ ( value ) =>
						setAttributes( { unitAmount: value } )
					}
				/>
			</div>
		</>
	);
}
