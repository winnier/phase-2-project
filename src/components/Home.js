import React from "react";
import { useNavigate } from "react-router-dom";



function Home() {

    let navigate = useNavigate();

    async function handleNavigate(event) {
      navigate("../stockpage", { replace: true });
    }

    return (
        <div className="home-body">
            <div className="mx-auto ">
                <div className="text-center">
                    <h2 className="home-header">
                    <div className="home-text">The stock platform</div>
                    <div className="home-text">for beginners</div>
                    </h2>
                    <p className="home-text-2">Check out stock details and add them to your portfolio with one easy click!</p>
                </div>
                <br></br>
                <div className="flex justify-center mt-4 sm:mt-8">
                    <button className="get-started" onClick={() => handleNavigate()}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
