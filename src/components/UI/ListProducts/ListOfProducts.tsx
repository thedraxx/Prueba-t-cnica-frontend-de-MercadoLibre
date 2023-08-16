"use client"
import React, { useContext, useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import { Iproducts, Result } from '@/interface/Iproducts';
import { SearchContext } from '@/components/context/SearchContext';

const getProducts = async (search: string) => {
    const urlToFetch = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`);
    const response: Iproducts = await urlToFetch.json();
    const products: Result[] = response.results;
    return products;
}

const ListOfProducts = () => {

    const [products, setproducts] = useState<Result[] | []>([])
    const { search } = useContext(SearchContext)

    useEffect(() => {
        getProducts(search)
            .then((products) => {
                setproducts(products)
            })
    }, [search])

    return (
        <>
            {
                products.length === 0 ? (
                    <div
                        className='flex flex-1 w-7/12 h-full bg-gray mt-10 rounded-lg  mb-10'
                    />
                ) : (
                    <div
                        className='flex flex-1 w-7/12 h-full bg-white mt-10 rounded-lg shadow-lg mb-10'
                    >
                        <Cards
                            products={products}
                        />
                    </div>
                )
            }
        </>
    )
}

export default ListOfProducts