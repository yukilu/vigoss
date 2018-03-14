import React from 'react';
import { Route, Link } from 'react-router-dom';

import Poem from './Poem';

class Poets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { poems: [] };
        this.onClick = this.onClick.bind(this);
    }

    onClick(ev) {
        const { url } = this.props;
        const that = this;
        // const fetchUrl = 'http://127.0.0.1:3000/poetry' + url + '/author/' + ev.target.innerHTML;
        const fetchUrl = 'https://www.vigoss.top/poetry' + url + '/author/' + ev.target.innerHTML;
        fetch(fetchUrl).then(response => response.json()).then(json => {
            that.setState({ poems: json });
        });
    }

    render() {
        const { poets, url } = this.props;
        const pts = poets.map((poet, index) => <li style={{ width: '80px', margin: '2px' }} key={index} onClick={this.onClick}><Link to={`${url}/${poet}`}>{poet}</Link></li>);
        const poemType = url.slice(1);
        return (
            <div>
                <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', alignContent: 'space-around' }}>{pts}</ul>
                <hr />

                <Route exact path={url} render={() => <h3>poets</h3>} />
                <Route path={`${url}/:poet`} render={({ match }) => <Poetry poet={match.params.poet} poemType={poemType} poems={this.state.poems} />} />
            </div>
        );
    }
}

class Poetry extends React.Component {
    render() {
        const poems = this.props.poems.map(poem => <Poem key={poem._id} poem={poem} />);
        return <div style={{ textAlign: 'center' }}>{poems}</div>;
    }
}

export default Poets;