import React from 'react';
import { render } from '@testing-library/react';
import ReduxProvider from '../store/Provider';
import { store } from '../store/Store';

describe('ReduxProvider', () => {
  test('renders children', () => {
    const { getByText } = render(
      <ReduxProvider>
        <div>Test</div>
      </ReduxProvider>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  test('provides the store to its children', () => {
    const { getByText } = render(
      <ReduxProvider>
        <div>
          <span>{store.getState()}</span>
        </div>
      </ReduxProvider>
    );
    expect(getByText(store.getState())).toBeInTheDocument();
  });
});
