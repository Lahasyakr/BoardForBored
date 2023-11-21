import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../CommonComponents/Header";
import { Select } from "antd";
import '../../CSS/select.css'

export default function OrderDetails(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const total = location.state.total;
    const [paymentMethod, setPaymentMethod] = React.useState(null);
    const [errorText, setErrorText] = React.useState(null)
    return (

        <>
            <Header />
            <section className="flex flex-col items-stretch px-80 py-5">
                <header className="flex w-full justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
                    <button onClick={() => navigate(-1)}><img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/645edc17-0114-4394-8527-120b7d958156?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                        className="aspect-[1.85] object-contain object-center w-12 overflow-hidden shrink-0 max-w-full mt-1"
                        alt="Order Logo"
                    /></button>
                    <h1 className="justify-center text-black text-opacity-90 text-3xl leading-10 self-stretch grow shrink basis-auto">
                        Order Details
                    </h1>
                </header>
                <div className="flex w-[80%] flex-col mt-9 pl-16 max-md:max-w-full max-md:pl-5">
                    <div className="bg-zinc-100 self-stretch flex items-stretch justify-between gap-5 pl-5 pr-9 pt-5 pb-7 rounded-xl max-md:pr-5">
                        <div className="flex grow basis-[0%] flex-col items-stretch">
                            <h2 className="justify-center text-gray-600 text-opacity-90 text-2xl font-bold leading-6">
                                Items:{" "}
                            </h2>
                            <h2 className="justify-center text-gray-600 text-opacity-90 text-2xl font-bold leading-6 mt-6">
                                Tax:{" "}
                            </h2>
                            <h2 className="justify-center text-black text-opacity-90 text-2xl font-bold leading-6 mt-6">
                                Order total:{" "}
                            </h2>
                        </div>
                        <div className="flex basis-[25%] flex-col items-stretch">
                            <span className="justify-center text-gray-600 text-opacity-90 text-2xl leading-6">
                                $ {total}
                            </span>
                            <span className="justify-center text-gray-600 text-opacity-90 text-2xl leading-6 mt-5">
                                $ {(total * 7) / 100}
                            </span>
                            <span className="justify-center text-black text-opacity-90 text-2xl leading-6 mt-5">
                                $ {total + (total * 7) / 100}
                            </span>
                        </div>
                    </div>
                    <div className="checkout justify-between items-stretch bg-transparent self-stretch flex gap-0 mt-4 px-1 rounded-xl">
                        <Select
                            placeholder="Select payment method"
                            style={{ width: '100%', height: "2.5rem" }}
                            onChange={(value) => {
                                if (value) {
                                    setPaymentMethod(value)
                                    setErrorText(null)
                                }
                            }}
                            options={[
                                { value: "debit", label: 'Debit Card' },
                                { value: "credit", label: 'Credit Card' }
                            ]}
                        />
                        {/* <span className="text-gray-600 text-2xl leading-6 grow shrink basis-auto">
                            Select payment method
                        </span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4dbbd96-8bc5-439c-9968-e3dfa64e71d3?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                            className="aspect-[2.14] object-contain object-center w-[15px] stroke-[3px] stroke-gray-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                            alt="Payment Method"
                        /> */}
                    </div>
                    {errorText && < span className="justify-between w-[450px] text-red-500 pl-1">{errorText}</span>}
                    <button onClick={() => {
                        if (paymentMethod) {
                            navigate('/carddetails')
                        } else {
                            setErrorText("Please choose payment method")
                        }
                    }}
                        className="text-white text-center text-3xl leading-5 capitalize whitespace-nowrap justify-center 
                    items-stretch shadow-sm bg-yellow-500 w-[161px] max-w-full mt-10 px-5 py-3.5 rounded-xl max-md:mt-10 max-md:pl-px">
                        Proceed
                    </button>
                </div>
            </section>
        </>

    )
}