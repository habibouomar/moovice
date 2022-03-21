import React from 'react';
import { NavLink } from 'react-router-dom';
import { Router } from './router/Router';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <header>
                    <h1>Moovice</h1>

                    <nav>

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/Popular">Popular</NavLink>
                        <NavLink to="/PopularBattle">Popular Battle</NavLink>
                        <NavLink to="/Weekly">Weekly</NavLink>
                        <NavLink to="/WeeklyBattle">Weekly Battle</NavLink>
                        <NavLink to="/Favorites">Favorite</NavLink>

                    </nav>

                
                </header>
                <Router />
            </div>
        )
    }
}
