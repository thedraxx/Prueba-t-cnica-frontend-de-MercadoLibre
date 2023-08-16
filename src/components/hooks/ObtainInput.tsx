
import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export const ObtainInput = () => {

    const { search } = useContext(SearchContext)

    return {
        search
    }
}
