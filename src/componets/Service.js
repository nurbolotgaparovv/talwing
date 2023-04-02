import React, {useState} from 'react';
import Icon from "../img/Icon.png"
import Icon1 from "../img/Icon (1).png"
import Icon2 from "../img/Icon (2).png"
import vector from "../img/Vector.png"
const Service = () => {
    const [service, setService] = useState(false)
    return (
       <section className="pt-[50px]">
           <div className="container">
               <div>
                   <center>
                       <h1 className="text-white text-[42px]">Our Service </h1>
                       <p  className="text-white w-[580px] pt-[30px]">We turn information into actionable insights We work to understand your issues
                           and are driven to ask better questions in the pursuit of making work.</p>
                   </center>
                   <div className="" >
                       <div className="flex m-[50px]" >
                           <div className=" flex justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30 w-[400px] rounded-[30px] p-[10px]">
                               <img src={Icon} alt=""/>
                               <h3 className="text-white text-[24px] pt-[18px]">Order Management</h3>
                               <p className="text-white text-[16px] w-[330px] pt-[18px]">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                               <div className=" flex items-center pt-[15px] ">
                                   <button className="p-[10px] bg-gray-700  rounded-[28px]" onClick={() => setService(!service)}><p className="text-white text-[16px]">Learn more</p></button>
                                   <img src={vector} alt="" className='pl-[10px] pt-[5px] w-[30px]' />
                               </div>
                           </div>
                           <div className=" flex justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30  w-[400px] rounded-[30px] p-[10px] ml-[50px]">
                               <img src={Icon} alt=""/>
                               <h3 className="text-white text-[24px] pt-[18px]">Social Assistant</h3>
                               <p className="text-white text-[16px] w-[330px] pt-[18px]">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                               <div className=" flex items-center pt-[15px] ">
                                   <button className="p-[10px] bg-gray-700  rounded-[28px]" onClick={() => setService(!service)}><p className="text-white text-[16px]">Learn more</p></button>

                                   <img src={vector} alt="" className='pl-[10px] pt-[5px] w-[30px]' />
                               </div>
                           </div>
                           <div className=" flex justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30  w-[400px] rounded-[30px] p-[10px] ml-[50px]">
                               <img src={Icon1} alt=""/>
                               <h3 className="text-white text-[24px] pt-[18px]">Crypto Platform</h3>
                               <p className="text-white text-[16px] w-[330px] pt-[18px]">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                               <div className=" flex items-center pt-[15px] ">
                                   <button className="p-[10px] bg-gray-700  rounded-[28px]" onClick={() => setService(!service)}><p className="text-white text-[16px]">Learn more</p></button>
                                   <img src={vector} alt="" className='pl-[10px] pt-[5px] w-[30px]' />
                               </div>
                           </div>
                       </div>
                       <div className="flex m-[50px]" style={{
                           display: service ? "flex" : "none"
                       }}>
                           <div className=" flex justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30  w-[400px] rounded-[30px] p-[10px]">
                               <img src={Icon2} alt=""/>
                               <h3 className="text-white text-[24px] pt-[18px]">Smart Trading Modules</h3>
                               <p className="text-white text-[16px] w-[330px] pt-[18px]">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                               <div className=" flex items-center pt-[15px] ">
                                   <p className="text-white text-[16px]">Learn more</p>
                                   <img src={vector} alt="" className='pl-[10px] pt-[5px] w-[30px]' />
                               </div>
                           </div>
                           <div className=" flex justify-center flex-col items-center bg-gray-700 bg-opacity-30 w-[400px] rounded-[30px] p-[10px] ml-[50px]">
                               <img src={Icon} alt=""/>
                               <h3 className="text-white text-[24px] pt-[18px]">Analyzer of the News</h3>
                               <p className="text-white text-[16px] w-[330px] pt-[18px]">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                               <div className=" flex items-center pt-[15px] ">
                                   <p className="text-white text-[16px]">Learn more</p>
                                   <img src={vector} alt="" className='pl-[10px] pt-[5px] w-[30px]' />
                               </div>
                           </div>
                           <div className=" flex justify-center flex-col items-center border-solid bg-gray-700 bg-opacity-30 w-[400px] rounded-[30px] p-[10px] ml-[50px]">
                               <img src={Icon} alt=""/>
                               <h3 className="text-white text-[24px] pt-[18px]">Module of Price Notification</h3>
                               <p className="text-white text-[16px] w-[330px] pt-[18px]">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                               <div className=" flex items-center pt-[15px] ">
                                   <p className="text-white text-[16px]">Learn more</p>
                                   <img src={vector} alt="" className='pl-[10px] pt-[5px] w-[30px]' />
                               </div>
                           </div>
                       </div>


                   </div>

               </div>
           </div>
       </section>
    );
};

export default Service;