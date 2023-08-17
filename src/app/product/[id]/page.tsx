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
            className='flex flex-1 w-full justify-center items-center h-full mt-10 flex-col sm:h-full md:h-full lg:h-full xl:h-full'
        >
            <div
                className='flex w-full flex-col justify-center items-start h-full  bg-white pt-10 mb-5 rounded-lg shadow-lg  sm:w-full md:w-full lg:w-7/12 xl:w-7/12'
            >
                <div
                    className='flex flex-col justify-center items-center h-full w-full pt-10 sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:items-center md:items-start lg:items-start xl:items-start '
                >
                    <Image
                        src={getDetail.thumbnail}
                        alt={getDetail.title}
                        width={350}
                        height={200}
                        className='content-normal p-10'
                    />

                    <div
                        className='flex flex-col justify-start items-start h-1/4 w-full sm:w-full md:w-3/12 lg:w-3/12 '
                    >
                        <h2
                            className='text-xl font-bold '
                        >
                            {getDetail.title}
                        </h2>
                        <h2
                            className='text-4xl font-bold mt-5 '
                        >
                            $ {getDetail.price.toLocaleString()}
                        </h2>

                        <button
                            className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10 w-full hover:bg-blue-700 transition-all duration-500 ease-in-out '
                        >
                            Comprar
                        </button>
                    </div>
                </div>

                <div
                    className='flex justify-start items-start h-auto w-full pb-10 flex-col mt-10 '
                >
                    <h1
                        className='text-2xl font-bold w-3/4 mb-5 ml-5'
                    >Descripcion del producto:</h1>
                    <h2
                        className='text-md font-weight-normal w-4/5 ml-5 '
                    >
                        {getDetailDesc.plain_text}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default page