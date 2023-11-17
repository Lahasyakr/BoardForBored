import * as React from "react";
import { useNavigate } from "react-router-dom";
import { gamedetails } from "../../data/gamedata";
export default function Heading(props) {
    const navigate = useNavigate();
    return (
        <header className="flex gap-24 ">
            <button onClick={() => navigate(-1)}><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1c89f86-1120-4927-b3bc-1a2998008e25?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                alt="back"
            /></button>
            <h1 className="text-black font-bold text-2xl leading-10 self-center grow shrink basis-auto my-auto max-md:max-w-full">
                {gamedetails[props.id-1].name}
            </h1>
        </header>
    )
}