// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            astronauts: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                astronauts: data.people
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.astronauts.map(astronaut => <p>{astronaut.name}</p>)}
            </div>
        )
    }
}