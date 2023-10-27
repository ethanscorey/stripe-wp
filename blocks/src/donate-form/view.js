import { onMouseOver, onMouseOut } from './handleHover';

const hoverElements = [
	'.wp-block-stripe-wp-price-option',
	'.wp-block-stripe-wp-submit-button',
];

document.addEventListener( 'DOMContentLoaded', () => {
	hoverElements.forEach( ( elementSelector ) => {
		document.querySelectorAll( elementSelector ).forEach( ( element ) => {
			onMouseOver( element );
			onMouseOut( element );
		} );
	} );
} );
