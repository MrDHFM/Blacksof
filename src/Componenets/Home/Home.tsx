import React from "react";
import Form from "../Form/Form";
import Scroll from "../Scroll/Scroll";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid container className="">
    <div>
        <div className="lg:ml-96 lg:mr-96 xl:ml-96 xl:mr-96 md:ml-48 md:mr-48 sm:ml-24 sm:mr-24">
      <div className="">
        <h1 className=" text-left text-white">TECH</h1>
      </div>
      <div className="flex items-center justify-between space-x-3 ">
        
         <Grid item xs={12} sm={12} lg={6}>
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
        </Grid>
        <Grid item xs={12} sm={12} lg={6} >
        <div className="">
          <Form />
        </div>
        </Grid>
        
      </div>

   
    </div>
    </div>
    <Grid item xs={12} sm={12} md={12} lg={12}  >
    <Scroll />
    </Grid>
    </Grid>
    
  );
};

export default Home;
