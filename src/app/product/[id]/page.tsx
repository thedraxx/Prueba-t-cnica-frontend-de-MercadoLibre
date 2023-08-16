import { IdatailProduct } from '@/interface/IdetailProduct';
import Image from 'next/image';
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
        <div
            className='flex flex-1 w-full flex-col justify-start items-start bg-white h-screen '
        >
            <h1>Detalle del producto</h1>
            <h2>{getDetail.title}</h2>
            <Image
                src={getDetail.thumbnail}
                alt={getDetail.title}
                width={200}
                height={200}
            />
            <p>{getDetailDesc.plain_text}</p>


        </div>
    )
}

export default page