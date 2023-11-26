import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart } from "../../redux/actions";

export default function NonEmptyCart(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const subTotal = () => {
        let total = 0;
        props.cartItems.map((item) => {
            total += item.game.price * item.quantity
        })
        return total;
    }
    return (

        <main className="flex flex-col items-stretch md:px-28 px-5 py-5" >
            <div className="flex justify-between gap-6 px-5 max-md:flex-wrap max-md:justify-center">
                <section className="flex grow basis-[0%] flex-col items-stretch mt-5 max-md:max-w-full">
                    <h2 className="justify-center text-yellow-500 font-bold text-opacity-90 text-center text-3xl leading-8 whitespace-nowrap max-md:max-w-full">
                        Your Shopping Cart
                    </h2>
                    {props.cartItems.map((item, key) => {
                        return (<div key={key} className="border bg-white mt-7 pl-3 pr-2 pt-2.5 pb-4 rounded-3xl border-solid border-black max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                                    <img
                                        loading="lazy"
                                        srcSet={item.game.mainPhoto}
                                    />
                                </div>
                                <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex flex-col max-md:max-w-full max-md:mt-7">
                                        <div className="self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                                            <h3 className="justify-center text-gray-600 text-opacity-90 text-center text-2xl font-bold leading-8 mt-1">
                                                {item.game.name}
                                            </h3>
                                            <button onClick={() => {
                                                dispatch(removeFromCart(key))
                                            }}><img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e6bf23f-43f7-43a9-b9af-8eb4fc1ac5d4?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                                    className="aspect-square object-contain object-center w-[25px] mt-0 pt-0 pr-0 fill-black fill-opacity-50 overflow-hidden shrink-0 max-w-full"
                                                /></button>
                                        </div>
                                        <div className="flex w-[166px] max-w-full justify-between gap-5 mt-2">
                                            <div className="justify-center text-gray-600 text-opacity-90 text-center text-xl leading-8">
                                                ${item.game.price * item.quantity}
                                            </div>
                                            <div className="justify-center text-gray-600 text-opacity-90 text-center text-xl leading-8">
                                                Days: {item.days}
                                            </div>
                                        </div>
                                        <div className="text-gray-600 text-opacity-90 text-xl leading-8 self-stretch mt-2 max-md:max-w-full">
                                            Qty: {item.quantity}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </section>
                <div className="bg-gray-600 self-stretch w-[2px] shrink-0 h-auto sm:hidden md:block" />
                <section className="flex basis-[30%] flex-col items-stretch mt-24 max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-5">
                        <h2 className="justify-center text-gray-600 text-opacity-90 text-center text-3xl font-bold leading-8">
                            Order Total
                        </h2>
                        <div className="justify-center text-gray-600 text-opacity-90 text-center text-3xl font-bold leading-8">
                            ${subTotal()}
                        </div>
                    </div>
                    <div className="text-white text-center text-3xl leading-5 capitalize whitespace-nowrap justify-center items-stretch
                     shadow-sm bg-yellow-500 mt-12 px-4 py-4 rounded-xl max-md:pr-0 max-md:mt-8">
                        <button className="block w-full h-full font-200"
                            onClick={() => {
                                navigate('/checkout', { state: { total: subTotal(), itemObj: props.cartItems, emptyCart:true } })
                            }}>
                            Proceed to Checkout
                        </button>
                    </div>
                </section>
            </div>
        </main>


    )
}



