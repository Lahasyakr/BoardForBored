import * as React from "react";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Header from "../../CommonComponents/Header";


export default function UserInfo(props) {
    const cartItems = useSelector((o) => o.cartreducer.cartItems);
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div>
                <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 px-2 lg:px-40 py-2">
                    <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch mt-1 max-md:max-w-full max-md:mt-10">
                            <header className="flex w-[337px] max-w-full items-center justify-between gap-5 px-5 self-start">
                                <button onClick={() => navigate(-1)}><img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730b1a7a-a15f-4712-a45e-e15940e73421?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                    className="aspect-[1.85] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full my-auto mt-8"
                                    alt="Profile Image"
                                /></button>
                                <h1 className="justify-center font-semibold text-gray-600 text-3xl md:text-4xl leading-5 self-stretch mt-8 max-md:text-4xl max-md:leading-5">
                                    My Profile
                                </h1>
                            </header>
                            <div className="mt-10 pr-0.5 max-md:max-w-full max-md:mt-10">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                                        <button onClick={() => navigate('/manageprofile')}
                                            className="flex flex-grow text-gray-600 text-2xl leading-5 whitespace-nowrap justify-center items-stretch bg-gray-300
                                         bg-opacity-70 grow w-full mx-auto pt-20 pb-20 px-5 rounded-3xl max-md:mt-5 max-md:px-0.5">
                                            Manage Profile
                                        </button>
                                    </div>
                                    <div className="flex flex-col items-stretch w-5/12 ml-5 max-md:w-full max-md:ml-0">
                                        <button onClick={() => navigate('/myorders')}
                                            className="flex text-gray-600 text-2xl leading-5 whitespace-nowrap justify-center items-center bg-gray-300 
                                        bg-opacity-70 grow w-full mx-auto pt-20 pb-20 px-5 rounded-3xl max-md:mt-5">
                                            My Orders
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex font-medium text-gray-600 text-2xl leading-5 whitespace-nowrap justify-center items-center 
                            bg-gray-300 bg-opacity-70 w-[200px] max-w-full mt-10 px-5 py-4 rounded-2xl self-start max-md:mt-5">
                                <Link to='/' aria-label="Sign Out">
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[47%] ml-5  md:mt-10 max-md:w-full max-md:ml-0">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64c35d1-d839-4d7c-98c8-2217eba64c90?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-[1.83] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
                            alt="Profile Image"
                        />
                    </div>
                </section>
            </div>
        </>
    )
}