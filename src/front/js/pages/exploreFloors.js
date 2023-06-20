import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";

export const ExploreFloors = () => {

    const { store, actions } = useContext(Context);

    const navigate = useNavigate();


    if (!store.token) {
        navigate("/")
    }

    useEffect(() => {
        actions.getPisos();
    }, [])

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <div className="px-8 w-full flex text-start max-w-7xl">
                    <>
                        <h2 className="text-5xl mt-8 font-bold md:mb-4">Explore Floors</h2>
                    </>
                </div>
            </div>
            <div className="flex flex-wrap   2xl:flex-wrap gap-4 max-w-7xl mx-auto">
                {
                    store.token && store.pisos.map((house) =>

                        <div className="items-center justify-center mx-auto" key={house.id}>

                            <div className="text-white p-4 rounded-lg bg-primary m-2 mx-auto flex flex-col space-y-4 ">
                                <h3 className="text-3xl font-bold  pb-2 border-b-[0.8px]">
                                    {house.name}
                                </h3>
                                <img src={house.photo} alt={house.id} className="max-w-lg" />

                                <p className="flex pb-2 border-b-[0.8px]">
                                    <span className="max-w-xs">
                                        {house.description}
                                    </span>
                                </p>
                                <h3 className="pb-2 border-b-[0.8px]">
                                    {house.address}
                                    <div className="grid grid-cols-3 divide-x-[0.8px] text-center pb-2">
                                        <div className="flex items-center justify-center space-x-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path fill="white" d="M21,10.78V8c0-1.65-1.35-3-3-3h-4c-0.77,0-1.47,0.3-2,0.78C11.47,5.3,10.77,5,10,5H6C4.35,5,3,6.35,3,8v2.78 C2.39,11.33,2,12.12,2,13v6h2v-2h16v2h2v-6C22,12.12,21.61,11.33,21,10.78z M14,7h4c0.55,0,1,0.45,1,1v2h-6V8C13,7.45,13.45,7,14,7 z M5,8c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v2H5V8z M4,15v-2c0-0.55,0.45-1,1-1h14c0.55,0,1,0.45,1,1v2H4z" /></g></svg>
                                            <span>
                                                {house.rooms}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" /></g><g><g><g><circle fill="white" cx="7" cy="7" r="2" /></g><g><path fill="white" d="M20,13V4.83C20,3.27,18.73,2,17.17,2c-0.75,0-1.47,0.3-2,0.83l-1.25,1.25C13.76,4.03,13.59,4,13.41,4 c-0.4,0-0.77,0.12-1.08,0.32l2.76,2.76c0.2-0.31,0.32-0.68,0.32-1.08c0-0.18-0.03-0.34-0.07-0.51l1.25-1.25 C16.74,4.09,16.95,4,17.17,4C17.63,4,18,4.37,18,4.83V13h-6.85c-0.3-0.21-0.57-0.45-0.82-0.72l-1.4-1.55 c-0.19-0.21-0.43-0.38-0.69-0.5C7.93,10.08,7.59,10,7.24,10C6,10.01,5,11.01,5,12.25V13H2v6c0,1.1,0.9,2,2,2c0,0.55,0.45,1,1,1 h14c0.55,0,1-0.45,1-1c1.1,0,2-0.9,2-2v-6H20z" /></g></g></g></svg>
                                            <span>
                                                {house.baths}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path fill="white" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
                                            <span>
                                                {house.baths}
                                            </span>
                                        </div>
                                    </div>
                                </h3>
                                <div className="flex justify-end">
                                    <div className="flex flex-row mr-auto space-x-4 items-center">
                                        <img src="https://i.pravatar.cc/300" alt="name_user" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />
                                        <p className="font-bold">Responsable del Piso</p>
                                    </div>
                                    <button className="bg-white text-primary rounded-md px-4 py-2">
                                        Ver mas
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                }

            </div>
        </>
    )
}