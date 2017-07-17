import R from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

const outPoems = [
    {"_id": 0, "title":"陶者","author":"梅尧臣","content":["陶尽门前土，屋上无片瓦。","十指不沾泥，鳞鳞居大厦。"]},
    {"_id": 1, "title":"书湖阴先生壁二首 其一","author":"王安石","content":["茅檐长扫净无苔，花木成畦手自栽。","一水护田将绿绕，两山排闼送青来。"]},
    {"_id": 2, "title":"夏日绝句","author":"李清照","content":["生当作人杰，死亦为鬼雄。","至今思项羽，不肯过江东。"]}
];

const thunkMiddleware = store => next => action => typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const actions = {
    get: poems => ({ type: 'GET', poems })
};

function reducer(state = { poems: outPoems }, action) {
    switch(action.type) {
        case 'GET':
            return { poems: action.poems };
        default:
            return state;
    }
    
}

function mapStateToProps(state) {
    return { poems: state.poems };
}

function mapDispatchToProps(dispatch) {
    return {
        get: () => {
            dispatch((dispatch, getState) => {
                fetch('https://www.vigoss.top/poetry').then(response => response.json()).then(json => {
                    dispatch(actions.get(json));
                });
            });
        }
    };
}

function Poem(props) {
    const poem = props.poem;
    const poemBody = poem.content.map((item, index) => <p key={index}>{item}</p>);
    return (
        <div>
            <h2>{poem.title}</h2>
            <h4>{poem.author}</h4>
            <div>{poemBody}</div>
        </div>
    );
}

@connect(mapStateToProps, mapDispatchToProps)
class Poetry extends R.Component {
    render() {
        let props = this.props;
        const poems = props.poems.map(poem => <Poem key={poem._id} poem={poem} />);
        return <div onClick={props.get} style={{ textAlign: 'center' }}>{poems}</div>;
    }
}

render(
    <Provider store={store}>
        <Poetry />
    </Provider>,
    document.getElementById('root')
);