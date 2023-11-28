


import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeAdminOrder, updateAdminOrders } from "../../redux/actions";


export default function ManageOrders(props) {
    const AdminOrders = useSelector((o) => o.cartreducer.AdminOrders);
    const dispatch = useDispatch();
    return (
        <>
            <div className="relative md:w-[100%] flex flex-col">
                <div className="overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-collapse border border-gray-300">
                        <thead className="text-white text-center text-lg leading-8 whitespace-nowrap border bg-gray-600 grow items-center px-5 py-3 border-solid border-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-2 border border border-gray-300">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 border-2 border border-gray-300">
                                    Order Deatils
                                </th>
                                <th scope="col" className="px-6 py-3 border-2 border border-gray-300">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {AdminOrders.map((item, key) => {
                                return (<tr key={key} className=" text-gray-800 bg-white  dark:bg-white-800 hover:bg-gray-200 dark:hover:bg-white-200">
                                    <td scope="row" className="text-center px-6 py-3 border-2 border border-gray-300">
                                        {item.name}
                                    </td>
                                    <td className="text-center px-6 py-3 border-2 border border-gray-300">
                                        {item.details}
                                    </td>
                                    <td className="px-6 py-3 border-2 border border-gray-300">
                                        <>
                                            <div className="flex items-stretch justify-center gap-5">
                                                <button onClick={() => dispatch(updateAdminOrders(key))} disabled={item.action !== 0} title={item.action == 0 ? `Mark it delivered` : 'Already delivered'}
                                                    className={`text-black text-center text-lg leading-8 whitespace-nowrap self-stretch grow items-center pt-1 pb-1 px-2 rounded-xl
                                                 ${item.action == 0 ? 'bg-green-800 bg-opacity-60' : 'bg-gray-400 bg-opacity-60'}`}>
                                                    Delivered
                                                </button>
                                                <button onClick={() => dispatch(removeAdminOrder(key))} disabled={item.action !== 1} title={item.action == 1 ? 'Mark it returned' : 'Not yet delivered'}
                                                    className={`text-black text-center text-lg leading-8 whitespace-nowrap self-stretch grow items-center pt-1 pb-1 px-2 rounded-xl 
                                                ${item.action == 1 ? 'bg-green-800 bg-opacity-60' : 'bg-gray-400 bg-opacity-60'}`}>
                                                    Returned
                                                </button>
                                            </div>
                                        </>
                                    </td>
                                </tr>)
                            })}

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}