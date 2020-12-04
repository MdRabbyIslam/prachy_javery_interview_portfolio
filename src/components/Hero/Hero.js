import React from "react";
import "./Hero.css";
import ParticlesBg from "particles-bg";
import Typical from "react-typical";
import myImg from "../../Images/my.jpg";
import MyLinks from "../Shared/MyLinks";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="home">
        <div className="box">
          <img src={myImg} className="my-img" alt="" />
          <h1>Hello, </h1>
          <h2>
            I am{" "}
            <span style={{ color: "yellow" }}>
              <Typical
                steps={[
                  "Rabby Islam",
                  3000,
                  "a web developer",
                  3000,
                  "a Freelancer",
                  3000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </span>
          </h2>
          <MyLinks></MyLinks>
        </div>
      </div>
      <ParticlesBg color="#000000" num={200} type="cobweb" bg={true} />
    </>
  );
};

export default Hero;
