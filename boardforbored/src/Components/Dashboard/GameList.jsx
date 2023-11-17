import * as React from "react";
import '../../CSS/card.css';
import { gamedata } from "../../data/gamesList";
import { Link, useNavigate } from "react-router-dom";
export default function GameList(props) {
    return (
        <section className="items-stretch flex w-full justify-between gap-5 mt-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <div className="container">
                <CardContainer cards={gamedata} />
            </div>


        </section>
    );
}

function Card(props) {
    const navigate = useNavigate();

    return (<div className="card border-yellow-500" onClick={() =>  navigate('/selected', { state: { id: props.id } })}>
        <img loading={props.img.loading} srcSet={props.img.srcset}
            alt={props.alt || 'Image'} className={props.img.className} />
        {/* <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.price}</p>
        </div> */}
        <div className="bg-yellow-500 bg-opacity-50 flex items-stretch justify-between gap-0">
            <div className="justify-center text-black text-lg">{props.title}</div>
            <div className="justify-center text-black text-right text-lg">{props.price}</div>
        </div>
    </div>)
};

const CardContainer = (props) => (
    <div className="cards-container">
        {
            props.cards.map((card) => (
                <Card title={card.name} id={card.id} key={card.id}
                    price={card.price}
                    img={card.img}
                    className={card.className} />
            ))
        }
    </div>
);