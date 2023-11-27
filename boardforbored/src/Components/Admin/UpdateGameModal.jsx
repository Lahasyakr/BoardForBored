import * as React from "react";
import Modal from "../../CommonComponents/Modal";
import { Select } from "antd";
import '../../CSS/select.css'

export default function UpdateGameModal(props) {
    const [quantity, setQuantity] = React.useState(0);

    const arrayToOptions = (number) => {
        let option = [];
        for (let i = 1; i <= number; i++) {
            let val = { label: `Qty:${i}`, value: i }
            option.push(val)
        }
        return option;
    }
    return (
        <>
            <Modal
                title={props.title}
                open={props.openModal}
                onSubmit={props.onSubmit}
                onCancel={props.onCancel}
                okText={props.okText}
                cancelText={props.cancelText}
            >
                <div className="updateModal flex flex-col py-5 px-10">
                    <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={`${props.isUpdate ? " Update title" : "Add title"}`} />

                    <textarea id="message" rows="4" onChange={console.log("Asd")}
                        className="block p-2.5 mt-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={`${props.isUpdate ? " Update game info" : "Add game info"}`}></textarea>

                    <div className="inline-flex gap-5 mt-5">
                        <input type="number" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={`${props.isUpdate ? " Update price in $" : "Add price in $"}`} />

                        <Select
                            placeholder="Select quantity"
                            style={{ width: 215, height: "2.5rem" }}
                            onChange={(value) => { setQuantity(value) }}
                            options={arrayToOptions(props.gameItem.quantity)}
                            optionRender={(option, key) => (
                                <span style={{ fontSize: "large" }}>{option.label.split(":")[1]}</span>
                            )}
                        />
                    </div>

                </div>
            </Modal>
        </>
    )
}