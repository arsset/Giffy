import { useGifs} from 'hooks/useGifs';
import { useEffect, useState } from 'react';
import getSingleGif from 'services/getSingleGif';

export default function useSingleGif ({ id}) {
    const { gifs} = useGifs()
    const gifsFromCache = gifs.find( singleGif => singleGif.id === id);

    const [ gif , setGif] = useState(gifsFromCache);
    const [ isLoading, setIsLoading] = useState(false)
    const [ isError, setIsError] = useState(false)

    useEffect( function () {
        if( !gif){
            setIsLoading(true)
            // llamar al servicio
            getSingleGif( {id})
                .then ( gif => {
                    setGif( gif)
                    setIsLoading(false)
                    setIsError(false)

                }).catch( err =>{
                    setIsLoading(false)
                    setIsError(true)
                })
        }
    }, [ gif, id])
    
    return { gif, isLoading, isError};
}