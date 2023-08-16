import { SearchState } from "./SearchProvider";


type SearchActionType = 
  | {type: '[Search] - changeInput', payload: string}

export const SearchReducer = (state:SearchState, action:SearchActionType): SearchState => {
    switch (action.type) {
        case '[Search] - changeInput':

           return {
                ...state,
                search: action.payload
            }

        default:
            return state;
    }
}