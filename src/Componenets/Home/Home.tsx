import React from "react";
import Form from "../Form/Form";
import Scroll from "../Scroll/Scroll";

const Home = () => {
  return (
    <div>
        <div className="ml-96 mr-96">
      <div className="">
        <h1 className=" text-left text-white">TECH</h1>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <div className="">
          <div>
            <h1 className="text-white text-2xl ">
              Searching for{" "}
              <span className=" font-bold">Augmented Development</span> Teams to
              steer your product towards triumph?"
            </h1>
          </div>
          <div className="text-white flex space-x-3">
            <div>
              <h1 className="font-bold">50+</h1>
              <p className=" text-xs ">clients</p>
            </div>
            <div>
              <h1 className="font-bold">80+</h1>
              <p className=" text-xs ">Projects successfully completed</p>
            </div>
            <div>
              <h1 className="font-bold">60%</h1>
              <p className=" text-xs">
                of the clients converted into long term engagement partners
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Form />
        </div>
      </div>

   
    </div>
    <Scroll />
    </div>
    
  );
};

export default Home;
