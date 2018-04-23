import React from 'react';
import ReactDOM from 'react-dom';

export class Hello extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: 'red'
        };
    }

    render() {

        setTimeout(() => {
            this.setState({color: 'green'});
        }, 1000);

        return <h1>{this.state.color}</h1>
    }

    static create(node) {
        ReactDOM.render(<Hello/>, node);
    }
}

