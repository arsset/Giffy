import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {

    const [ loading, setLoading] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext)
    //const [ gifs, setGif ] = useState([]);
    const keyWorToUse = keyword || localStorage.getItem('lasKeyword') || 'random'
    

    useEffect( function () { // se ejecuta cada vez que se renderiza el componente
        setLoading(true);


        getGifs( {keyword: keyWorToUse})
            .then ( gifs => {
              setGifs(gifs);
              setLoading(false);

              localStorage.setItem('lasKeyword', keyword);

            });
        
    }, [keyWorToUse, keyword, setGifs] );

    return { loading, gifs };
}