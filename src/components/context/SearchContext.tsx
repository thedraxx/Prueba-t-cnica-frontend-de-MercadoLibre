import { createContext } from 'react';

export interface SearchContextProps {
    search: string;

    changeValueInput: (search: string) => void;
}

export const SearchContext = createContext({} as SearchContextProps);