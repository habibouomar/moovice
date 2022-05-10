import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../routes/Home';
import { Popular } from '../routes/Popular';
import { PopularBattle } from '../routes/Popular-battle';
import { Favorites } from '../routes/Favorites';

export class Router extends React.Component {
   
    render() {
        return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Popular" element={<Popular/>}/>
                <Route path="/PopularBattle" element={<PopularBattle/>}/>
                <Route path="/Favorites" element={<Favorites/>}/>
            </Routes>
        </>
        )
    }
}