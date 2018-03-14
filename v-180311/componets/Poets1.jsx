import { Route, Link } from 'react-router-dom';

import Poem from './Poem';

function Poets(props) {
    const { poets, poems, url, getPoem } = props;
    const poemType = url.slice(1);
    const style = { display: 'flex', flexWrap: 'wrap', listStyle: 'none', alignContent: 'space-around' };
    const pts = poets.map((poet, index) => <li style={{ width: '80px', margin: '2px' }} key={index} onClick={getPoem}><Link to={`${url}/${poet}`}>{poet}</Link></li>);
    return (
        <div>
            <ul style={style}>{pts}</ul>
            <hr />

            <Route exact path={url} render={() => <h3>poets</h3>} />
            <Route path={`${url}/:poet`} render={({ match }) => <Poetry poet={match.params.poet} poemType={poemType} poems={poems} />} />
        </div>
    );
}

class Poetry extends React.Component {
    render() {
        const poems = this.props.poems.map(poem => <Poem key={poem._id} poem={poem} />);
        return <div style={{ textAlign: 'center' }}>{poems}</div>;
    }
}

export default Poets;