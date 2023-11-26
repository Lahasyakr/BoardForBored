import * as React from "react";
import Header from "../../CommonComponents/Header";
import { useNavigate } from "react-router-dom";


export default function PaymentSuccess(props) {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="flex flex-col items-center px-20 py-5">
                <section className="bg-gray-600 bg-opacity-10 flex w-[450px] max-w-full flex-col items-center mt-4 pl-10 pr-6 pt-5 pb-2 max-md:mt-10 max-md:px-5">
                    <button onClick={() => navigate('/dashboard')}
                        className="aspect-[1.12] object-contain object-center w-[32px] fill-gray-600 fill-opacity-90 overflow-hidden max-w-full self-end"><img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78f4c02-ad06-4331-9f85-dfad26808ee8?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                            className="aspect-[1.12] object-contain object-center w-[38px] fill-gray-600 fill-opacity-90 overflow-hidden max-w-full self-end"
                        /></button>
                    <h1 className="justify-center text-gray-600 text-opacity-90 text-center text-3xl self-center leading-8 max-w-[500px] mt-10 self-end max-md:max-w-full max-md:mt-10">
                        Payment successful!
                    </h1>
                    <p className="text-gray-600 text-opacity-90 text-center text-3xl leading-8 whitespace-nowrap mt-4">
                        Thank you.
                    </p>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/73cab63e-786c-439e-b96f-db71d549c29c?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                        className="aspect-[1.05] object-contain object-center w-11 fill-green-800 overflow-hidden max-w-full mt-4"
                    />
                    <button onClick={() => {
                        navigate('/dashboard')
                    }}
                        className="text-white text-center text-3xl leading-5 capitalize whitespace-nowrap justify-center 
                        items-stretch shadow-sm bg-gray-600 w-[87px] max-w-full mt-16 px-4 py-2 rounded-xl self-end 
                        max-md:pr-0 max-md:mt-10">
                        OK
                    </button>
                </section>
            </main>
        </>
    )
}