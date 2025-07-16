import { render, screen } from "@testing-library/react";
import FirstApp from "../../../src/components/Pruebas/FirstApp";

describe('Testing FirstApp Improved', () => {
  const text = 'Cambiar nombre';

  test('FirstApp should match to the snapshot', () => {
    const {container} = render(<FirstApp />);
    expect(container).toMatchSnapshot();
  });

  test('FirstApp should render text "Cambiar nombre"', () => {
    render(<FirstApp />);
    const buttonElementText = screen.getByText(text);
    expect(buttonElementText).toBeTruthy();
  });

  test('counter should render 0 value into P element', () => {
    render(<FirstApp />);
    const pElementCounter = screen.getByText('0');
    expect(pElementCounter).toBeTruthy();
    expect(pElementCounter.tagName).toBe('P');
  });

  test('FirstApp should render text "Cambiar nombre" into button tag', () => {
    render(<FirstApp />);
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement[2]?.textContent).toContain(text);
  });

  test('button add should be have "Sumar +1" in the text', () => {
    const textButton = 'Sumar +1';
    render(<FirstApp />);
    const btnElement = screen.getAllByRole('button');
    expect(btnElement[0].textContent).toBe(textButton);
  });
})