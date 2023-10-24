const colorClassRegex = /has-([a-z]+-)*color/;
const backgroundColorClassRegex = /has-([a-z]+)*-background/;

export function replaceColor( element, newColor, colorClassList ) {
	element.classList.forEach( ( className ) => {
		if ( colorClassRegex.test( className ) ) {
			element.classList.remove( className );
			colorClassList.push( className );
		}
	} );
	element.setAttribute( 'data-text-color', element.style.color );
	element.style.color = newColor;
}

export function restoreColor( element, colorClassList ) {
	colorClassList.forEach( ( className ) => {
		if ( colorClassRegex.test( className ) ) {
			element.classList.add( colorClassList.pop( className ) );
		}
	} );
	element.style.color = element.getAttribute( 'data-text-color' );
}

export function replaceBackgroundColor(
	element,
	newColor,
	backgroundColorClassList
) {
	element.classList.forEach( ( className ) => {
		if ( backgroundColorClassRegex.test( className ) ) {
			element.classList.remove( className );
			backgroundColorClassList.push( className );
		}
	} );
	element.setAttribute(
		'data-background-color',
		element.style.backgroundColor
	);
	element.style.backgroundColor = newColor;
}

export function restoreBackgroundColor( element, backgroundColorClassList ) {
	backgroundColorClassList.forEach( ( className ) => {
		if ( backgroundColorClassRegex.test( className ) ) {
			element.classList.add( backgroundColorClassList.pop( className ) );
		}
	} );
	element.style.backgroundColor = element.getAttribute(
		'data-background-color'
	);
}

export default function handleColorChange() {
	document.addEventListener( 'DOMContentLoaded', () => {
		document
			.querySelectorAll( '.wp-block-stripe-wp-price-option' )
			.forEach( ( option ) => {
				const textColorClasses = [];
				const backgroundColorClasses = [];
				option.addEventListener( 'mouseover', () => {
					replaceColor(
						option,
						option.getAttribute( 'data-hover-text-color' ),
						textColorClasses
					);
					replaceBackgroundColor(
						option,
						option.getAttribute( 'data-hover-background-color' ),
						backgroundColorClasses
					);
				} );
				option.addEventListener( 'mouseout', () => {
					restoreColor( option, textColorClasses );
					restoreBackgroundColor( option, backgroundColorClasses );
				} );
			} );
	} );
}
