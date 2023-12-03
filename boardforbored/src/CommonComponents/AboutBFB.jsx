import * as React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function AboutBFB(props) {
    const navigate = useNavigate();
    return (
        <>

            <section className="flex items-center h-[100%] bg-gray-10 font-poppins dark:bg-gray-100 py-10 overflow-auto">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">

                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="inline-flex gap-5">
                                <button onClick={() => navigate(-1)}><img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd97bff6-5462-40c3-9c7e-b3a59dde2325?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                    className="aspect-[1.85] object-contain object-center w-12 overflow-hidden max-w-full mt-2"
                                /></button>
                                <span>
                                    <h1 className="text-yellow-500 text-3xl font-semibold md:text-5xl"><button onClick={() => navigate(-1)}> Board For Bored</button></h1>
                                </span>
                            </div>

                            <div className="relative lg:max-w-md px-5">
                                <img srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w,
                                 https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84b5daf5-5d35-4931-b5d8-ed8621e8ff21?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                    className="aspect-[1.83] object-contain object-center w-full overflow-hidden mt-16 max-md:max-w-full max-md:mt-10 relative z-10 object-cover w-full rounded h-96 opacity-70"
                                    alt="aboutimage"
                                />
                                <div
                                    className="absolute bottom-0 right-0 z-10 p-4 bg-white border-4 border-yellow-500 rounded shadow dark:border-yellow-500 lg:-mb-8 lg:-mr-11 sm:p-4 dark:text-gray-300 dark:bg-gray-800 ">
                                    <p className="text-lg font-semibold md:w-72">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-800 opacity-10"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                            </path>
                                        </svg> Successfully Completed our project
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="pl-4 mb-6 border-l-4 border-yellow-500 ">
                                <span className="text-sm text-gray-800 uppercase dark:text-gray-800">Who we are?</span>
                                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-800">
                                    About Us
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-800 dark:text-gray-800">
                                Welcome to Board For Bored, where our passion for board games meets the joy of play! We're more than
                                just a board game rental service; we're enthusiasts dedicated to fostering a vibrant community of gamers.
                            </p>
                            <p className="text-gray-500 dark:text-gray-800 mb-6">

                                <strong className="font-semibold text-gray-900 dark:text-gray-900">Our Story </strong>- Board For Bored was born out of a shared love for board games and the desire to make these experiences
                                accessible to everyone. As avid gamers ourselves, we understand the thrill of discovering new games and the camaraderie that comes with each play session.
                            </p>
                            <p className="text-gray-500 dark:text-gray-800 mb-6">
                                <strong className="font-semibold text-gray-900 dark:text-gray-900">Our Mission </strong>- At Board For Bored, our mission is simple: to bring people together through the joy of board games.
                                We believe that every gathering, whether with family or friends, can be elevated by the right game. Our extensive collection is curated to cater to all tastes and preferences, ensuring there's something for everyone.
                            </p>
                        </div>
                    </div>
                    <div className="px-6">
                        <p className="text-gray-500 dark:text-gray-800 pt-0 md:pt-8">
                            <strong className="font-semibold text-gray-900 ">What Sets Us Apart </strong>- </p>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                            <p className="mb-3 text-gray-500 dark:text-gray-800"><em className="font-italic">Diverse Selection:</em> Choose from a vast library of board
                                games, ranging from classic titles to the latest releases. We pride ourselves on offering a diverse
                                selection to suit players of all ages and interests.</p>
                            <p className="mb-3 text-gray-500 dark:text-gray-800"><em className="font-italic">Convenience:</em> Say goodbye to the hassle of purchasing and storing board games.
                                With Board For Bored, you can enjoy a rotating collection of games without the commitment.</p>
                        </div>

                        <p className="text-gray-500 dark:text-gray-800 mb-6"> <strong className="font-semibold text-gray-800 dark:text-gray-900">Get in Touch -  </strong>
                            Ready to embark on a board game adventure? Explore our collection, and let the games begin! Have questions or suggestions? We'd love to hear from you. Contact us at bfb@gmail.com.</p>

                        <p className="text-gray-500 dark:text-gray-800 mb-6"><strong className="text-yellow-500 text-2xl font-semibold">Thank you</strong> for choosing Board For Bored for your
                            board game enjoyment. Let's roll the dice and create unforgettable gaming moments together!</p>
                    </div>
                </div>

            </section>

        </>
    )
}