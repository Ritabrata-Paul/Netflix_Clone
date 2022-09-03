import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Movies from './Pages/Movies';
import Netflix from './Pages/Netflix';
import Player from './Pages/Player';
import Signup from './Pages/Signup';
import TvShows from './Pages/TvShows';
import UserLiked from './Pages/UserLiked';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element = {<Login /> }/>
        <Route exact path = "/signup" element = {<Signup /> }/>
        <Route exact path="/player" element={<Player />} />
        <Route exact path = "/" element = {<Netflix /> }/>
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TvShows />} />
        <Route exact path="/mylist" element={<UserLiked />} />

      </Routes>
    </BrowserRouter>
  );
}
