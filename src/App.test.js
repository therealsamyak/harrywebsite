import { render, screen } from '@testing-library/react';
import App from './App';

test('renders website', () => {
  render(<App />);
  const heading = screen.getByText(/wrathfulpest13/i);
  expect(heading).toBeInTheDocument();
});
