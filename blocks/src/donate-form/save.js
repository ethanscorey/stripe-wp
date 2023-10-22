import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Render the donate form component to be saved in the database.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Donate form component
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
}
