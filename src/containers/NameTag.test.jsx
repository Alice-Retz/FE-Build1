import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NameTag from '../containers/NameTag';

describe('NameTag container', () => {
  it('changes the displayed name', async () => {
    render(<NameTag />);
    screen.getByText('my name is');
    const nameInput = await screen.findByLabelText('Name:');
    userEvent.type(nameInput, 'Alice');
    const greetingInput = await screen.findByLabelText('Greeting:');
    userEvent.type(greetingInput, 'Hello');
    const button = await screen.findByRole('button', { name: 'button' });
    userEvent.click(button);
    return waitFor(() => {
      const greeting = screen.getAllByText('Hello', { exact: false, });
      const name = screen.getAllByText('Alice', { exact: false, });
      expect(greeting).toMatchSnapshot();
      expect(name).toMatchSnapshot();
    });
  });
});
