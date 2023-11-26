import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../CommonComponents/Header";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { addMyOrder, emptyCart } from "../../redux/actions";

export default function CardDetails(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [year, setYear] = React.useState(null);
    const [month, setMonth] = React.useState(null);
    const [errorTxt, setErrorText] = React.useState({
        cardnumber: null,
        cvv: null,
        name: null,
        month: null,
        year: null,
        zipcode: null
    })

    const yearOptions = () => {
        let options = [];
        for (let i = 2023; i <= 2050; i++) {
            options.push({ value: i, label: i })
        }
        return options;
    }

    const onlyNumbers = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    const validateCreditCardNumber = () => {
        let visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        let mastPattern = /^(?:5[1-5][0-9]{14})$/;
        let amexPattern = /^(?:3[47][0-9]{13})$/;
        let discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        let ccNum = document.getElementById("cardNumber")?.value || '';

        let isVisa = visaPattern.test(ccNum) === true;
        let isMast = mastPattern.test(ccNum) === true;
        let isAmex = amexPattern.test(ccNum) === true;
        let isDisc = discPattern.test(ccNum) === true;
        let flag = false;
        if (isVisa || isMast || isAmex || isDisc) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                cardnumber: null
            }))
            flag = true;
        }
        else {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                cardnumber: "Please enter valid card number"
            }))
        }
        return flag;
    }


    const validateCvv = () => {
        let cvvPattern = /(^\d{3,4}$)/;
        let cvv = document.getElementById("cvv").value || "";
        let flag = false;
        if (cvvPattern.test(cvv)) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                cvv: null
            }))
            flag = true;
        } else {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                cvv: "Please enter valid cvv number"
            }))
        }
        return flag;
    }
    const validateZipCode = () => {
        let zip = document.getElementById("zipcode").value || "";
        let flag = false;
        if (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip)) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                zipcode: null
            }))
            flag = true;
        } else {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                zipcode: "Please enter valid zip code"
            }))
        }
        return flag;
    }

    const checkonProceed = () => {
        let flag = true;
        if (!month) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                month: "Please select expiry month"
            }))
            flag = false;
        }
        if (!year) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                year: "Please select expiry year"
            }))
            flag = false;
        }
        if (!document.getElementById("name").value || "") {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                name: "Please enter name on the card"
            }))
            flag = false;
        }
        if (!validateCreditCardNumber()) flag = false;
        if (!validateCvv()) flag = false;
        if (!validateZipCode()) flag = false;
        if (flag) {
            dispatch(addMyOrder(location.state.itemObj))
            if (location?.state?.emptyCart) {
                dispatch(emptyCart())
            }
            navigate('/orderplaced')
        } else {
            return null;
        }
    }

    return (
        <>
            <Header />
            <div className="bg-white flex flex-col px-20 py-5 ">
                <div className="flex w-[100%] items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
                    <button onClick={() => navigate(-1)}><img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1c89f86-1120-4927-b3bc-1a2998008e25?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                        className="aspect-square object-contain object-center w-12 overflow-hidden justify-right max-w-full 
                        mt-5 max-md:mt-5"
                        alt="back"
                    /></button>

                    <h1 className="justify-center text-black text-gray-600 mt-5 max-md:mt-5 text-opacity-90 text-center text-4xl sm:text-3xl leading-8 grow shrink 
                    basis-auto self-start md:pr-20">
                        Enter Card Details
                    </h1>
                </div>
                <div className="flex w-full max-w-full self-center flex-col mt-2 self-end">

                    <input type="text" id="cardNumber" pattern="[0-9]" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white placeholder:text-base
                        text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-6 rounded-xl max-md:pl-2.5"
                        placeholder="Card Number" onKeyPress={onlyNumbers} onChange={validateCreditCardNumber} />
                    {errorTxt.cardnumber && < span className="self-center w-[450px] text-red-500 pl-1">{errorTxt.cardnumber}</span>}

                    <input type="text" id="name" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white placeholder:text-base
                        text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-6 rounded-xl max-md:pl-2.5"
                        placeholder="Name on card" onChange={(e) => {
                            if (e.target.value) {
                                setErrorText(prevErrorTxt => ({
                                    ...prevErrorTxt,
                                    name: null
                                }))
                            }
                        }} />
                    {errorTxt.name && < span className="self-center w-[450px] text-red-500 pl-1">{errorTxt.name}</span>}

                    <div className="carddetails flex items-stretch gap-2 text-white text-xl leading-5 whitespace-nowrap justify-center self-center w-[450px] max-w-full mt-5 rounded-xl max-md:pl-2.5">
                        <Select
                            placeholder="Expiry Month"
                            style={{ width: '100%', height: "3rem" }}
                            onChange={(value) => {
                                if (value) {
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        month: null
                                    }))
                                    setMonth(value)
                                }
                            }}
                            options={[
                                { value: 1, label: 'Jan' },
                                { value: 2, label: 'Feb' },
                                { value: 3, label: 'Mar' },
                                { value: 4, label: 'Apr' },
                                { value: 5, label: 'May' },
                                { value: 6, label: 'Jun' },
                                { value: 7, label: 'Jul' },
                                { value: 8, label: 'Aug' },
                                { value: 9, label: 'Sep' },
                                { value: 10, label: 'Oct' },
                                { value: 11, label: 'Nov' },
                                { value: 12, label: 'Dec' },
                            ]}
                        />

                        <Select
                            placeholder="Expiry Year"
                            style={{ width: '100%', height: "3rem" }}
                            onChange={(value) => {
                                if (value) {
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        year: null
                                    }))
                                    setYear(value)
                                }
                            }}
                            options={yearOptions()}
                        />

                    </div>
                    {errorTxt.month && <span className="self-center w-[450px] text-red-500 pl-1">{errorTxt.month}</span>}
                    {errorTxt.year && < span className="self-center w-[450px] text-red-500 pl-1">{errorTxt.year}</span>}
                    <div className="carddetails flex gap-2 text-white text-xl leading-5 whitespace-nowrap justify-center self-center w-[450px] max-w-full mt-5 rounded-xl max-md:pl-2.5">
                        <input type="text" id="cvv" pattern="[0-9]" className="h-4 border-none focus:outline-none bg-gray-600 
                        placeholder:text-white placeholder:text-base text-white text-xl leading-5 whitespace-nowrap 
                        justify-center bg-gray-600 self-center w-[130px] max-w-full mt-1 px-5 py-6 rounded-xl max-md:pl-2.5"
                            placeholder="CVV" onKeyPress={onlyNumbers} onChange={validateCvv} />

                        <input type="text" id="zipcode" pattern="[0-9]" className="h-4 border-none focus:outline-none bg-gray-600 placeholder:text-white 
                        placeholder:text-base text-white text-xl leading-5 whitespace-nowrap justify-center bg-gray-600 
                        self-center w-[320px] max-w-full mt-1 px-5 py-6 rounded-xl max-md:pl-2.5"
                            placeholder="Zipcode" onKeyPress={onlyNumbers} onChange={validateZipCode} />
                    </div>
                    {errorTxt.cvv && < span className="self-center w-[450px] text-red-500 pl-1">{errorTxt.cvv}</span>}
                    {errorTxt.zipcode && < span className="self-center w-[450px] text-red-500 pl-1">{errorTxt.zipcode}</span>}

                    <button onClick={() => checkonProceed()}
                        className="h-12 text-white text-center text-xl  leading-5 capitalize whitespace-nowrap justify-center 
                        items-center shadow-sm bg-yellow-500 self-center w-[350px] max-w-full mt-7 px-5 py-4 mb-2 rounded-xl">
                        Pay Now
                    </button>
                </div>

            </div >
        </>

    )
}