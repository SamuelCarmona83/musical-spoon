import React from 'react'

export const Profile = () => {
    return (
        <>
            <div className="w-full lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-24">
                    <div className="">
                        <div className="flex flex-wrap justify-center bg-light">
                            <div className="w-full p-4 flex justify-center">
                                <div className="relative">
                                    <img alt="profile" src="https://i.pravatar.cc/800" className="shadow-xl rounded-full h-auto align-middle border-none  -mt-16 max-w-[200px]" />
                                </div>
                            </div>
                            <div className="w-full px-4 text-center mt-2">
                                <div className="flex justify-center">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                                            22
                                        </span>
                                        <span className="text-sm text-blueGray-400">Friends</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                                            10
                                        </span>
                                        <span className="text-sm text-blueGray-400">Photos</span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
                                            89
                                        </span>
                                        <span className="text-sm text-blueGray-400">Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center my-4">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Jenna Stones
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                Los Angeles, California
                            </div>
                            <div className="mb-2 text-blueGray-600">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                Solution Manager - Creative Tim Officer
                            </div>
                        </div>
                        <div className="mt-2 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-xs leading-relaxed text-blueGray-700">
                                        An artist of considerable range, Jenna the name taken
                                        by Melbourne-raised, Brooklyn-based Nick Murphy
                                        writes, performs and records all of his own music,
                                        giving it a warm, intimate feel with a solid groove
                                        structure. An artist of considerable range.
                                    </p>
                                    <a href="#" className="font-normal text-dark">
                                        Show more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
