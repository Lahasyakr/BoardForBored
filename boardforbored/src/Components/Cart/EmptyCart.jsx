import * as React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart(props) {
    return (

        <main className="flex flex-col items-stretch px-5">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdab9980-e002-4ae2-9654-9df2df49482f?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-[1.25] object-contain object-center w-[213px] fill-black overflow-hidden self-center 
                    max-w-full mt-28 max-md:mt-4"
            />
            <h2 className="justify-center text-gray-600 text-opacity-90 text-center text-3xl leading-10 self-center max-w-[446px] mt-14 max-md:mt-5">
                Your cart is empty
            </h2>
            <Link
                to="/dashboard"
                className="text-white text-center text-2xl leading-5 capitalize whitespace-nowrap justify-center items-center shadow-sm bg-yellow-500 
                    self-center w-[335px] max-w-full mt-10 px-5 py-3.5 rounded-xl max-md:mt-4"
            >
                Return to shop
            </Link>
        </main>

    )
}