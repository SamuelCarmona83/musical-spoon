import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"

export const ExploreFloors = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPisos()
    }, [])

    return (
        <>
            <h2 className="text-5xl ml-32 mt-8 mb-4">Explore Floors</h2>
            <div className="flex flex-wrap mx-auto">
                {
                    store.pisos.map((house) =>

                        <div className="col-1/3 text-white bg-primary max-w-sm rounded-lg p-4 m-8">
                            <h3 className="text-3xl">
                                {house.name}
                            </h3>
                            <p>
                                {house.description}
                            </p>
                            <h3>
                                {house.address}
                            </h3>
                            <button className="bg-white text-primary rounded-md px-4 py-2">
                                Ver mas
                            </button>
                        </div>
                    )
                }

            </div>
        </>
    )
}