import React from 'react'
import Cards from '../Cards/Cards'
import { Iproducts, Result } from '@/interface/Iproducts';

const getProducts = async () => {
    const urlToFetch = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4");
    const response: Iproducts = await urlToFetch.json();
    const products: Result[] = response.results;
    return products;
}


const ListOfProducts = async () => {

    const products = await getProducts()

    return (
        <div
            className='flex flex-1 w-7/12 h-full bg-white mt-10 rounded-lg shadow-lg mb-10'
        >
            <Cards
                products={products}
            />
        </div>
    )
}

export default ListOfProducts