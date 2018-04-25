import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Blog from './components/blog/Blog';
import { store } from './components/store/store';

ReactDOM.render(<Provider store={store}><Blog /></Provider>, document.getElementById('root'));