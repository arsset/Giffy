const { useReducer } = require("react");

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    RESET_FILTERS: 'reset_filter',
}  

const reducer =( state, action)=>{

    switch (action.type) {
  
      case  ACTIONS.UPDATE_KEYWORD:
        return {
          ...state,
          keyword: action.payload,
          times: state.times + 1
        };
        
      case ACTIONS.UPDATE_RATING:
        return {
          ...state,
          rating: action.payload
        };
  
      case ACTIONS.RESET_FILTERS:
        console.log(action.payload.keyword);
        return {
          ...state,
          keyword: action.payload.keyword,
          rating: action.payload.rating
        };
  
      default:
        return state;
    }
   
  }
  
  export default function useForm ({ 
    initialKeyword = '', 
    initialRating = 'g'
  } = {}) {
  
    // useReducer es una forma para guardar el estado para reducir use estado por cada filtro que se agrege 
    const [state, dispatch ] = useReducer( reducer, {
      keyword: decodeURIComponent(initialKeyword),
      rating: initialRating,
      times: 0
    }) // recibe 1 estado, dispatch = ejecutar acciones para actualizar el estado
  
    const { keyword, rating, times} = state;
  
    return { 
      keyword,
      rating, 
      times,
      updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword} ),
      updateRating:  rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating}),
      resetFilter: (keyword, rating) => {  dispatch({ type: ACTIONS.RESET_FILTERS, payload: { rating, keyword } }) }
    };
  }