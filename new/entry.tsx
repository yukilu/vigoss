import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Blog from './components/Blog';
import { store } from './store/store';

ReactDOM.render(<Provider store={store}><Blog /></Provider>, document.getElementById('root'));