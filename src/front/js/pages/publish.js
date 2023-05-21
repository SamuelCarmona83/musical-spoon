import React from 'react'

export const Publish = () => {
    return (
        <div className=''>
            <header className="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-dark">Houses</h2>
                    <a href="/new" className="hover:bg-info group flex items-center rounded-md bg-primary text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
                            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        New
                    </a>
                </div>
                <form className="group relative">
                    <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    <input className="focus:ring-2 focus:ring-primary focus:outline-none appearance-none w-full text-sm leading-6 text-dark placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..." />
                </form>
            </header>
            <ul className="text-start p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
                {[1, 2, 3, 4, 5].map((id) => <li key={id} className='hover:border-primary hover:border-info hover:bg-primary hover:text-primary group w-full flex flex-col items-start justify-center rounded-md border-2 border-solid border-info text-sm leading-6 text-dark font-medium py-3 px-8'>
                    <div className="group-hover:text-white uppercase font-semibold text-dark">
                        project tittle
                    </div>
                    <div>
                        <span className="sr-only">Category</span>
                        <span className="group-hover:text-info">category</span>
                    </div>
                    <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                        <dt className="sr-only">Users</dt>
                        <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                            <img src="https://i.pravatar.cc/300" alt="name_user" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />
                            <img src="https://i.pravatar.cc/301" alt="name_user" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />
                            <img src="https://i.pravatar.cc/209" alt="name_user" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />
                            <img src="https://i.pravatar.cc/304" alt="name_user" className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white" loading="lazy" />

                        </dd>

                    </div>
                </li>)}
                <li className="flex">
                    <a href="/new" className="hover:border-primary hover:border-solid hover:bg-secondary bg-light hover:text-primary group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-info text-sm leading-6 text-dark font-medium py-3">
                        <svg className="group-hover:text-primary mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        New project
                    </a>
                </li>
            </ul>
        </div>
    )
}
