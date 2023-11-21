import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function LoginPage(props) {

    const navigate = useNavigate();
    const customer = useSelector((o) => o.cartreducer.customer);
    const admin = useSelector((o) => o.cartreducer.admin);
    const [errorText, setErrorText] = React.useState({ username: null, password: null });

    const onLogin = () => {
        let name = document.getElementById('username')?.value || "";
        let password = document.getElementById('password')?.value || "";
        if (!password) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                password: "Please enter password"
            }))
        }
        if (!name) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                username: "Please enter username"
            }))
        }
        else if (name === customer.userName && password === customer.password) {
            navigate('/dashboard')
        } else if (name === admin.userName && password === admin.password) {
            navigate('/dashboard')
        } else {
            if (password !== customer.password) {
                setErrorText(prevErrorTxt => ({
                    ...prevErrorTxt,
                    password: "Please enter correct password"
                }))
            }
            if (name !== customer.userName) {
                setErrorText(prevErrorTxt => ({
                    ...prevErrorTxt,
                    username: "Please enter correct usename"
                }))
            }

        }
    }
    return (
        <section className="bg-white flex flex-col">
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
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="text" id="username" className="border-none focus:outline-none bg-gray-600 placeholder:text-white h-auto" placeholder="Username"
                    onChange={() => setErrorText(prevErrorTxt => ({
                        ...prevErrorTxt,
                        username: null
                    }))} />
            </div>
            {errorText.username && < span className="self-center w-[450px] text-red-500 pl-1">{errorText.username}</span>}
            <div className="text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                <input type="password" id="password" className="border-none focus:outline-none bg-gray-600 placeholder:text-white h-auto"
                    placeholder="Password" onChange={() => setErrorText(prevErrorTxt => ({
                        ...prevErrorTxt,
                        password: null
                    }))} />
            </div>
            {errorText.password && < span className="self-center w-[450px] text-red-500 pl-1">{errorText.password}</span>}
            <div className="items-stretch self-center flex w-[450px] max-w-full justify-between gap-5 mt-9 px-5 max-md:flex-wrap">
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
            <button onClick={onLogin}
                className="h-12 text-white text-center text-xl leading-5 capitalize whitespace-nowrap justify-center items-center shadow-sm bg-yellow-500 self-center w-[450px] max-w-full mt-5 px-5 py-4 mb-2 rounded-xl">
                Login
            </button>
        </section>
    );
}