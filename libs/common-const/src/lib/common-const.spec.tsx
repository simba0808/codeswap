import { render } from '@testing-library/react';

import CommonConst from './common-const';

describe('CommonConst', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonConst />);
    expect(baseElement).toBeTruthy();
  });
});
