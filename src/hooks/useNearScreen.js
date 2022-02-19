const { useRef, useState, useEffect } = require('react');

export default function useNearScreen ({ distance='100px' , externalRef , once=true }) {

    const [ isNearScreen, setIsNearScreen ] = useState(false);
    const fromRef = useRef(); // es un baul para guardar y no cambioa entre renderizados
  
    useEffect(() => {
      
      let observer;

      const element = externalRef ? externalRef.current : fromRef.current
  
      const onChange = ( entries, observer ) => {
  
        const el = entries[0];
  
        if ( el.isIntersecting ){
          setIsNearScreen(true);
          //observer.unobserver(el);
          once && observer.disconnect();
        } else {
          !once && setIsNearScreen(false);
        }
      }
  
      Promise.resolve(
        typeof IntersectionObserver !== 'undefined'
          ? IntersectionObserver
          : import('intersection-observer') // para dar soporte al intersection obserer en Internet Explorer
      ).then( () =>{
  
        observer = new IntersectionObserver( onChange, {
          rootMargin: distance
        });
    
        if ( element) observer.observe( element );
      })
  
      return () => observer && observer.disconnect();
  
  
    });
  
    return { isNearScreen, fromRef };
  }