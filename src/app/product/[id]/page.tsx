import { IdatailProduct } from '@/interface/IdetailProduct';
import React from 'react'

const getDetailProduct = async (id: string) => {
    const urlToFetch = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const response: IdatailProduct = await urlToFetch.json();
    return response;
}

const getDetailDescription = async (id: string) => {
    const urlToFetch = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const response = await urlToFetch.json();
    return response;
}


const page = async ({ params: { id } }: { params: { id: string } }) => {

    const getDetail = await getDetailProduct(id);
    const getDetailDesc = await getDetailDescription(id);





    return (
        <div>page</div>
    )
}

export default page