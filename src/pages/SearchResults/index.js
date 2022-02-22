
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import  {useGifs} from 'hooks/useGifs';
import useNearScreen from "hooks/useNearScreen";
import { useEffect, useRef, useCallback } from "react";
import debounce from 'just-debounce-it';

export default function SearchResults ( { params }) {

    const { keyword } = params;
    const {  loading, gifs, setPage } = useGifs({ keyword});
    const externalRef = useRef()
    const { isNearScreen }= useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false
    });

    //const handleNextPage = () => setPage( prevPage => prevPage +1 );
    //const handleNextPage = () => console.log('next page');

    //useCallback se utiliza para guardar la función para que no se cree en cada renderizado del componente
    // debounce ejecuta una sola vez la función en un periodo de tiempo
    const debounceandleNextPage = useCallback( debounce( 
        () => setPage( prevPage => prevPage +1 ), 1000
    ), []);


    useEffect(() => {
      if( isNearScreen ) debounceandleNextPage();
    }, [debounceandleNextPage, isNearScreen ])
    

    return <>
        {
            loading
                ? <Spinner />
                : <>
                    <h3 className="App-title">
                    {decodeURI(keyword)}
                    </h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </>
        }
        <br/>
        {/* <button onClick={ handleNextPage}> Get net page</button> */}
    </>
};
