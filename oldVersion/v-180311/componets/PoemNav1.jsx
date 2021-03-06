import { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Poets from './Poets1';
import { mapStateToProps, mapDispatchToProps } from '../store/vgStore';

@connect(mapStateToProps, mapDispatchToProps)
export default class PoemNav extends Component {
    render() {
        const { poets, poems, getPoet, getPoem } = this.props;
        const ulStyle = { display: 'flex', listStyle: 'none', alignContent: 'space-around' };
        const liStyle = { margin: '10px' };
        return(
            <Router>
                <div>
                    <ul style={ulStyle}>
                        <li style={liStyle}><Link to='/'>Home</Link></li>
                        <li style={liStyle} onClick={getPoet}><Link to='/songPoetry'>songPoetry</Link></li>
                        <li style={liStyle} onClick={getPoet}><Link to='/northernSongPoem'>northernSongPoem</Link></li>
                        <li style={liStyle} onClick={getPoet}><Link to='/southernSongPoem'>southernSongPoem</Link></li>
                    </ul>
                    <hr />

                    <Route exact path='/' render={() => <h2>Home</h2>} />
                    <Route path='/songPoetry' render={({ match }) => <Poets url={match.url} poets={poets} getPoem={getPoem} poems={poems} />} />
                    <Route path='/northernSongPoem' render={({ match }) => <Poets url={match.url} poets={poets} getPoem={getPoem} poems={poems} />} />
                    <Route path='/southernSongPoem' render={({ match }) => <Poets url={match.url} poets={poets} getPoem={getPoem} poems={poems} />} />
                </div>
            </Router>
        );
    }
}