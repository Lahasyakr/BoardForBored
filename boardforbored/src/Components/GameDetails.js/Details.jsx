import * as React from "react";
import { gamedetails } from "../../data/gamedata";
export default function Details(props) {
    return (
        <>
           
            <section className="flex">
                <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col max-md:mt-10">
                        <div className="bg-zinc-300 flex shrink-0 h-[116px] flex-col rounded-xl" />
                        <div className="bg-zinc-300 flex shrink-0 h-[116px] flex-col mt-9 rounded-xl" />
                        <div className="bg-zinc-300 flex shrink-0 h-[116px] flex-col mt-9 rounded-xl" />
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                        loading="lazy"
                        srcSet={gamedetails[props.id-1].mainPhoto}
                        className="aspect-[0.98] object-contain object-center w-[85%] h-1/5 overflow-hidden grow max-md:mt-10"
                        alt="Image description"
                    />
                </div>
            </section>
        </>
    )

}