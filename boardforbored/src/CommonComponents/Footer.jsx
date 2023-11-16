import * as React from "react";
import { InstagramOutlined, LinkedinFilled, FacebookFilled } from '@ant-design/icons';
export default function Footer() {
  return (


    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 overflow-hidden shadow md:flex md:items-center md:justify-between md:p-6 items-stretch">

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4337e4-863a-4d7f-8138-a470046a9e13?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
        className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        alt="Background Image"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe2976f7-a834-4945-b048-d7eb865ba504?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
        className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        alt="Content Image"
      />
      <span className="text-sm text-black-500 sm:text-center dark:text-black-400 space-x-1">
        <LinkedinFilled style={{ color: "black", fontSize: "large"}} />
        <FacebookFilled style={{ color: "black", fontSize: "large" }} />
        <InstagramOutlined style={{ color: "black", fontSize: "large" }} />

      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Terms & Condition</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>

    /* <section
      className="flex-col fill-yellow-500 fill-opacity-80 overflow-hidden relative flex min-h-[59px] items-stretch pb-0 mb-0"
      aria-label="footer"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa4337e4-863a-4d7f-8138-a470046a9e13?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
        className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        alt="Background Image"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe2976f7-a834-4945-b048-d7eb865ba504?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
        className="absolute z-[-1] object-contain object-center w-full fill-black fill-opacity-40 overflow-hidden max-md:max-w-full"
        alt="Content Image"
      />
    </section> */
  );
}