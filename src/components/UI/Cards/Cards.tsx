"use client";
import { Result } from '@/interface/Iproducts';
import Image from 'next/image'
import React from 'react'

interface IProps {
    products: Result[]
}


const Cards = ({ products }: IProps) => {

    console.log(products)

    return (
        <div
            className="card flex justify-center item-center w-full h-full flex-col bg-white rounded-lg"
        >

            {
                products.map((product) => (
                    <div
                        key={product.id}
                        className="flex justify-start item-center flex-row bg-white-700 mt-5 p-5 ml-5"
                    >
                        <button
                            onClick={() => console.log('hola')}
                        >
                            <Image
                                src={product.thumbnail}
                                alt="Picture of the author"
                                width={180}
                                height={150}
                                className='object-contain mr-10 '
                            />
                        </button>


                        <div
                            className="flex flex-col top mi-div w-64 h-40"
                        >
                            <h1
                                className="text-2xl font-bold text-black mb-5"
                            >
                                $
                                {
                                    product.price.toLocaleString('es-AR')
                                }
                            </h1>
                            <p
                                className="text-black"
                            >
                                {
                                    product.title
                                }
                            </p>
                        </div>

                        <div
                            className='flex flex-1'
                        />

                        <div
                            className="flex items justify-center items-start"
                        >
                            <p
                                className="text-sm font-bold text-gray-700 "
                            >
                                {
                                    product.address.state_name
                                }
                            </p>


                        </div>

                    </div>

                ))
            }







        </div>
    )
}

export default Cards