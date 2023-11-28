import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { gamedetails } from "../../data/gamedata";
import { PlusCircleOutlined } from '@ant-design/icons';
import UpdateGameModal from "./UpdateGameModal";
import Modal from "../../CommonComponents/Modal";
import { deleteAdminGame } from "../../redux/actions";
import { message } from "antd";

export default function MyGames(props) {
    const dispatch = useDispatch();
    const AdminGames = useSelector((o) => o.cartreducer.AdminGames);
    const [isEditOpen, setIsEditOpen] = React.useState(false);
    const [isAddnewOpen, setIsAddNew] = React.useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [selectkey, selectedKey] = React.useState(null);
    return (
        <div className="relative md:w-[100%] flex flex-col">
            <div className="overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
                <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-collapse border border-gray-300">
                    <thead className="text-white text-center text-lg leading-8 whitespace-nowrap border bg-gray-600 grow items-center px-5 py-3 border-solid border-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 border-2 border border border-gray-300">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 border border-gray-300">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 border border-gray-300">
                                Details
                            </th>
                            <th scope="col" className="px-6 py-3 border-2 border border-gray-300">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {AdminGames.map((item, key) => {
                            return (<tr key={key} className=" text-gray-800 bg-white  dark:bg-white-800 hover:bg-gray-200 dark:hover:bg-white-200">
                                <td scope="row" className="text-center px-6 py-3 border-2 border border-gray-300">
                                    {item?.name}
                                </td>
                                <td className="text-center px-6 py-3 border-2 border border-gray-300">
                                    {item?.quantity}
                                </td>
                                <td className="text-center px-6 py-3 border-2 border border-gray-300">
                                    {item?.deatils}
                                </td>
                                <td className="px-6 py-3 border-2 border border-gray-300">
                                    <>
                                        <div className="flex items-stretch justify-center gap-5">
                                            <button onClick={() => {
                                                setSelectedItem(item);
                                                setIsEditOpen(true);
                                            }}>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dfd6920-8095-4932-b875-d86d39acec42?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                                    className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                                                /></button>
                                            <button onClick={() => {
                                                setSelectedItem(item);
                                                selectedKey(key)
                                                setIsDeleteOpen(true);
                                            }}>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b75b6c1-7bda-4302-98f2-087909b2dce4?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                                                    className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                                                /></button>
                                        </div></>
                                </td>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
            <div className="flex self-center lg:self-end">
                <button onClick={() => {
                    setIsAddNew(true)
                }}
                    type="button" className="text-white underline bg-yellow-500 hover:bg-yellow-500/90 focus:ring-4 focus:outline-none 
                    focus:ring-yellow-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    dark:focus:ring-yellow-500/55 me-2 mb-2 mt-5 ">
                    <PlusCircleOutlined style={{ color: "white", fontSize: "large" }} className="mr-1" />
                    Add New Game
                </button>
            </div>

            {isEditOpen && <UpdateGameModal
                title="Update Game Details"
                openModal={isEditOpen}
                onSubmit={() => setIsEditOpen(false)}
                onCancel={() => setIsEditOpen(false)}
                okText={"Update"}
                cancelText={"Cancel"}
                isUpdate={true}
                gameItem={selectedItem}
            />}

            {isAddnewOpen && <UpdateGameModal
                title="Add new game"
                openModal={isAddnewOpen}
                onSubmit={() => setIsAddNew(false)}
                onCancel={() => setIsAddNew(false)}
                okText={"Add"}
                cancelText={"Cancel"}
                isUpdate={false}
                gameItem={null}
            />}

            {isDeleteOpen && <Modal
                title="Delete game"
                open={isDeleteOpen}
                onSubmit={() => {
                    if (selectkey) {
                        dispatch(deleteAdminGame(selectkey));
                        message.success("Game has been deleted successfully");
                    }
                    setIsDeleteOpen(false)
                }}
                onCancel={() => setIsDeleteOpen(false)}
                okText={"Confirm"}
                cancelText={"Cancel"}
                centerButtons={true}
            >
                <div className="text-gray-600 text-opacity-90 text-center text-xl font-semibold leading-8 mt-5 max-md:max-w-full max-md:mt-10">
                    <div className="text-center">Are you sure you want to delete </div>
                    <div className="text-center">this game from your listings?</div>
                </div>
            </Modal>}

        </div>
    )
}