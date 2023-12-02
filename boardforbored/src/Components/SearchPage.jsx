import * as React from "react";
import Header from "../CommonComponents/Header";
import { Rate, Tooltip } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchPage() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            {location?.state?.searchedItem &&
                <>
                    <Header />
                    <section className="flex flex-col md:px-44 px-5 py-5 flex-wrap">
                        <div className="border pl-6 pr-20 py-2 rounded-xl border-solid border-gray-600 border-opacity-50 max-md:px-5">
                        <Tooltip title={'Click to open'} color="gray">
                            {location?.state?.searchedItem.map((item, key) => {
                                return (<div key={key} className="gap-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:justify-center"
                                    onClick={() => navigate('/selected', { state: { id: item?.id } })}>
                                    <div className="flex flex-col mb-2 items-stretch w-[20%] max-md:w-[50%] max-md:ml-0 max-md:justify-center">
                                        <img
                                            loading="lazy"
                                            srcSet={item?.mainPhoto}
                                            alt="Game image"
                                        />
                                    </div>
                                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0 max-md:justify-center">
                                        <div className="flex flex-col items-stretch px-5 max-md:mt-10">
                                            <header className="text-black text-3xl font-semibold">{item?.name}</header>
                                            <div className="text-green-600 text-3xl mt-5">
                                                {'$' + item?.price}
                                            </div>
                                            <div className="flex items-stretch gap-4 mt-6">
                                                <Rate value={item?.rating?.global} disabled style={{ fontSize: "2rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })}
                            </Tooltip>
                        </div>
                    </section>
                </>}
        </>
    );
}