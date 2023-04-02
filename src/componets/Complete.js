import React from 'react';
import dad from "../img/dad.png"

const Complete = () => {
    return (
       <section className="pt-[100px]">
           <div className="container">
               <div className="flex items-center">
                   <div>
                       <img src={dad} alt=""/>
                   </div>
                   <div className="pl-[50px]">
                       <h1 className="text-white text-[42px] w-[530px]">We complete every projects
                           extra care as customer need</h1>
                       <p className="text-white text-[16px] w-[600px] pt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                       <button type="button"
                               className="text-white mt-[30px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more
                       </button>
                   </div>

               </div>
           </div>
       </section>
    );
};

export default Complete;