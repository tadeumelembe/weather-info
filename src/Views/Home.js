import React from 'react';
import Search from '../Components/Search';

export default function Home() {
    return (
        <div className="home-div">
            <div className="d-flex flex-column align-items-center justify-content-center h-75 w-50 ml-0 mr-0 mx-auto">
                <h1 className="text-center pb-3 text-white">Weather</h1>

                <div>
                    <span className="home-search w-full">
                        <Search />

                    </span>
                </div>
            </div>
        </div >
    )

}