import React from 'react';


export class Card extends React.Component {

    onClickHandler = () => {

        if (this.props.onFavorite) {
            this.props.onFavorite(this.props.id)
        }

    }

    render() {
        return (

                <div className='col-sm-3 pb-4' onClick={this.onClickHandler}>

                    <img className="card-img-top" src={this.props.picture} alt="" />

                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{this.props.title}</h5>
                        <p className="card-text text-justify">{this.props.resume}</p>
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">{this.props.date}</small>
                    </div>
                </div>
           
        );
    }
}
