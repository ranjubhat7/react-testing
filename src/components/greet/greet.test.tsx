import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Greet renders correctly', () => {
	render(<Greet />); //Creating virtual dom
	const textElement = screen.getByText('Hello');
	expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
	render(<Greet name="Ranjan" />); //Creating virtual dom
	const textElement = screen.getByText('Hello Ranjan');
	expect(textElement).toBeInTheDocument();
});
