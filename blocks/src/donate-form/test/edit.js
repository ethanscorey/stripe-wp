/*global jest, it, describe, expect */
jest.mock( '@wordpress/block-editor', () => ( {
	useBlockProps: jest.fn().mockReturnValue( {} ),
	InnerBlocks: jest.fn( () => <div data-testid="inner-blocks-mock"></div> ),
} ) );

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import Edit from '../edit';

describe( 'Donate Form Block', () => {
	it( 'renders without crashing', () => {
		const { getByTestId } = render( <Edit /> );
		expect( getByTestId( 'inner-blocks-mock' ) ).toBeInTheDocument();
	} );
} );
