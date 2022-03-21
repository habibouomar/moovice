import React from 'react';
import axios from 'axios';
import { Card } from '../components/Card';

export class PopularBattle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount = () => {
        axios('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5890ce75a89afa87173ecf06602230ab').then((reponse) => {
            const moviesList = reponse.data.results
            
            this.setState({
                movies: moviesList
            })
        })
    }

    nextMovies = () => {
        let currentBattle = this.state.currentBattle;
        currentBattle += 2;
        this.setState({ currentBattle });
    }

    onFavoriteHandler = (movieID) => {
        console.log(movieID);

        /**
        * JSON.Parse(): transforme une chaine de caractères en objet Javascript si le format le permet.
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
        */

        let favorites = JSON.parse(localStorage.getItem("favorites"));

        if (favorites === null) {
            favorites = [];
        }

        console.log("Favorites: ", favorites);

        /**
        * Permet de stocker dans le localstorage des élements sous forme de chaine de caracteres
        * ou de nombre
        */

        const isInFavorite = favorites.includes(movieID);
        console.log("isInFavorite: ", isInFavorite);

        if (isInFavorite === false) {
            favorites.push(movieID);
        }

        const favoritesString = JSON.stringify(favorites)

        localStorage.setItem("favorites", favoritesString);

        console.log(movieID);

        this.nextMovies();
    }

    render() {
        return (
            <>
                <h1>Poppular Battle</h1>

                <div>
                    {
                        /**
                     * Slice: permet de prendre une tranche du tableaux.
                     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
                     * */

                        this.state.movies.slice(this.state.currentBattle, this.state.currentBattle + 2).map(
                            movie => <Card
                                title={movie.title}
                                resume={movie.overview}
                                date={movie.release_date}
                                id={movie.id}
                                picture={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
                                onFavorite={this.onFavoriteHandler} />
                        )
                    }
                </div>

            </>
        );
    }
}