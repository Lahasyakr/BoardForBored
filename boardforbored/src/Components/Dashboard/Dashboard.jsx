import * as React from "react";
import Header from '../../CommonComponents/Header';
import GameList from "./GameList";

export default function Dashboard(props) {
    return (

        <>
            <Header />
            <main className="font-serif flex flex-col items-stretch">
                <section className="self-center w-full max-w-[1054px] px-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                            <h1 className="text-gray-600 text-6xl  mt-3 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                                <span className="text-yellow-500">B</span>
                                <span className="text-gray-600">oard <br /> For <br /> </span>
                                <span className="text-yellow-500">B</span>
                                <span className="text-gray-600">ored !</span>
                            </h1>
                        </div>
                        <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&" className="aspect-[1.83] object-contain object-center w-full overflow-hidden mt-16 max-md:max-w-full max-md:mt-10"
                            />
                        </div>
                    </div>
                </section>
                <GameList />
                {/*  <div className="flex justify-center">
                    <button className="flex items-center justify-center px-3 h-8 text-sm font-small text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        1
                    </button>

                    <button className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-small text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        2
                    </button>
                </div> */}
            </main>
        </>

    );
}