import React from 'react';
import { NavLink } from 'react-router-dom';
import { Router } from './router/Router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {

    render() {
        return (
            <>
                <body className="text-white bg-dark">
                    <div className="cover-container d-flex w-100 h-100vh p-3 mx-auto flex-column">
                        <header className="mb-5">
                            <div>
                                <h3 className="float-md-start mb-0">Moovice</h3>
                                <nav className="nav nav-masthead justify-content-center float-md-end">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                    <NavLink className="nav-link" to="/popular">Popular</NavLink>
                                    <NavLink className="nav-link" to="/popularBattle">Popular Battle</NavLink>
                                    <NavLink className="nav-link" to="/devChoice">Dev's Choice</NavLink>
                                    <NavLink className="nav-link" to="/favorite">Favorite</NavLink>
                                </nav>
                            </div>
                        </header>
                            <Router />
                        <footer className="mt-auto text-white-50">
                            <p>The World Is Mine : <a href="https://habibouomar.github.io" target="_blank" rel="noreferrer" className="text-white">Portfolio</a> - Accés Github <a href="https://urlz.fr/iba3" target="_blank" rel="noreferrer" className="text-white">@habibouomar</a>.</p>
                        </footer>
                    </div>
                </body>
            </>
        )
    }
}
