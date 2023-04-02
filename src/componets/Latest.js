import React from 'react';

const Latest = () => {
    return (
        <section>
            <div className="container">
                <div className="border-solid bg-gray-700 bg-opacity-30 p-[20px] ml-[80px] w-[1170px] rounded-[34px]">
                    <center>
                        <h1 className="text-white text-[42px]">Subscribe to get the Latest News</h1>
                        <p className="text-white pt-[10px] text-[16px]">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>
                        <div className="mt-[25px]">
                            <input type="text" placeholder="Enter your email addres" className="p-[20px] pr-[400px] text-white rounded-[70px] bg-zinc-600"/>
                            <button type="button"
                                    className="text-white rounded-[50px] ml-[20px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Subscribe
                            </button>
                        </div>
                    </center>

                </div>
            </div>
        </section>
    );
};

export default Latest;