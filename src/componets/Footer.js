import React from 'react';
import logo from "../img/Logo.png"


const Footer = () => {
    return (
       <section className="pt-[120px]">
           <div className="container]">
               <div className="flex justify-between items-center">
                   <div>
                       <img src={logo} alt=""/>
                       <h1 className="text-white text-[16px] pt-[10px]">Dhaka, Bangladesh</h1>
                       <h1 className="text-white text-[16px] pt-[10px]">0943833399</h1>
                       <h1 className="text-white text-[16px] pt-[10px]">support@zone.com</h1>
                   </div>
                   <div className="text-white flex w-[1000px] flex-col leading-[27px]">
                       <a href="">Service</a>
                       <a href="">Order Management</a>
                       <a href="">Social Assistant</a>
                       <a href="">Crypto Platform</a>
                       <a href="">Analyzer of the News</a>
                   </div>
                   <div className="text-white flex w-[1000px] flex-col">
                       <a href="">Company</a>
                       <a href="">About Us</a>
                       <a href="">News</a>
                       <a href="">Our trusted partner</a>
                       <a href="">New users FAQ</a>
                   </div>
                   <div className="text-white flex w-[1000px] flex-col">
                       <a href="">Supports</a>
                       <a href="">Help center</a>
                       <a href="">Feedbcak</a>
                       <a href="">Contact us</a>
                       <a href="">Terms conditins</a>
                   </div>
                   <div className="text-white flex w-[1000px] flex-col">
                       <a href="">Resources</a>
                       <a href="">Download app</a>
                       <a href="">Blog</a>
                       <a href="">What’s new</a>
                       <a href="">Sitemap</a>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Footer;