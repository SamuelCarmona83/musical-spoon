import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

export const NewFloor = () => {

    const { actions } = useContext(Context);
    const [floor, setFloor] = useState({});


    const publishFloor = (evt) => {
        evt.preventDefault();
        actions.newPiso(floor);
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <div className="px-8 w-full flex text-start max-w-7xl">
                    <>
                        <h2 className="text-5xl mt-8 font-bold md:mb-4">Publish a new floor 🏚️</h2>
                    </>
                </div>
            </div>
            <>
                <div className="flex flex-wrap   2xl:flex-wrap gap-4 max-w-7xl mx-32">
                    <>
                        <form className="w-full mx-auto bg-secondary p-8 rounded-md shadow-md my-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Name" value={floor.name || ''}
                                    onChange={(evt) => setFloor({ ...floor, name: evt.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Description</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Description" value={floor.description || ''}
                                    onChange={(evt) => setFloor({ ...floor, description: evt.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Address</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Address" value={floor.address || ''}
                                    onChange={(evt) => setFloor({ ...floor, address: evt.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Area</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Area m^2" value={floor.area || ''}
                                    onChange={(evt) => setFloor({ ...floor, area: evt.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Baths</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Bathrooms" value={floor.baths || ''}
                                    onChange={(evt) => setFloor({ ...floor, baths: evt.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Rooms</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Rooms" value={floor.rooms || ''}
                                    onChange={(evt) => setFloor({ ...floor, rooms: evt.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Parking Slots</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                    type="text" placeholder="Slots" value={floor.parking_slots || ''}
                                    onChange={(evt) => setFloor({ ...floor, parking_slots: evt.target.value })}
                                />
                            </div>
                            <button
                                className="w-full bg-primary text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-dark transition duration-300"
                                onClick={publishFloor}
                            >
                                Publish
                            </button>
                        </form>
                    </>
                </div>
            </>
        </>
    )
}
