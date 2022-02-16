

import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';

export default function Home () {

    const [ keyword, setKeyword] = useState('');
    const { gifs} = useGifs();
    const [ pushLocation] = useLocation();


    
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(keyword);
        pushLocation(`/search/${keyword}`);

    };

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }


  return (
    <>
        <h3>Los gifs más populares</h3>

        <form onSubmit={ handleSubmit }>
            <input placeholder="Search a gif for...." onChange={handleChange} type="text" value={keyword}/>
        </form>

        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches/>
          </div>
        </div>

        <h3>Última búsqueda</h3>
        <ListOfGifs gifs={gifs} />
    
    </>
  )
}
