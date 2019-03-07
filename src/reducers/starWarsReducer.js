import { FETCHING,
         SUCCESS,
         FAILURE } from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
    return {
      ...state,
      error: '',
      fetching: true
    };
    case SUCCESS:
      return {
        ...state,
        error: '',
        fetching: false,
        characters: action.payload
    };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
    };
    default:
      return state;
  }
};
