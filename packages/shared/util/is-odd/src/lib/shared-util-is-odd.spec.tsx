import { render } from '@testing-library/react';

import SharedUtilIsOdd from './shared-util-is-odd';

describe('SharedUtilIsOdd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilIsOdd />);
    expect(baseElement).toBeTruthy();
  });
});
