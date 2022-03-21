import React from 'react';


export class Card extends React.Component {


    render() {
        return (

            <div className="card row col-3 " onClick={() => { this.props.onFavorite(this.props.id) }} >

                <img className="card-img-top" src={this.props.picture} alt="picture movie" />

                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.resume}</p>
                </div>

                <div className="card-footer">
                    <small className="text-muted">{this.props.date}</small>
                </div>
            </div>
        );
    }
}