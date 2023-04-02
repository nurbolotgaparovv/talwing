import React, {useState} from 'react';
import logo from "../img/Logo.png"

const Header = ({dark,setDark}) => {

    return (
        <section>
            <div className="container">
                <div className="flex justify-between items-center p-[40px]">
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div className="flex w-[55%]">
                        <div className=" flex justify-between w-[100%] text-gray-50">
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Service</a>
                            <a href="">Pricing</a>
                            <a href="">Blog</a>
                            <div>
                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setDark(!dark)}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Header;