

import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';

export default function Home () {

    const [ keyword, setKeyword] = useState('');
    const { gifs} = useGifs();
    const [ location, setLocation] = useLocation();

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(keyword);
        setLocation(`/search/${keyword}`);

    };

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }


  return (
    <>
        <h3>Los gifs más populares</h3>

        <form onSubmit={ handleSubmit }>
          <button>Buscar</button>
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
    
    </>
  )
}
