import { createStore, applyMiddleware } from 'redux';

const thunk = ({ dispatch, getState }) => next => action => typeof action === 'function' ? action(dispatch, getState) : next(action);

const actions = {
    getPoet: (poets, poemType) => ({ type: 'GETPOET', poets, poemType }),
    getPoem: poems => ({ type: 'GETPOEM', poems })
};

function reducer(state = { poets: [], poems: [], poemType: '' }, action) {
    const { poets, poems, poemType } = state;
    switch (action.type) {
        case 'GETPOET':
            return { poets: action.poets, poems, poemType: action.poemType };
        case 'GETPOEM':
            return { poets, poems: action.poems, poemType };
        default:
            return state;
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));

export function mapStateToProps(state) {
    const { poets, poems } = state;
    return { poets, poems };
}

export function mapDispatchToProps(dispatch) {
    const { getPoet, getPoem } = actions;
    return {
        getPoet: ev => {
            const poemType = ev.target.innerHTML;
            // const fetchUrl = `http://127.0.0.1:3000/poetry/${poemType}`;
            const fetchUrl = `https://www.vigoss.top/poetry/${poemType}`;
            fetch(fetchUrl).then(response => response.json(), err => console.log(err)).then(json => {
                dispatch(getPoet(json, poemType));
            });
        },
        getPoem: ev => {
            const { poemType } = store.getState();
            // const fetchUrl = `http://127.0.0.1:3000/poetry/${poemType}/author/${ev.target.innerHTML}`;
            const fetchUrl = `https://www.vigoss.top/poetry/${poemType}/author/${ev.target.innerHTML}`;
            fetch(fetchUrl).then(response => response.json(), err => console.log(err)).then(json => {
                dispatch(getPoem(json));
            });
        }
    };
}