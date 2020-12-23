import React from "react"
import aboutImg from "../Asset/Christmas-Tree-Near-Fireplace-at-Home.jpg"

const About = () => {
    return(
    <>
    <div className = "about-section">
        <div className = "about-img">
        <img src={aboutImg} alt="beautiful tree"/>
            <div classname = "title">
                <h1>how it started</h1>
            </div>
            <div className="underline-text">
                <p>Dolore exercitation est minim nulla. Reprehenderit aliquip sit reprehenderit mollit cillum consequat ullamco anim 
                aliquip. Sint velit qui ut labore ex ut et tempor laboris. Incididunt officia nulla velit commodo quis magna minim. 
                Aute adipisicing elit nulla proident sunt excepteur amet esse minim voluptate commodo.
                </p>
            </div>
            
        </div>
     </div>
    </>
    );
}
export default About;