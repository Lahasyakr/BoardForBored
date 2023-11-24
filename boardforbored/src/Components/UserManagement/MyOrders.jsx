import * as React from "react";
import { useSelector } from 'react-redux';
import Header from "../../CommonComponents/Header";
import { Link } from "react-router-dom";

export default function MyOrders(props) {
    const cartItems = useSelector((o) => o.cartreducer.cartItems);
    return (
        <>
            <Header />
            <div className="flex flex-col max-md:items-stretch px-2 lg:px-60 py-5">
                <Link to='/userinfo'><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd97bff6-5462-40c3-9c7e-b3a59dde2325?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                    className="aspect-[1.85] object-contain object-center w-12 overflow-hidden max-w-full"
                /></Link>
                <div className="justify-center text-gray-600 text-3xl font-bold leading-5 self-stretch w-full -mr-5 mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-5 max-md:mt-10">
                    My orders
                </div>
                <div className="border w-[95%] mt-10 pl-6 pr-2.5 py-4 items-strtch rounded-xl border-solid border-gray-600 self-end max-md:max-w-full max-md:mt-10 max-md:pl-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[89%] max-md:w-full max-md:ml-0">
                            <div className="text-gray-600 text-xl leading-5 max-md:max-w-full max-md:mt-10">
                                <span className="font-bold">
                                    Jaipur
                                    <br />
                                </span>
                                <div className="mt-6">Order number :{" "}
                                    <span className="font-base"> {" "} 1533 <br /> </span>
                                </div>
                                <div className="mt-2">Picked up: {" "}
                                    <span className="font-base"> Nov, 15, 2023 <br /> </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="text-gray-600 text-xl font-semibold leading-5 my-auto max-md:mt-10">
                                Due Nov 23, 2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}