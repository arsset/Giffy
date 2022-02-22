import { useEffect, useRef} from 'react'


export default function useTitle ({ title }){

    const prevTitle = useRef( document.title );

    useEffect(function (){

        const prevoutTitle = prevTitle.current;

        document.title = `${title} | Giffy`;

        return () => document.title = prevoutTitle; // cuando se desmonta el componente, ejecuta esta función
    }, [ title ])
}