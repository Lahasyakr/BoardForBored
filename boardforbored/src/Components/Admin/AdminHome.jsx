
import * as React from "react";
import { useSelector } from 'react-redux';
import Header from "../../CommonComponents/Header";
import MyGames from "./MyGames";
import ManageOrders from "./ManageOders";



export default function AdminHome(props) {
    const [isFirstSelected, setisFirstSelected] = React.useState(true)
    return (
        <>
            <Header isAdmin={true}/>
            <div className="flex flex-col px-5 lg:px-48 py-5 mb-12 overflow-auto">

                <div className="inline-flex gap-5 w-[100%] lg:w-[620px] rounded-md shadow-sm" role="group">
                    <button onClick={() => setisFirstSelected(true)}
                        className={`justify-center text-white text-center text-lg font-medium bg-gray-600 grow items-center pt-2 pb-2 rounded-xl ${!isFirstSelected ? 'bg-opacity-60' : ''}`}>
                        My games
                    </button>
                    <button onClick={() => setisFirstSelected(false)}
                        className={`justify-center text-white text-center text-lg font-medium max-w-[50%] bg-gray-600 grow items-center p-3 rounded-xl ${isFirstSelected ? 'bg-opacity-60' : ''}`}>
                        Manage Orders
                    </button>
                </div>
                <div className="self-stretch flex w-full items-stretch justify-between gap-px mt-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    {isFirstSelected ? <MyGames /> : <ManageOrders />}
                </div>
            </div>
        </>
    )
}