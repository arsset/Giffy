
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import { useCallback } from 'react';

export default function Home () {

    const { gifs} = useGifs();
    const [ location, pushLocation] = useLocation();

    const handleSubmit = useCallback(({keyword}) => { //useCallback para memorizar la función
      pushLocation(`/search/${keyword}`);
    }, [ pushLocation] );

  return (
    <>
        <SearchForm onSubmit={handleSubmit} />

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
