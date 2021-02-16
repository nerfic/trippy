import React, { Component } from 'react'

export default class HotelsPage extends Component {
    render() {
        return (
            <div>
                <p>{this.props.match.params.id}</p>
            </div>
        )
    }
}