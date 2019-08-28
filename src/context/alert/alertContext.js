import { createContext } from 'react';

import type { AlertContents } from '../../components/layout/Alert';

export type Context = {|
  alert: AlertContents
|};

//$FlowFixMe
const alertContext = createContext();

export default alertContext;