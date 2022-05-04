import { render } from '@testing-library/react';

import Layout from './layout';

describe('SharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Layout title="test" description="test">
        <p>Hi 👋</p>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});
