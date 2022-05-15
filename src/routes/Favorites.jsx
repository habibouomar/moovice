import React from 'react';
import axios from "react";
import { Card } from "../components/Card";

export class Favorites extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            favIDs: this.getStorage(),
        }
    }

    getStorage = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        console.log(favorites);

        if (favorites === null) {
            return [];
        }
        return favorites;
    }

    getMovie = async (ID) => {
        const URL = `http://api.themoviedb.org/3/movie/${ID}?api_key=5890ce75a89afa87173ecf06602230ab`
        const reponse = await axios(URL);
        console.log(reponse);
        const movie = reponse.data;
        const movies = [...this.state.movies];
        movies.push(movie);
        console.log(movies);
        this.setState({ movies });
    }

    componentDidMount = () => {
        const favIDs = this.state.favIDs;
        for (const ID of favIDs) {
            this.getMovie(ID);
        }
    }

    render() {
        return (
            <div className='row mt-5'>

                {this.state.movies.map(movie => {

                    return <Card
                        title={movie.title}
                        resume={movie.overview}
                        date={movie.release_date}
                        picture={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
                        key={movie.id}
                        onFavorite={null}
                        id={movie.id}
                    />
                })}

            </div>
        );
    }
}