import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test("displays all items when initially rendered", () => {
  render(<TaskList tasks={TASKS} />);
  
  const taskElements = screen.getAllByRole('listitem');
  expect(taskElements.length).toBe(TASKS.length);
});
