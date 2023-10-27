export function onMouseOver( element ) {
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
}

export function onMouseOut( element ) {
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
}
