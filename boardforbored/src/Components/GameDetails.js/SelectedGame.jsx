import * as React from "react";
import Details from "./Details";
import Actions from "./Actions";
import Header from "../../CommonComponents/Header";
import Heading from "./Heading";
import { useLocation } from "react-router-dom";
import Rating from "./Rating";
import AboutGame from "./AboutGame";

export default function SelectedGame(props) {
    const location = useLocation();

    return (
        <>
            <Header />
            <div className="w-full justify-center px-40 py-5">
                <Heading id={location.state.id} />
                <div className="flex">
                    <Details id={location.state.id} />
                    <Actions id={location.state.id} />
                </div >
                <div className="mt-3">
                    <AboutGame id={location.state.id} />
                </div>

                <Rating id={location.state.id} />

            </div>
        </>
    );
}