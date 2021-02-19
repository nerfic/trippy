import React, { Component } from 'react'

export default class RoomCard extends Component {
    render() {
        return (
            <div className="card mt-3 mb-3">
                <div className="card-header bg-success text-light"><b>Chambres disponible</b></div>
                <div className="card-body">
                    <h5>Nous avons trouvé {this.props.totalRoom} chambres disponible</h5>
                    {this.props.room == undefined &&
                        <p>Aucune chambre disponible</p>
                    }
                    {this.props.room !== undefined &&
                        this.props.room.map((room, index) => {
                            return (
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <i class="fas fa-user-friends"></i> {room.people} personnes max - {room.price}€/nuit
                                        <div>
                                            <button className="btn btn-success" onClick={() => { this.props.onClick(room.price) }}>Choisir</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button className="btn btn-success">Voir plus de chambre</button>
                </div>
            </div>
        )
    }
}
