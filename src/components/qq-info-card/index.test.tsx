import { render } from '@testing-library/react';
import QQInfoCard from './index';

test('should render properly when pass specified props', () => {
  const avatar='avatar_url';
  const name="test_name";
  const qqNo = 'test_qq';

  const { container } = render(<QQInfoCard avatar={avatar} name={name} qqNo={qqNo}/>);
  expect(container.innerHTML).toContain('<img class="Avatar" src="avatar_url" alt="avatar">');
  expect(container.innerHTML).toContain('<div>test_name</div>');
  expect(container.innerHTML).toContain('<div class="No">test_qq</div>');
});