import React from "react";
import Header from "../components/header/header";
import CameraView from "../components/cameraview/cameraview"

const Home =() =>{
    return(
        <div>
            <div>
                <Header/>
                <CameraView/>
            </div>
        </div>
    )
}

export default Home;