import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Blog from './components_m/Blog';
import { store } from './store_m/store';

ReactDOM.render(<Provider store={store}><Blog /></Provider>, document.getElementById('root'));