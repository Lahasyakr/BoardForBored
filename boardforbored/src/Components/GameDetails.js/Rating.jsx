import * as React from "react";
import { gamedetails } from "../../data/gamedata";

import { Rate, Avatar } from 'antd';
import Modal from "../../CommonComponents/Modal";


export default function Rating(props) {
    let ratingData = gamedetails[props.id - 1]?.rating;
    const [openModal, setOpenModal] = React.useState(false);
    const [newRating, setNewRating] = React.useState(5);
    const [newreview, setNewReview] = React.useState("");


    return (
        <>
            <section className="flex flex-col w-full items-stretch pt-3 pb-10">
                <h1 className="text-black text-xl font-bold leading-10 w-full -mr-5 max-md:max-w-full">
                    Reviews
                </h1>
                <div className="flex w-[234px] max-w-full items-stretch gap-4 mt-8 self-start max-md:justify-center max-md:mt-10">
                    <Rate value={ratingData?.global} disabled />
                </div>
                <h2 className="text-black text-xl leading-8 w-full -mr-5 mt-1 max-md:max-w-full">
                    {ratingData?.global} out of 5
                </h2>
                <h2 className="text-zinc-500 text-xl leading-8 w-full -mr-5 mt-1 max-md:max-w-full">
                    2 global ratings
                </h2>
                <button onClick={() => { setOpenModal(true) }}
                    className="text-gray-700 text-center text-xl leading-5 whitespace-nowrap justify-center items-stretch shadow-sm bg-gray-300 bg-opacity-80 w-[209px] max-w-full mt-4 px-1 py-3 rounded-xl self-start"
                >
                    Add a review
                </button>
                {ratingData?.individualRating?.map((item, key) => {
                    return (<div id={key} className="flex flex-col items-stretch pt-5">
                        <div className="flex flex-row gap-2 pt-2 ">
                            <Avatar size={"large"}>{item?.name[0]}</Avatar>
                            <div className="justify-center text-black text-center text-xl leading-8 self-center my-auto">
                                {item?.name}
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <Rate value={item?.rating} disabled />
                        </div>
                        <div>{item?.desc}</div>
                    </div>)
                })
                }
            </section>
            {openModal && <Modal
                title="Add a review"
                open={openModal}
                onSubmit={() => {
                    ratingData?.individualRating.push({
                        rating: newRating,
                        name: "new name",
                        desc: "newreview"
                    })
                    setOpenModal(false)
                }}
                onCancel={() => setOpenModal(false)}
                okText={"Submit"}
                cancelText={"Cancel"}
            >
                <Rate value={newRating} onChange={(value) => setNewRating(value)} />
                {/*  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your message</label> */}
                <textarea id="message" rows="4" onChange={(e) => setNewReview(e.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."></textarea>
            </Modal>}
        </ >
    )
}