/* eslint-disable max-len */
import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import FlashCards from './FlashCards';

const URL = 'https://cryptic-waters-90298.herokuapp.com/api/v1/cards';

const server = setupServer(
  rest.post(`${URL}`, (req, res, ctx) => {
    return res(ctx.json({
      id: '123A',
      keyTerm: 'TDD',
      definition: 'This is a test',
      topic: 'JavaScript'
    }));
  }),
  
  rest.get(`${URL}`, (req, res, ctx) => {
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
  }),

);

describe('FlashCards container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of flash cards', async() => {
    render(<FlashCards />);

    return waitFor(() => {
      screen.getByText('Hypertext Transfer Protocol', { exact: false });
      screen.getByText('Cross-Origin Resource Sharing', { exact: false });
      screen.getByText('Document Object Model', { exact: false });
    });
  });

  it('adds a flash card', async() => {
    render(<FlashCards />);

    const termInput = screen.getByLabelText('Key Term');
    const definitionInput = screen.getByLabelText('Definition');
    const topicInput = screen.getByLabelText('Topic');
    const submitButton = screen.getByText('Add');

    fireEvent.change(termInput, {
      target: { value: 'TDD' }
    });
    
    fireEvent.change(definitionInput, {
      target: { value: 'This is a test' }
    });
          
    fireEvent.change(topicInput, {
      target: { value: 'JavaScript' }
    });
          
    fireEvent.click(submitButton);

    return waitFor(() => {
      screen.getByText('TDD', { exact: false });
    });
  });

});
