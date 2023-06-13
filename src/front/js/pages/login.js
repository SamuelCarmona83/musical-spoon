import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const { actions, store } = useContext(Context);

    const [credentials, setCredentials] = useState({
        "email": "",
        "password": ""
    })

    const navigate = useNavigate();


    useEffect(() => {

        if (store.token)
            navigate('/publicar')


    }, [store.token])



    return (<>
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Login Form</h1>
                <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

                    <div className="mb-4">
                        <label className="block text-dark text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="w-full px-3 py-2 border border-light rounded-md focus:outline-none focus:border-primary"
                            onChange={(evt) => setCredentials({ ...credentials, email: evt.target.value })} value={credentials.email}
                            type="email" id="email" name="email" placeholder="john@example.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-dark text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="w-full px-3 py-2 border border-light rounded-md focus:outline-none focus:border-primary"
                            onChange={(evt) => setCredentials({ ...credentials, password: evt.target.value })} value={credentials.password}
                            type="password" id="password" name="password" placeholder="********" />
                    </div>
                    <button
                        className="w-full bg-primary text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-dark transition duration-300"
                        onClick={() => actions.login(credentials)}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    </>)
}