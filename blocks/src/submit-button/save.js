import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Render front-end for submit button block
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props            The block properties.
 * @param {Object} props.attributes The block attributes.
 * @return {Element} The submit button block.
 */
export default function save( { attributes } ) {
	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: classnames( {
					[ `has-text-align-${ attributes.textAlign }` ]:
						attributes.textAlign,
				} ),
			} ) }
			tagName="button"
			value={ attributes.buttonText }
			data-text-color={ attributes.textColor }
			data-background-color={ attributes.backgroundColor }
			data-hover-text-color={ attributes.hoverTextColor }
			data-hover-background-color={ attributes.hoverBackgroundColor }
		/>
	);
}
