"use client"
import { useReducer } from 'react';
import { SearchContext } from './SearchContext';
import { SearchReducer } from './SearchReducer';

export interface SearchState {
    search: string;
}

const Search_INITIAL_STATE: SearchState = {
    search: "",
};

interface Props {
    children: React.ReactNode;
}

export const SearchProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(SearchReducer, Search_INITIAL_STATE)

    const changeValueInput = (value: string) => {
        dispatch({ type: "[Search] - changeInput", payload: value })
    }

    return (
        <SearchContext.Provider value={{
            ...state,
            changeValueInput
        }}>
            {children}
        </SearchContext.Provider>
    )
}