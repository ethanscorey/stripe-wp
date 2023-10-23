import { useBlockProps } from '@wordpress/block-editor';

/**
 * Render the price option component.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 * @param {Object} props            The block properties.
 * @param {Object} props.attributes The block attributes.
 * @return {Element} Price option component.
 */
export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<label>
				<input
					type="radio"
					name="selectedPrice"
					value={ attributes.unit_amount }
				/>
				{ attributes.unit_amount }
			</label>
			<i>$</i>
		</div>
	);
}
