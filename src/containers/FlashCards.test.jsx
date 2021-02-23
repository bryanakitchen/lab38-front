/* eslint-disable max-len */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import FlashCards from './FlashCards';

const server = setupServer(
  rest.get('https://cryptic-waters-90298.herokuapp.com/api/v1/cards', (req, res, ctx) => {
    return res(ctx.json([
      { 
        id: '123',
        keyTerm: 'HTTP',
        definition: 'Hypertext Transfer Protocol',
        topic: 'web'
      },
      { 
        id: '456',
        keyTerm: 'CORS', 
        definition: 'Cross-Origin Resource Sharing', 
        topic: 'JavaScript'
      },
      { 
        id: '789',
        keyTerm: 'DOM', 
        definition: 'Document Object Model', 
        topic: 'JavaScript' 
      },
    ]));
  })
);

describe('FlashCards container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of flashcards', () => {
    render(<FlashCards />);

    return waitFor(() => {
      screen.getByText('Hypertext Transfer Protocol', { exact: false });
      screen.getByText('Cross-Origin Resource Sharing', { exact: false });
      screen.getByText('Document Object Model', { exact: false });
    });
  });
});
