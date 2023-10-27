document.addEventListener( 'DOMContentLoaded', () => {
	document
		.querySelectorAll( '.wp-block-stripe-wp-submit-button' )
		.forEach( ( element ) => {
			element.addEventListener( 'mouseover', () => {
				element.setAttribute( 'data-text-color', element.style.color );
				element.setAttribute(
					'data-background-color',
					element.style.backgroundColor
				);
				element.style.setProperty(
					'color',
					element.getAttribute( 'data-hover-text-color' ),
					'important'
				);
				element.style.setProperty(
					'background-color',
					element.getAttribute( 'data-hover-background-color' ),
					'important'
				);
			} );
			element.addEventListener( 'mouseout', () => {
				element.style.setProperty(
					'color',
					element.getAttribute( 'data-text-color' ),
					'important'
				);
				element.style.setProperty(
					'background-color',
					element.getAttribute( 'data-background-color' ),
					'important'
				);
			} );
		} );
} );
