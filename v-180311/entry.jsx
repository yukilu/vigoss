import { render } from 'react-dom';
import { Provider } from 'react-redux';

import PoemNav from './components/PoemNav1';
import { store } from './store/vgStore';

render(
    <Provider store={store}>
        <PoemNav />
    </Provider>,
    document.getElementById('root')
);