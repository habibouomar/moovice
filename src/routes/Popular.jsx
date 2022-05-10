import React from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Popular extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount = () => {
        axios('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5890ce75a89afa87173ecf06602230ab').then((reponse) => {
            const moviesList = reponse.data.results
            console.log(moviesList);

            this.setState({
                movies: moviesList
            })
        })
    }

    render() {
        return (

            <div className='row mt-5'>
                {this.state.movies.map(movie => {
                    return <Card
                        title={movie.title}
                        resume={movie.overview}
                        date={movie.release_date}
                        picture={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} />
                })}
            </div>

        )
    }
}