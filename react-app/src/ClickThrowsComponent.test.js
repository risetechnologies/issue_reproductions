import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import ClickThrowsComponent from "./ClickThrowsComponent";

test('should throw', () => {
  const { getByTestId } = render(<ClickThrowsComponent />);
  expect(()=>fireEvent.click(getByTestId('some-id'))).toThrow();
});
