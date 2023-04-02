import React from 'react';
import video from "../img/video.png"
import man from "../img/man.png"
const Hero = () => {
    return (
      <section>
          <div className="container">
              <div className=" flex items-center " >
                  <div>
                      <div>
                          <h1 className="text-blue-400 w-[600px] text-[58px]">Virtual <b className="text-fuchsia-500">Reality</b> Business <b className="text-fuchsia-500">Solutions</b> </h1>
                          <p className="text-white w-[520px] text-[15px] pt-[29px]">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
                      </div>
                      <div className="pt-[31px] flex items-center">
                          <button type="button"
                                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Join Us</button>
                          <div className="flex">
                              <img src={video} alt="" className="pl-[10px] pr-[10px]"/>
                              <button className="text-white">Watch video</button>
                          </div>
                      </div>
                  </div>
                  <img src={man} alt=""/>

              </div>
          </div>

      </section>

    );
};

export default Hero;