import * as React from 'react';

const ClickThrowsComponent = () => {
  const handleOnSectionClick = () => {
    throw new Error('some error')
  };
  return (
    <div data-testid='some-id'
      onClick={handleOnSectionClick}
    />
  );
};

export default ClickThrowsComponent;
