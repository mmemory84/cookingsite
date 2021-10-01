import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { FEATURED } from '../shared/featured';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: FEATURED
        };
    }

    render() {
        return <Directory featured={this.state.featured} />;
    }
}

export default Main;