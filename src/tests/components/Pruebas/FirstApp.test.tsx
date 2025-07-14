import {render} from '@testing-library/react';
import FirstApp from '../../../components/Pruebas/FirstApp';

describe('Test in FirstApp', () => {

  test('FirstApp should be iqual to snapshot', () => {
    const { container } = render(<FirstApp />);
    expect(container).toMatchSnapshot();
  });

  test('FirstApp should render text "Cambiar nombre"', () => {
    const text = 'Cambiar nombre';
    const { getByText } = render(<FirstApp />);
    expect(getByText(text)).toBeTruthy();
  });
});