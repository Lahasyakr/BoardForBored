import * as React from "react";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
    return (
        <form className="bg-white flex flex-col">
             <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-[1.54] object-contain object-center w-[130px] overflow-hidden self-center max-w-full mt-5 max-md:mt-5"
                alt="BFB"
            />
            <section className="items-center self-center flex w-[550px] max-w-full flex-col mt-2 px-5">
                <h1 className="text-gray-600 text-center text-4xl w-[257px]">Login</h1>
                <p className="text-gray-600 text-center text-base self-stretch -mr-5 mt-2 max-md:max-w-full">
                    Login to rent your game now!
                </p>
            </section>
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[550px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="text" id="username" className="border-none focus:outline-none bg-gray-600 placeholder:text-white" placeholder="Username" />
            </div>
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[550px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="password" id="password" className="border-none focus:outline-none bg-gray-600 placeholder:text-white" placeholder="Password" />
            </div>
            <div className="items-stretch self-center flex w-[550px] max-w-full justify-between gap-5 mt-9 px-5 max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-2">
                    <input
                        type="checkbox"
                        id="remember-me"
                        className="text-gray-600 flex w-[33px] shrink-0 h-[31px] flex-col rounded border-gray-600"
                    />
                    <label htmlFor="remember-me" className="justify-center text-gray-600 text-center text-sm font-medium ">
                        Remember me
                    </label>
                </div>
                <a href="#" className="justify-center text-gray-600 text-center text-sm font-medium">
                    Forgot password?
                </a>
            </div>
            <Link to={"/dashboard"}
                className="text-white text-center text-2xl leading-5 capitalize whitespace-nowrap justify-center items-center shadow-sm bg-yellow-500 self-center w-[550px] max-w-full mt-5 px-5 py-4 mb-2 rounded-xl">
                Login
            </Link>
        </form>
    );
}