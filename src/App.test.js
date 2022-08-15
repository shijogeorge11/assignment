import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app components', () => {
  const {container} = render(<App />);
  const appElement = container.getElementsByClassName("app");
  expect(appElement.length).toBe(1);
});
