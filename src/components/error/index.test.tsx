import { render, screen } from '@testing-library/react';
import ErrorComponent from './index';

test('should render an error message', () => {
  const e = new Error('I am an error');
  const { container } = render(<ErrorComponent error={e} />);
  const errorElement = screen.getByText(/I am an error/i);
  expect(container).toContainElement(errorElement);
});

test('should not render an error message where there is no error', () => {
  const e = undefined;
  const { container } = render(<ErrorComponent error={e} />);
  expect(container).toBeEmptyDOMElement();
});
