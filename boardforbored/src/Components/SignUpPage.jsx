import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignUpPage(props) {
    const navigate = useNavigate();
    return (
        <div className="bg-white flex flex-col">
            <div className="flex items-center self-center w-[250px] gap-5 max-w-full">
                <button onClick={() => navigate(-1)}><img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1c89f86-1120-4927-b3bc-1a2998008e25?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                    className="aspect-square object-contain object-center w-12 overflow-hidden justify-right max-w-full mt-5 max-md:mt-5"
                    alt="back"
                /></button>

                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0eb72be0-d05e-4a67-92ba-c1f9467a1917?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                    className="aspect-[1.54] object-contain object-center w-[130px] overflow-hidden self-center max-w-full mt-5 max-md:mt-5"
                    alt="BFB"
                />
            </div>
            <div className="items-center self-center flex w-[550px] max-w-full flex-col mt-2 px-5">
                <h1 className="text-gray-600 text-center text-4xl w-[257px]">Sign Up</h1>
                <p className="text-gray-600 text-center text-base self-stretch -mr-5 mt-2 max-md:max-w-full">
                    Create an account and Sign up!
                </p>
            </div>
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="text" id="username" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white" placeholder="Username" />
            </div>
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="email" id="email" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white" placeholder="Email" />
            </div>
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="password" id="password" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white" placeholder="Password" />
            </div>
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="password" id="confirm-password" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white" placeholder="Re-enter password" />
            </div>
            <Link to={"/login"}
                className="h-12 text-white text-center text-xl  leading-5 capitalize whitespace-nowrap justify-center items-center shadow-sm bg-yellow-500 self-center w-[450px] max-w-full mt-5 px-5 py-4 mb-2 rounded-xl">
                Sign up
            </Link>

        </div >
    );
}