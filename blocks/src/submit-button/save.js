import { RichText, useBlockProps } from '@wordpress/block-editor';

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
			{ ...useBlockProps.save() }
			tagName="button"
			value={ attributes.buttonText }
		/>
	);
}
