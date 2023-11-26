import * as React from "react";
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { gamedetails } from "../../data/gamedata";
import { Select, DatePicker } from 'antd';
import '../../CSS/select.css'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { addToCart } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);

const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().startOf('day');
};


export default function Actions(props) {
    let gameItem = gamedetails[props.id - 1];
    const [quantity, setQuantity] = React.useState(0);
    const [days, setDays] = React.useState([]);
    const [toDate, setToDate] = React.useState(null);
    const [fromDate, setFromDate] = React.useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const arrayToOptions = (number) => {
        let option = [];
        for (let i = 1; i <= number; i++) {
            let val = { label: `Qty:${i}`, value: i }
            option.push(val)
        }
        return option;
    }
    const onDateChange = (date, dateString) => {
        if (date) {
            setToDate(dayjs(date[0]).format('MMM D, YYYY'));
          
            setFromDate(dayjs(date[1]).format('MMM D, YYYY'));
            let hours = date[1].diff(date[0], 'hours');
            let no_days = Math.floor(hours / 24);
            setDays(no_days);
        } else {
            setDays([])
        }
    };

    const onAddToCart = () => {
        let itemObj ={ game: gameItem, days: days, quantity: quantity, toDate: toDate, fromDate: fromDate };
        dispatch(addToCart(itemObj))

    }
    return (
        <>
            <section className="actions">
                <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col my-auto pb-2.5 max-md:max-w-full max-md:mt-10">
                        <div className="items-stretch flex w-[50%] max-w-full gap-2 px-5 self-start">
                            <div className="justify-center text-green-600 text-center text-3xl leading-8 border bg-white grow items-center px-5 py-2 rounded-3xl border-solid border-zinc-300">
                                $ {gameItem.price}
                            </div>
                            <div className="text-gray-600 text-center text-xl leading-5 self-center whitespace-nowrap my-auto">
                                per day
                            </div>
                        </div>
                        <div className="items-stretch flex w-full max-w-full gap-2 px-5 self-start flex gap-2.5 mt-4 pl-5 pr-8 py-3.5">

                            {/*  <div className="text-gray-600 text-xl leading-6">Select Quantity</div> */}
                            <Select
                                placeholder="Select quantity"
                                style={{ width: 215, height: "3.5rem" }}
                                onChange={(value) => { setQuantity(value) }}
                                options={arrayToOptions(gameItem.quantity)}
                                optionRender={(option, key) => (
                                    <span style={{ fontSize: "large" }}>{option.label.split(":")[1]}</span>
                                )}
                            />

                            <RangePicker disabledDate={disabledDate} onChange={onDateChange} />


                        </div>

                        <div className="items-stretch flex w-full max-w-full px-5 flex-col mt-6 rounded-3xl self-end">
                            <button
                                onClick={() => {
                                    onAddToCart()
                                    navigate('/cart')

                                }
                                }
                                disabled={days == 0 || quantity == 0}
                                className="text-gray-600 text-xl font-bold leading-6 w-[90%] whitespace-nowrap bg-yellow-300 items-center px-5 py-3.5 rounded-3xl disabled:opacity-50"
                            >
                                {/* {cartItems?.length > 0 ? `Proceed to Checkout` : */} Add to cart
                            </button>
                        </div>
                        <div className="items-stretch flex w-full max-w-full px-5 flex-col mt-5 mb-2.5 self-end">
                            <button
                                type="submit"
                                onClick={() => navigate('/checkout', { state: { total: (gameItem.price * days) * quantity , itemObj:[{ game: gameItem, days: days, quantity: quantity, toDate: toDate, fromDate: fromDate }] }, emptyCart:false })}
                                disabled={days == 0 || quantity == 0}
                                className="text-gray-600 text-xl font-bold leading-6 w-[90%] whitespace-nowrap bg-yellow-500 items-center px-5 py-3.5 rounded-3xl disabled:opacity-50"
                            >
                                Rent Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}