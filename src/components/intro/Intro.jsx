import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 500,
            backSpeed: 50,
            // showCursor: true,
            strings: ["Web Designer", "Blockchain Developer", "Software Engineer", "Web Developer"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="/assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, my name is</h2>
                    <h1>Arash Aria</h1>
                    <h3>and I am a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
