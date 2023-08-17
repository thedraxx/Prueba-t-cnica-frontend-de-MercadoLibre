"use client";
import { Result } from '@/interface/Iproducts';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface IProps {
    products: Result[]
}

const Cards = ({ products }: IProps) => {
    return (
        <>
            <div
                className="card flex justify-center item-center w-full h-full flex-col bg-white rounded-lg"
            >
                {
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="flex justify-start item-center flex-row bg-white-700 mt-5 p-5 ml-5"
                        >
                            <Link
                                href={`/product/${product.id}`}
                            >
                                <Image
                                    src={product.thumbnail}
                                    alt="Picture of the author"
                                    width={180}
                                    height={150}
                                    className='object-contain mr-5 '
                                />
                            </Link>

                            <div
                                className="flex flex-col top mi-div h-50 p-5 w-64 "
                            >
                                <h1
                                    className="font-bold text-black mb-5 sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl"
                                >
                                    $
                                    {
                                        product.price.toLocaleString('es-AR')
                                    }
                                </h1>
                                <p
                                    className="font-bold text-xs text-black  xs:text-xs sm:text-sm md:text-xl"
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
                                    className=" font-bold text-gray-700  text-xs sm:text-sm md:text-md"
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
        </>
    )
}

export default Cards