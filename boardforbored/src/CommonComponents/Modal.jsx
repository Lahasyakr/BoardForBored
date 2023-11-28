import * as React from "react";

export default function Modal({ ...props }) {

    return (
        <>{props.open && <div aria-hidden="true" data-modal-backdrop="static" id="modal"
            className="backdrop-blur-sm border-gray-500 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center 
        items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-300">
                        <h3 className="text-xl font-semibold text-gray-300 dark:text-gray-600">
                            {props.title}
                        </h3>
                        <button type="button" onClick={() => props.onCancel()} className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        {props.children}
                    </div>

                    <div className={`p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 right-0 ${props?.centerButtons ? 'text-center' : 'text-right'}`}>
                        <button type="button" className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none 
                        focus:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 
                        dark:focus:ring-blue-800" onClick={() => props.onSubmit()}>{props.okText}</button>
                        <button type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 
                        dark:text-gray-300 dark:border-gray-800 dark:hover:text-white 
                        dark:hover:bg-gray-800 dark:focus:ring-gray-800" onClick={() => props.onCancel()}>{props.cancelText}</button>
                    </div>
                </div>

            </div>
        </div>}
        </>

    )
}