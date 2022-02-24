import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';

export default function Home () {

    const { gifs} = useGifs();
   

  return (
    <>
        <Helmet>
          <title>Home | Giffy</title>
        </Helmet>

        <header className="o-header">
          <SearchForm initialKeyword='' initialRating='g'/>
        </header>

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
