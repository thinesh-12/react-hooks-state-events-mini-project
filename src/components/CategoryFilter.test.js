import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from './CategoryFilter';

test('renders CategoryFilter component', () => {
  const setFilter = jest.fn(); // Create a mock function

  render(<CategoryFilter setFilter={setFilter} />); // Pass the mock function as a prop

  const allButton = screen.getByText('All');
  fireEvent.click(allButton);

  expect(setFilter).toHaveBeenCalledWith('All');
});
