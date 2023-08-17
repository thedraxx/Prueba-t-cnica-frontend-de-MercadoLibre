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
                        className='flex flex-1 h-full mt-10  mb-10 sm:w-9/12 md:7/12'
                    >
                    </div>
                ) : (
                    <div
                        className='flex flex-1 h-full bg-white mt-10 rounded-lg shadow-lg mb-10 sm:w-9/12 md:7/12'
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