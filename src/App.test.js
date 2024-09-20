import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const emailInput = screen.getByLabelText(/email/i); // Assuming you have an email label in Login.js
  const passwordInput = screen.getByLabelText(/password/i); // Assuming you have a password label in Login.js
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});
