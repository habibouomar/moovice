import React from 'react';
import { InputGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';
import { Card } from "../components/Card";

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            movies: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let text = event.target.value;
        console.log(text);

        this.setState({
            value: text,
        })

        const url = `https://api.themoviedb.org/3/search/movie?api_key=5890ce75a89afa87173ecf06602230ab&language=fr-FR&append_to_response=credits&query=${this.state.value}`

        axios(url).then((reponse) => {

            const moviesList = reponse.data.results
            console.log(moviesList);

                this.setState({
                    movies: moviesList
                })
        })
    }

    render() {
        return (
            <div>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Movie</InputGroup.Text>
                    <FormControl onChange={this.handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <div className='row mt-5'>
                    {this.state.movies.map(movie => {
                        return <Card
                            title={movie.title}
                            resume={movie.overview}
                            date={movie.release_date}
                            picture={'https://image.tmdb.org/t/p/w300/' + movie.poster_path} />
                    })}

                </div>
            </div>
        );
    }
}