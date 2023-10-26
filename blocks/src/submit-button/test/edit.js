/*global jest, it, describe, expect */
jest.mock( '@wordpress/block-editor', () => ( {
	...jest.requireActual( '@wordpress/block-editor' ),
	useBlockProps: jest.fn().mockReturnValue( {} ),
} ) );

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Edit from '../edit';

describe( 'Submit button', () => {
	it( 'renders without crashing and matches snapshot', () => {
		const renderedElement = render( <Edit attributes={ {} } /> );
		expect(
			screen.getByRole( 'textbox', { name: 'Enter donate button text' } )
		).toBeInTheDocument();
		expect( renderedElement ).toMatchSnapshot();
	} );
} );
