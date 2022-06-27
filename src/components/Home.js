import React from "react";
import { useNavigate } from "react-router-dom";
// import HomeTicker from "./HomeTicker";


function Home() {

    let navigate = useNavigate();

    async function handleNavigate(event) {
      navigate("../stockpage", { replace: true });
    }

    return (
        <div className="home-body">
            <div className="mx-auto ">
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                    <h2 className="home-header">
                    <div className="home-text-1">The Stock Platform</div>
                    <div className="home-text-2">For Beginners</div>
                    </h2>
                    <br></br>
                    <p className="home-text-3">Check out stock details and add them to your portfolio with one easy click!</p>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                <div className="home-button">
                    {/* <button className="get-started" onClick={() => handleNavigate()}>Get Started</button> */}
                    <button class="button-85" role="button" onClick={() => handleNavigate()}>Get Started</button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

export default Home;
{/* <HomeTicker /> */}