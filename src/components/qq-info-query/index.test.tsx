import { fireEvent, render } from '@testing-library/react';
import QQInfoQuery from './index';

test('should render QQ number input', () => {
  const { container } = render(<QQInfoQuery/>);
  expect(container).toContainHTML('<input class="QQInput">');
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const input = container.querySelector('input');
  fireEvent.change(input as Element, {
    target: {
      value: '270422767',
    },
   })
  expect(input?.value).toBe('270422767');
});