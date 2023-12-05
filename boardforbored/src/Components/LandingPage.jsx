import * as React from "react";
import Header from "../CommonComponents/Header";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <>
      <Header isFull={false}/>
      <div className="font-serif flex flex-col py-5">
        <section className="self-stretch w-full px-5 pr-9 pl-9 md:pl-28 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <h1 className="justify-center text-gray-600 text-8xl leading-[119.08px] mt-2 max-md:max-w-full max-md:text-xl max-md:mt-10">
                <span className="text-yellow-500">B</span>
                <span className="text-gray-600">oard <br /> For <br /> </span>
                <span className="text-yellow-500">B</span>
                <span className="text-gray-600">ored !</span>
              </h1>
            </div>
            <div className="flex flex-col items-stretch w-[40%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24aa1527-fe41-48ea-aae6-40ed77ac89aa?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-[1.83] object-contain object-center w-full overflow-hidden mt-16 max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </section>
        <div className="items-stretch flex w-[460px] max-w-full gap-5 mt-6 pl-10 pr-9 md:pl-28 rounded-2xl max-md:mt-10">
          <Link to={"/signUp"}>
            <a
              href="/signUp"
              className=" justify-center text-white text-center text-2xl items-center bg-yellow-500 grow px-5 py-4 rounded-xl"
            >
              Sign Up
            </a>
          </Link>
          <Link to={"/login"}>
            <a
              href="/login"
              className=" justify-center text-white text-center text-2xl items-center bg-yellow-500 grow px-5 py-4 rounded-xl"
            >
              Login
            </a>
          </Link>
        </div>
        <section className="self-stretch flex w-full justify-between gap-5 mt-8 pl-8 pr-9 md:pl-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <h2 className=" justify-center text-yellow-500 text-2xl leading-10 grow px-5 max-md:max-w-full max-md:text-2xl">
            Ready to borrow your fun?
          </h2>
         {/*  <div className="items-stretch flex justify-between gap-5 mt-5 px-5 self-end max-md:mt-10">
            <div className="text-black text-center text-base">
              Privacy policy
            </div>
            <div className="text-black text-center text-base whitespace-nowrap">
              Terms & conditions
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
}