import React, { Component } from 'react'

export default class HotelsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hotel: ""
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3002/api/hotels/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    hotel: response
                })
            })
    }

    render() {
        return (
            <div>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}