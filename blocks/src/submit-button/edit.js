import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import classnames from 'classnames';

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
	const [ hovered, setHovered ] = useState( false );
	const [ hoverCount, setHoverCount ] = useState( 0 );
	useEffect( () => {
		if ( 0 < hoverCount ) {
			const oldTextColor = attributes.textColor;
			const oldBackgroundColor = attributes.backgroundColor;
			setAttributes( {
				textColor: attributes.hoverTextColor,
				backgroundColor: attributes.hoverBackgroundColor,
			} );
			setAttributes( {
				hoverTextColor: oldTextColor,
				hoverBackgroundColor: oldBackgroundColor,
			} );
		}
		setHoverCount( hoverCount + 1 );
	}, [ hovered ] );
	return (
		<>
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
			<BlockControls>
				<AlignmentToolbar
					value={ attributes.textAlign }
					onChange={ ( value ) =>
						setAttributes( { textAlign: value } )
					}
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: classnames( {
						[ `has-text-align-${ attributes.textAlign }` ]:
							attributes.textAlign,
					} ),
				} ) }
				onMouseOver={ () => setHovered( true ) }
				onMouseOut={ () => setHovered( false ) }
				placeholder={ __( 'Enter donate button text', 'stripe-wp' ) }
				value={ attributes.buttonText }
				allowedFormats={ [
					'core/bold',
					'core/italic',
					'core/language',
					'core/underline',
				] }
				onChange={ ( value ) => setAttributes( { buttonText: value } ) }
				tagName="p"
			/>
		</>
	);
}
