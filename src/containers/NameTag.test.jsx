import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NameTag from '../containers/NameTag';

describe('NameTag container', () => {
  it('changes the displayed name', async () => {
    render(<NameTag />);

    const nameInput = await screen.findByRole('textbox', {
      name: 'name',
    });
    userEvent.type(nameInput, '{selectall}{del}Ruby');

    await screen.findByText('Ruby');
  });

  it('changes the displayed greeting', async () => {
    render(<NameTag />);

    const greetingInput = await screen.findByRole('textbox', {
      name: 'greeting',
    });
    userEvent.type(greetingInput, '{selectall}{del}Hi, my name is');

    await screen.findByText('Hi, my name is');
  });
});
