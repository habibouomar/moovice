import React from 'react';

export class Favorites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            favIDs: this.getStorage(),
        }
    }

    getStorage = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        console.log(favorites);

        if (favorites === null) {
            return [];
        }
        return favorites;
    }

    getMovie = async (ID) => {
        const URL = ""

    }



    render() {
        return (
            <div>
                <h1>Favorites</h1>
            </div>
        );
    }
}