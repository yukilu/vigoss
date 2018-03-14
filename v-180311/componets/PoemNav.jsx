import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Poets from './Poets';

class PoemNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { poets: [] };

        this.onClick = this.onClick.bind(this);
    }

    onClick(ev) {
        // const url = 'http://127.0.0.1:3000/poetry/' + ev.target.innerHTML;
        const url = 'https://www.vigoss.top/poetry/' + ev.target.innerHTML;
        const that = this;
        fetch(url).then(response => response.json()).then(json => {
            that.setState({ poets: json });
        });
    }

    render() {
        const poets = this.state.poets;
        return(
            <Router>
                <div>
                    <ul style={{ display: 'flex', listStyle: 'none', alignContent: 'space-around' }}>
                        <li style={{ margin: '10px' }}><Link to='/'>Home</Link></li>
                        <li style={{ margin: '10px' }} onClick={this.onClick}><Link to='/songPoetry'>songPoetry</Link></li>
                        <li style={{ margin: '10px' }} onClick={this.onClick}><Link to='/northernSongPoem'>northernSongPoem</Link></li>
                        <li style={{ margin: '10px' }} onClick={this.onClick}><Link to='/southernSongPoem'>southernSongPoem</Link></li>
                    </ul>
                    <hr />

                    <Route exact path='/' render={() => <h2>Home</h2>} />
                    <Route path='/songPoetry' render={({ match }) => <Poets url={match.url} poets={poets} />} />
                    <Route path='/northernSongPoem' render={({ match }) => <Poets url={match.url} poets={poets} />} />
                    <Route path='/southernSongPoem' render={({ match }) => <Poets url={match.url} poets={poets} />} />
                </div>
            </Router>
        );
    }
}

export default PoemNav;