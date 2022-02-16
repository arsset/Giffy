import Category from "components/Category";
import { useEffect, useState } from "react";
import getGifTrending from "services/getGifTrending";

export default function TrendingSearches() {
    const [ trends, setTrends] = useState([]);
    
    useEffect(() => {
      getGifTrending().then( setTrends)

    }, []);

    return <Category name="Tendencias" options={trends} />;
    
}