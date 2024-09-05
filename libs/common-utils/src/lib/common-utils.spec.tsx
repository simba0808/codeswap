import { render } from '@testing-library/react';

import CommonUtils from './common-utils';

describe('CommonUtils', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonUtils />);
    expect(baseElement).toBeTruthy();
  });
});
