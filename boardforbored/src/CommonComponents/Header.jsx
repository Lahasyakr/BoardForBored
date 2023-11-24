import * as React from "react";
import { useState, useCallback } from "react";
import { useSelector } from 'react-redux';
import { message, Badge } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const cartItems = useSelector((o) => o.cartreducer.cartItems);

  const onSearch = useCallback((value) => {
    if (value != "") setSearch(value);
  }, [search])

  const handleSearch = () => {
    messageApi.open({
      type: 'warning',
      className: 'ms-3 text-sm font-semibold border-yellow-500',
      content: 'No Search Found',
    });
  }

  const onEnter = (e) => {
    return e.code == "Enter" ? handleSearch() : null
  }

  return (
    <>
      {contextHolder}
      <header className="flex flex-col items-stretch md:flex">
        <nav className="bg-gray-600 bg-opacity-50 flex w-full flex-col items-center pt-1 pb-1 px-5 max-md:max-w-full">
          <div className="items-stretch flex w-full max-w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a8878bc-3891-4802-b59d-207d26a71a30?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-[1.54] object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
                alt="Logo"
              />
              <div className="justify-center text-white text-center text-2xl self-center my-auto pb-1">
                <Link to='/dashboard'><HomeFilled style={{ color: "white", fontSize: "2rem" }} /></Link>
              </div>
              <h1 className="justify-center text-white text-center text-xl self-center my-auto">
                <Link to='/about'>About</Link>
              </h1>

              <div className="items-stretch flex w-[460px] self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
                <div className="bg-white flex flex-col items-stretch px-4 py-1 rounded-[50px] max-md:max-w-full">
                  <div className="items-stretch flex justify-between gap-5 -mr-2.5 max-md:max-w-full max-md:flex-wrap">
                    <h2 className="justify-center text-gray-600 text-opacity-80 text-center text-2xl pt-0">
                      <input onKeyDown={(e) => onEnter(e)} onChange={(e) => onSearch(e.target.value)} type="text" name="search" id="search" className="pl-0 items-stretch flex md:w-[320px] w-[200px] placeholder:text-gray-600 text-opacity-80 text-xl justify-left focus:outline-none" placeholder="Search" />
                    </h2>
                    <button onClick={() => handleSearch()}><img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbf542ab-be54-4272-986c-4a5b4d6a8959?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                      className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
                      alt="Search Icon"
                    /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-stretch flex max-w-full justify-right gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-right sm:justify-right">
              <Badge count={cartItems?.length} color="#FAB005" style={{ marginTop: "10px" }}><Link to='/cart'><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a32db31-062f-4222-93b9-39ebf3e37605?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full mt-1 self-start "
                alt="Logo"
              /></Link></Badge>
              <Link to={'/userinfo'}><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9372e1a6-4861-4384-ab26-412f0de1c39d?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full mt-1 self-start"
                alt="Image"
              /></Link>
            </div>
          </div>
        </nav>
        <div className="bg-yellow-500 bg-opacity-50 flex min-h-[15px] w-full flex-col max-md:max-w-full" />
      </header>
    </>
  );
}

