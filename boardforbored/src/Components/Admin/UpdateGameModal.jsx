import * as React from "react";
import Modal from "../../CommonComponents/Modal";
import { Select, Tooltip, Upload, message } from "antd";
import { PlusSquareOutlined } from '@ant-design/icons';
import '../../CSS/select.css'
import { useDispatch, useSelector } from "react-redux";
import { addAdminGame, updateAdminGame } from "../../redux/actions";
import { gamedetails } from "../../data/gamedata";

const dummyGameObj = {
    id: null,
    name: null,
    price: null,
    quantity: null,
    deatils: "",
    rating: {},
    mainPhoto: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f3f32bea-fd0b-45f1-9235-4374c89680d8?apiKey=361c4900d91b476aba2cbfc84558ec7f&",
    about: [`DETAILS:Coming Soon...`]
}

const uploadProps = {
    beforeUpload: (file) => {
        const isPNG = file.type === 'image/png';
        if (!isPNG) {
            message.error(`${file.name} is not a png file`);
        }
        return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
        console.log(info.fileList);
    },
};
export default function UpdateGameModal(props) {
    const dispatch = useDispatch();
    const AdminGames = useSelector((o) => o.cartreducer.AdminGames);
    const [gameItem, setGameItem] = React.useState({
        name: props?.gameItem?.name,
        details: props?.gameItem?.details,
        price: props?.gameItem?.price,
        quantity: props?.gameItem?.quantity
    })
    const [errorText, setErrorText] = React.useState({ title: null, price: null, quantity: null });

    const arrayToOptions = () => {
        let option = [];
        for (let i = 1; i <= 20; i++) {
            let val = { label: `Qty:${i}`, value: i }
            option.push(val)
        }
        return option;
    }
    const validation = React.useCallback(() => {
        let flag = false;
        if (!gameItem.name) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                title: "Please enter game title"
            }))
            flag = true;
        }
        if (!gameItem.price) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                price: "Please enter valid price"
            }))
            flag = true;
        } else {
            if (gameItem.price < 1) {
                setErrorText(prevErrorTxt => ({
                    ...prevErrorTxt,
                    price: "Price should be greater than 0"
                }))
                flag = true;
            }
        }

        if (!gameItem.quantity) {
            setErrorText(prevErrorTxt => ({
                ...prevErrorTxt,
                quantity: "Please select quantity"
            }))
            flag = true;
        }
        return flag;
    }, [errorText])

    const onSubmit = React.useCallback(() => {
        let flag = validation()
        if (!flag && !errorText.title && !errorText.price && !errorText.quantity) {
            if (props?.isUpdate) {
                dispatch(updateAdminGame({ ...props.gameItem, ...gameItem }));
            }
            else {
                dispatch(addAdminGame({ ...dummyGameObj, id: AdminGames.length + 1, ...gameItem }))
            }
            let msg = props.isUpdate ? 'Changes has been updated' : 'New game is added to your list'
            message.success(msg);
            props.onSubmit();
        }
    }, [errorText])
    return (
        <>
            <Modal
                title={props.title}
                open={props.openModal}
                onSubmit={onSubmit}
                onCancel={props.onCancel}
                okText={props.okText}
                cancelText={props.cancelText}
            >
                <div className="updateModal flex flex-col py-5 px-10">
                    <Tooltip title={`${props.isUpdate ? " Update title" : ""}`} color="#FAB005" placement="bottomLeft">
                        <input type="text" value={props.isUpdate ? gameItem.name : null}
                            onChange={(e) => {
                                setGameItem(prevGame => ({
                                    ...prevGame,
                                    name: e.target.value
                                }))
                                setErrorText(prevErrorTxt => ({
                                    ...prevErrorTxt,
                                    title: null
                                }))
                            }
                            }
                            className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={`${props.isUpdate ? " Update title" : "Add title"}`} />
                        {errorText.title && < span className="self-center text-sm w-[450px] text-red-500 pl-1">{errorText.title}</span>}
                    </Tooltip>
                    <Tooltip title={`${props.isUpdate ? " Update game info" : ""}`} color="#FAB005" placement="bottomLeft">
                        <textarea id="message" rows="4" value={props.isUpdate ? gameItem.deatils : null}
                            onChange={(e) => setGameItem(prevGame => ({
                                ...prevGame,
                                deatils: e.target.value
                            }))}
                            className="block p-2.5 mt-5 w-full text-sm text-white bg-gray-700 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={`${props.isUpdate ? " Update game info" : "Add game info"}`}></textarea>
                    </Tooltip>

                    <div className="inline-flex gap-5 mt-5">
                        <Tooltip title={`${props.isUpdate ? " Update price in $" : ""}`} color="#FAB005" placement="bottomLeft">
                            <input type="number" min="0" value={props.isUpdate ? gameItem.price : null}
                                onChange={(e) => {
                                    setGameItem(prevGame => ({
                                        ...prevGame,
                                        price: e.target.value
                                    }))
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        price: null
                                    }))
                                }}
                                className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border 
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                    placeholder:text-white
                    dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={`${props.isUpdate ? " Update price in $" : "Add price in $"}`} />
                            {errorText.price && < span className="self-center text-sm w-[450px] text-red-500 pl-1">{errorText.price}</span>}
                        </Tooltip>

                        <Tooltip title={`${props.isUpdate ? " Update quantity" : ""}`} color="#FAB005" placement="bottomLeft">
                            <Select
                                placeholder="Select quantity"
                                style={{ width: 215, height: "2.5rem" }}
                                onChange={(value) => {
                                    setGameItem(prevGame => ({
                                        ...prevGame,
                                        quantity: value
                                    }))
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        quantity: null
                                    }))
                                }}
                                value={gameItem?.quantity}
                                options={arrayToOptions()}
                                optionRender={(option, key) => (
                                    <span style={{ fontSize: "large" }}>{option.label.split(":")[1]}</span>
                                )}
                            />
                            <div>{errorText.quantity && < span className="self-center text-sm w-[450px] text-red-500 pl-1">{errorText.quantity}</span>}</div>
                        </Tooltip>
                    </div>
                    <Upload {...uploadProps} className="mt-5 text-sm font-semibold">
                        <button > <PlusSquareOutlined style={{ fontSize: 'large' }} /> Upload</button>
                    </Upload>

                </div>
            </Modal >
        </>
    )
}