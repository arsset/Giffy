const { useRef, useState, useEffect } = require('react');

export default function useNearScreen ({ distance='100px' }) {

    const [ isNearScreen, setIsNearScreen ] = useState(false);
    const fromRef = useRef(); // es un baul para guardar y no cambioa entre renderizados
  
    useEffect(() => {
      
      let observer;
  
      const onChange = ( entries, observer ) => {
  
        const el = entries[0];
  
        if ( el.isIntersecting ){
          setIsNearScreen(true);
          //observer.unobserver(el);
          observer.disconnect();
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
    
        observer.observe( fromRef.current );
      })
  
      return () => observer && observer.disconnect();
  
  
    });
  
    return { isNearScreen, fromRef };
  }