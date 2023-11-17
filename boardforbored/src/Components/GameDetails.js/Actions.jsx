import * as React from "react";
import { gamedetails } from "../../data/gamedata";
export default function Actions(props) {
    return (
        <>
            <section>
                <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col my-auto pb-2.5 max-md:max-w-full max-md:mt-10">
                        <div className="items-stretch flex w-[50%] max-w-full gap-2 px-5 self-start">
                            <div className="justify-center text-green-600 text-center text-3xl leading-8 border bg-white grow items-center px-5 py-2 rounded-3xl border-solid border-zinc-300">
                                $ {gamedetails[props.id-1].price}
                            </div>
                            <div className="text-gray-600 text-center text-xl leading-5 self-center whitespace-nowrap my-auto">
                                per day
                            </div>
                        </div>
                        <div className="items-stretch flex w-full max-w-full gap-2 px-5 self-start">
                            <div className="justify-between items-stretch border bg-white self-stretch flex gap-2.5 mt-4 pl-5 pr-8 py-3.5 rounded-3xl border-solid border-zinc-300 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                <div className="text-gray-600 text-xl leading-6">Select Quantity</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8237f3f6-6b11-405a-949e-7198db5c5009?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                    className="aspect-[2.14] object-contain object-center w-[15px] stroke-[3px] stroke-gray-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                    alt="Arrow"
                                />
                            </div>
                            <div className="justify-between items-stretch border bg-white self-stretch flex gap-2.5 mt-4 pl-5 pr-8 py-3.5 rounded-3xl border-solid border-zinc-300 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                <div className="text-gray-600 text-xl leading-6">Select Quantity</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8237f3f6-6b11-405a-949e-7198db5c5009?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                    className="aspect-[2.14] object-contain object-center w-[15px] stroke-[3px] stroke-gray-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <form>
                            <div className="items-stretch flex w-full max-w-full flex-col mt-6 rounded-3xl self-end">
                                <button
                                    type="submit"
                                    className="text-gray-600 text-xl font-bold leading-6 w-full whitespace-nowrap bg-yellow-300 items-center px-5 py-3.5 rounded-3xl"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                            <div className="items-stretch flex w-full max-w-full flex-col mt-5 mb-2.5 self-end">
                                <button
                                    type="submit"
                                    className="text-gray-600 text-xl font-bold leading-6 w-full whitespace-nowrap bg-yellow-500 items-center px-5 py-3.5 rounded-3xl"
                                >
                                    Rent Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}