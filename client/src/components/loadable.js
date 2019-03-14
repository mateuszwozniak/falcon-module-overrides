import React from 'react';
import loadable from '@loadable/component';
import { Loader } from '@deity/falcon-ecommerce-uikit';
// it needs to be exported as default export and consumed via `loadable` name to be compatible with SSR
// - https://github.com/smooth-code/loadable-components/issues/100#issuecomment-441192303
export default component =>
  loadable(component, {
    fallback: <Loader />
  });
