import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import Header from "../../CommonComponents/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveAdmin, saveUser } from "../../redux/actions";
import { message } from 'antd';

export default function ManageProfile(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((o) => location?.state?.isAdmin ? o.cartreducer.admin : o.cartreducer.customer);
    const [messageApi, contextHolder] = message.useMessage();
    const [newUser, setNewUser] = React.useState(user);
    const [errorText, setErrorText] = React.useState({ name: null, email: null, phNo: null, lastName: null });
    const onUpdate = () => {
        let name = document.getElementById('name')?.value || "";
        let email = document.getElementById('email')?.value || "";
        let phNo = document.getElementById('phNo')?.value || "";
        let lastname = document.getElementById('lastname')?.value || "";
        let newObj = errorText;
        if (!name) newObj.name = "Please enter first name";
        if (!email) newObj.email = "Please enter email";
        let reg = new RegExp('^\\d*$')
        if (phNo && (!reg.test(phNo) || phNo.length != 10)) newObj.phNo = "Please enter valid phone number"
        if (!/\S+@\S+\.\S+/.test(email)) newObj.email = "Please enter a valid email"
        setErrorText(prevErrorTxt => ({
            ...prevErrorTxt, newObj
        }))
        if (!errorText.name && !errorText.email && !errorText.phNo && !errorText.lastName) {

            messageApi.open({
                type: 'success',
                className: 'ms-6 text-sm font-semibold text-gray-800',
                content: 'User information - saved successfully',
            });
            if(location?.state?.isAdmin ){
                dispatch(saveAdmin({
                    name: name, email: email, phNo: phNo, lastname: lastname
                }))
            }
           else{
            dispatch(saveUser({
                name: name, email: email, phNo: phNo, lastname: lastname
            }))
           }

            /* navigate('/userinfo', { state: { onEvent: 'success' } }); */


        }

    }
    return (
        <>
            {contextHolder}
            <Header isAdmin={location?.state?.isAdmin} />
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[29%] py-2 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-center mt-5 max-md:mt-10">
                        <Link to='/userinfo' state={{ isAdmin: location?.state?.isAdmin }}><img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5f00de-f3a4-4f3d-8a72-d49b5bb92cdb?apiKey=361c4900d91b476aba2cbfc84558ec7f&"
                            className="aspect-[8.46] object-contain object-center w-[220px] overflow-hidden"
                        /></Link>

                        <div className="flex flex-col items-center w-[40%] py-2 lg:py-10
                        mt-4 self-center lg:self-end max-md:ml-2.5 max-md:mt-10 max-md:px-5 bg-gray-300 rounded-3xl dark:bg-gray-300">
                            <UserOutlined style={{ color: "white", fontSize: "5rem" }} />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch mt-8 px-5 max-md:max-w-full max-md:mt-10">
                        <div className="flex flex-row ml-0">
                            <div><h1 className="text-gray-600 text-center text-4xl w-[257px]">{user.name}</h1></div>
                        </div>
                        <div className="text-white text-md leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                            <input type="text" id="name" className="h-auto  w-full border-none focus:outline-none bg-gray-600 placeholder:text-white"
                                value={newUser.name} placeholder={"Update First Name"} onChange={(e) => {
                                    setNewUser(prevUser => ({
                                        ...prevUser,
                                        name: e.target.value
                                    }))
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        name: null
                                    }))
                                }} />
                        </div>
                        {errorText.name && < span className="self-center w-[450px] text-red-500 pl-1">{errorText.name}</span>}
                        <div className="text-white text-md leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                            <input type="text" id="lastname" className="h-auto  w-full border-none focus:outline-none bg-gray-600 placeholder:text-white"
                                value={newUser.lastname} placeholder={"Update Last Name"} onChange={(e) => {
                                    setNewUser(prevUser => ({
                                        ...prevUser,
                                        lastname: e.target.value
                                    }))
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        lastName: null
                                    }))
                                }} />
                        </div>
                        {errorText.lastName && < span className="self-center w-[450px] text-red-500 pl-1">{errorText.lastName}</span>}
                        <div className="text-white text-md leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                            <input value={newUser.phNo} type="text" id="phNo" className="h-auto w-full border-none focus:outline-none bg-gray-600 placeholder:text-white"
                                placeholder={"Update Contact Number"} onChange={(e) => {
                                    setNewUser(prevUser => ({
                                        ...prevUser,
                                        phNo: e.target.value
                                    }))
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        phNo: null
                                    }))
                                }
                                } />
                        </div>
                        {errorText.phNo && < span className="self-center w-[450px] text-red-500 pl-1">{errorText.phNo}</span>}
                        <div className="text-white text-md leading-5 whitespace-nowrap justify-center bg-gray-600 self-center w-[450px] max-w-full mt-5 px-5 py-4 rounded-xl max-md:pl-2.5">
                            <input type="email" id="email" className="h-auto  w-full border-none focus:outline-none bg-gray-600 placeholder:text-white"
                                value={newUser.email} placeholder="Update Email" onChange={(e) => {
                                    setNewUser(prevUser => ({
                                        ...prevUser,
                                        email: e.target.value
                                    }))
                                    setErrorText(prevErrorTxt => ({
                                        ...prevErrorTxt,
                                        email: null
                                    }))
                                }
                                } />
                        </div>
                        {errorText.email && < span className="self-center w-[450px] text-red-500 pl-1">{errorText.email}</span>}
                        <button onClick={onUpdate}
                            className="h-12 text-white text-center text-xl  leading-5 capitalize whitespace-nowrap justify-center items-center shadow-sm bg-yellow-500 self-center w-[450px] max-w-full mt-5 px-5 py-4 mb-2 rounded-xl">
                            Update
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}