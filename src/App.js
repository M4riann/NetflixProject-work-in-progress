import React, { Fragment } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Route,Routes, Router } from 'react-router-dom';
import Seriale from './NavbarRoutes/Seriale';
import Filme from './NavbarRoutes/Filme'
import NoiSiPopulare from './NavbarRoutes/NoiSiPopulare'
import NoPage from './NavbarRoutes/NoPage';
import SearchResults from './Components/SearchResults';
import GenreSelectedMovies from './Components/GenreSelectedMovies';


function App() {
  return (
    
    <Fragment>
            <Routes>
                <Route path='/homepage' element={<HomePage/>}/> 
                <Route path='/seriale' element={<Seriale/>}/>
                <Route path='/filme' element={<Filme/>}/>
             
                <Route path="/search/:query" element={<SearchResults/>} />
                <Route path="/movies/:genreId" element={<GenreSelectedMovies/>}/>
                <Route path='*' element={<NoPage/>}/>
                <Route path='/search/:query/*' element={<NoPage/>}/>
           
            </Routes>
    </Fragment>
      
      
  )
}

export default App;
