import * as React from "react";
import { gamedetails } from "../../data/gamedata";
export default function AboutGame(props) {
    return (
        <section className="flex flex-col w-full">
            <div className="font-bold text-xl mb-3">About Game</div>
            {gamedetails[props.id - 1].about.map((item, i) => {
                let list = item.split(":");
                return (
                    <p key={i}className="ml-3">
                        <span className="font-medium">{list[0] + ":"}</span>{list[1]}
                    </p>
                )
            })}
        </section>
    )
}