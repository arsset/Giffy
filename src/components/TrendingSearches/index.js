import ContentLoading from "components/ContentLoader";
import useNearScreen from "hooks/useNearScreen";
import React, { Suspense } from "react";

const TrendingSearches = React.lazy(
  ()=> import('./TrendingSearches')
)


export default function LazyTrending(){

  const {isNearScreen, fromRef} = useNearScreen({distance:'100px'});
  
  return <div ref={ fromRef }>
   
      { isNearScreen 
        ? <Suspense fallback={<ContentLoading/>}>
            <TrendingSearches />
          </Suspense>
        : null}
  </div>
}