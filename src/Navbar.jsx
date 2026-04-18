import React from 'react'
import Wrapper from './Wrapper'
import { UseMyContext } from './NewsContext';
function Navbar() {

    const { setNews, fetchNews } = UseMyContext();

    let timer = null;
    const searchNews = async (e) => {
        const search = e.target.value;
        if (!search) return;
        clearTimeout(timer);

        timer = setTimeout(async () => {
            const data = await fetchNews(`search?q=${search}`)
            if (data && data?.articles) {
                setNews(data.articles);
                // console.log(data.articles);
            }
        }, 2000)


    }

   


    return (
        <>
            <div className="bg-base-300 sticky top-0 z-20">
                <Wrapper>
                    <div className="navbar  shadow-sm">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl">Daily NEws</a>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={searchNews} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            <div className="dropdown dropdown-bottom dropdown-end">
                                {/* Trigger Button */}
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </div>

                                {/* Dropdown Content */}
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                                >
                                    <h1>TODAY HEADLINES</h1>
                                    <li><a>Notification 1</a></li>
                                    <li><a>Notification 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    )
}

export default Navbar
