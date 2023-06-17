import { render } from '@testing-library/react';

import SharedUtilIsEven from './shared-util-is-even';

describe('SharedUtilIsEven', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilIsEven />);
    expect(baseElement).toBeTruthy();
  });
});
