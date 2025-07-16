import {render} from '@testing-library/react';
import FirstApp from '../../../src/components/Pruebas/FirstApp';

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

  test('FirstApp should render text "Cambiar nombre" into button tag', () => {
    const text = 'Cambiar nombre';
    const { container } = render(<FirstApp />);
    const buttonElement = container.querySelectorAll('button');
    expect(buttonElement[2]?.textContent).toContain(text);
  });

  test('FirstApp should render text "Sumar +1" into button tag', () => {
    const text = 'Sumar +1';
    const { getByTestId } = render(<FirstApp />);
    expect(getByTestId('firstApp-btn-sumar')).toBeTruthy();
    expect(getByTestId('firstApp-btn-sumar').textContent).toBe(text);
  });
});