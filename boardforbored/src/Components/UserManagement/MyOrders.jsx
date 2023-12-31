import * as React from "react";
import { useSelector } from 'react-redux';
import Header from "../../CommonComponents/Header";
import { Link, useLocation } from "react-router-dom";

export default function MyOrders(props) {
    const myOrders = useSelector((o) => o.cartreducer.myOrders);
    const location = useLocation();
    return (
        <>
            <Header isAdmin={location?.state?.isAdmin}/>
            <div className="flex flex-col max-md:items-stretch px-2 lg:px-60 py-5">
                <Link to='/userinfo' state={{ isAdmin: location?.state?.isAdmin }}><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd97bff6-5462-40c3-9c7e-b3a59dde2325?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                    className="aspect-[1.85] object-contain object-center w-12 overflow-hidden max-w-full"
                /></Link>

                <div className="justify-center text-gray-600 text-3xl font-bold leading-5 self-stretch w-full -mr-5 mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-5 max-md:mt-10">
                    My orders
                </div>
                {myOrders?.length ? myOrders.map((item, key) => {
                    return (<div key={key} className="border w-[95%] mt-10 pl-6 pr-2.5 py-4 items-strtch rounded-xl border-solid border-gray-600 self-end max-md:max-w-full max-md:mt-10 max-md:pl-5">

                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[89%] max-md:w-full max-md:ml-0">
                                <div className="text-gray-600 text-xl leading-5 max-md:max-w-full max-md:mt-10">
                                    <span className="font-bold">
                                        {item?.game?.name}
                                        <br />
                                    </span>
                                    <div className="mt-6">Order number :{" "}
                                        <span className="font-base"> {" "} {1533 + key} <br /> </span>
                                    </div>
                                    <div className="mt-2">Picked up: {" "}
                                        <span className="font-base"> {item.toDate} <br /> </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="text-gray-600 text-xl font-semibold leading-5 my-auto max-md:mt-10">
                                    Due {item.fromDate}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
                ) : <div className="flex self-center justify-center text-yellow-500 text-xl md:text-2xl font-semibold leading-5 self-stretch w-full -mr-5 mt-20 max-md:max-w-full  max-md:leading-5 max-md:mt-10">
                    You have placed no orders.
                </div>}

            </div>
        </>
    )
}