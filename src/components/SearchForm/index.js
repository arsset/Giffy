import css from "./SearchForm.module.css";

import { useLocation } from "wouter";
import React from "react";
import useForm from "./hooks";

const RATINGS = ["g", "pg", "pg-13", "r"];


function SearchForm( {initialKeyword, initialRating}) {


  const { keyword, rating, times, updateKeyword, updateRating, resetFilter }= useForm({ initialKeyword, initialRating});
  const [, pushLocation] = useLocation();

  const handleChange = (evt) => {
    //setKeyword(evt.target.value);
    updateKeyword(evt.target.value)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    updateRating( evt.target.value );
   
  };

  const handleReset= (evt) =>{
    evt.preventDefault();
    resetFilter('', 'g')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css["c-search"]}>
        <button className={css["c-search-btn"]}>Buscar</button>
        <input
          className={css["c-search-input"]}
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Rating types</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        
        <small>{times}</small>
        <a href=';' className={css["c-search-btn"]} onClick={handleReset}>Resetear</a>
      </form>
    </>

    
  );
}

export default React.memo(SearchForm);
