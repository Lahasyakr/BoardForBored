import * as React from "react";
import Header from "../CommonComponents/Header";
import { message, Rate, Tooltip } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import CheckboxMenu from "../CommonComponents/CheckboxMenu";
import { gamedetails } from "../data/gamedata";

const category = ['Strategic', 'Fun', 'Dice', 'Adventure', 'Card Games', 'Puzzels'];
const SortItems = ['Price(Low to High)', 'Price(High to Low)', 'Alphabetical(A to Z)', 'Alphabetical(Z to A)']

export default function SearchPage() {
    const location = useLocation();
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const onFilterChange = (selection) => {
        if (selection.length == 0) {
            return;
        }
        else {
            let newData = JSON.parse(JSON.stringify(gamedetails));
            let filteredItem = newData.filter((item) => {
                return item.category.some(v => selection.includes(v));
            })
            if (filteredItem.length > 0) {
                navigate('/searchitem', { state: { searchedItem: filteredItem } })
            } else {
                messageApi.open({
                    type: 'warning',
                    className: 'ms-3 text-sm font-semibold border-yellow-500',
                    content: 'No items Found',
                });
            }
        }

    };
    const onSortChange = (selection) => {
        if (selection.length == 0) {
            return;
        }
        else {
            let newData = JSON.parse(JSON.stringify(gamedetails));
            let filteredItem = [];
            if (selection.includes('Price(Low to High)')) {
                filteredItem = newData.sort((a, b) => {
                    return a.price - b.price
                })
            } else if (selection.includes('Price(High to Low)')) {
                filteredItem = newData.sort((a, b) => {
                    return b.price - a.price
                })
            } else if (selection.includes('Alphabetical(A to Z)')) {
                filteredItem = newData.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            } else {
                filteredItem = newData.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            if (filteredItem.length > 0) {
                navigate('/searchitem', { state: { searchedItem: filteredItem } })
            }
        }

    };

    return (
        <>
            {location?.state?.searchedItem &&
                <>
                    <Header />
                    <div className="flex flex-col items-end pt-2">
                        <div className="flex items-stretch gap-4 mr-52 max-md:mr-2.5">

                            <CheckboxMenu options={category} onChange={onFilterChange} isFilter={true} />

                            <CheckboxMenu options={SortItems} onChange={onSortChange} isFilter={false} />

                        </div>

                    </div>
                    <section className="flex flex-col md:px-44 px-5 py-5 flex-wrap">


                        {location?.state?.searchedItem.map((item, key) => {
                            return (
                                <Tooltip key={key} title={'Click to open'} color="yellow" placement="top">
                                    <div key={key} className="border pl-6 pr-20 py-1 mt-2 rounded-xl border-solid border-gray-600 border-opacity-50 max-md:px-5">
                                        <div className="gap-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:justify-center"
                                            onClick={() => navigate('/selected', { state: { id: item?.id } })}>
                                            <div className="flex flex-col mb-2 items-stretch w-[15%] max-md:w-[30%] max-md:ml-0 max-md:justify-center">
                                                <img
                                                    loading="lazy"
                                                    srcSet={item?.mainPhoto}
                                                    alt="Game image"
                                                />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0 max-md:justify-center">
                                                <div className="flex flex-col items-stretch px-5 max-md:mt-10">
                                                    <header className="text-black text-2xl font-semibold">{item?.name}</header>
                                                    <div className="text-green-600 text-2xl mt-5">
                                                        {'$' + item?.price}
                                                    </div>
                                                    <div className="flex items-stretch gap-4 mt-6">
                                                        <Rate value={item?.rating?.global} disabled style={{ fontSize: "2rem" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tooltip>)
                        })}


                    </section>
                </>}
        </>
    );
}