import { useEffect, useRef} from 'react'


export default function useSEO ({ description, title }){

    const prevTitle = useRef( document.title );
    const prevDescription = useRef( document.querySelector('meta[name="description"]').getAttribute('content'));

    useEffect(function (){

        const prevoutTitle = prevTitle.current;

        if ( title ){
            document.title = `${title} | Giffy`;

        }

        return () => {
            console.log('effect title');
            document.title = prevoutTitle
        } // resetea el efecto, se ejecuta cuando se desmonta el efecto
    }, [ title ])

    useEffect(function (){
        const metaDescripcion = document.querySelector('meta[name="description"]')

        const previousDescription = prevDescription.current;

        if ( description){
            metaDescripcion.setAttribute('content', description)
        }

        return () => metaDescripcion.setAttribute('content', previousDescription)
        
    }, [ description ])
}