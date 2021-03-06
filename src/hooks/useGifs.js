import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;

export function useGifs ({ keyword, rating } = { keyword: null }) {

    const [ loading, setLoading] = useState(false);
    const [ loadingNextPage, setLoadingNextPage] = useState(false);
    const [ page, setPage ] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifsContext)
    //const [ gifs, setGif ] = useState([]);
    const keyWordToUse = keyword || localStorage.getItem('lasKeyword') || 'random'
    
    
    useEffect( function () { // se ejecuta cada vez que se renderiza el componente
      setLoading(true);
      
        getGifs( {keyword: keyWordToUse, rating})
            .then ( gifs => {
              setGifs(gifs);
              setLoading(false);

              localStorage.setItem('lasKeyword', keyword);

            });
        
    }, [keyWordToUse, keyword, setGifs, rating] );


    useEffect( function () {
      if ( page === INITIAL_PAGE ) return

      setLoadingNextPage(true)

      getGifs( { keyword: keyWordToUse, rating,  page })
        .then( nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs));
          setLoadingNextPage(false)
        })
    },[keyWordToUse, rating, page, setGifs] )

    return { loading, loadingNextPage, gifs, setPage };
}