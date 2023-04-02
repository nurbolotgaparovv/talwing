import React from 'react';
import saypi from "../img/saypi.png"
import restangle from "../img/Rectangle 56.png"
import bahab from "../img/bahab.png"
import guzi from "../img/guzi.png"
import group from "../img/Group.png"
import linkedin from "../img/linkedin 1.png"
import twitter from "../img/twitter.png"
import facebook from "../img/facebook.png"

const Teams = () => {
    return (
       <section className="p-[100px]">
           <div className="container">
               <div>
                   <center>
                       <h1 className="text-white text-[42px]">Met Our Team</h1>
                       <p className="text-white text-[16px] w-[460px] pt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                           accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                       </p>
                   </center>
               </div>
               <div className="flex pt-[30px]">
                   <div className="flex justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30 w-[300px] p-[10px] rounded-[28px]">
                       <img src={saypi} alt=""/>
                       <h1 className="text-white text-[28px]">Sunny Khan</h1>
                       <p className="text-white text-[16px]">Executive officer</p>
                       <div className="flex">
                           <img src={group} alt="" className="m-[5px]"/>
                           <img src={linkedin} alt="" className="m-[5px]"/>
                           <img src={twitter} alt="" className="m-[5px]"/>
                           <img src={facebook} alt="" className="m-[5px]"/>
                       </div>
                   </div>
                   <div className="flex ml-[30px] justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30 w-[300px] p-[10px] rounded-[28px]">
                       <img src={restangle} alt=""/>
                       <h1 className="text-white text-[28px]">Alina Jesia</h1>
                       <p className="text-white text-[16px]">UX/UI DESIGNER</p>
                       <div className="flex">
                           <img src={group} alt="" className="m-[5px]"/>
                           <img src={linkedin} alt="" className="m-[5px]"/>
                           <img src={twitter} alt="" className="m-[5px]"/>
                           <img src={facebook} alt="" className="m-[5px]"/>
                       </div>
                   </div>
                   <div className="flex justify-center  ml-[30px]  flex-col items-center border-solid bg-gray-700 bg-opacity-30 w-[300px] p-[10px] rounded-[28px]">
                       <img src={bahab} alt=""/>
                       <h1 className="text-white text-[28px]">Alex Sohag</h1>
                       <p className="text-white text-[16px]">BUSINESS DEVELOPMENT</p>
                       <div className="flex">
                           <img src={group} alt="" className="m-[5px]"/>
                           <img src={linkedin} alt="" className="m-[5px]"/>
                           <img src={twitter} alt="" className="m-[5px]"/>
                           <img src={facebook} alt="" className="m-[5px]"/>
                       </div>
                   </div>
                   <div className="flex justify-center  ml-[30px]  flex-col items-center border-solid bg-gray-700 bg-opacity-30 w-[300px] p-[10px] rounded-[28px]">
                       <img src={guzi} alt=""/>
                       <h1 className="text-white text-[28px]">Afroza Mou</h1>
                       <p className="text-white text-[16px]">Head of marketing</p>
                       <div className="flex">
                           <img src={group} alt="" className="m-[5px]"/>
                           <img src={linkedin} alt="" className="m-[5px]"/>
                           <img src={twitter} alt="" className="m-[5px]"/>
                           <img src={facebook} alt="" className="m-[5px]"/>
                       </div>
                   </div>
               </div>
           </div>

       </section>
    );
};

export default Teams;