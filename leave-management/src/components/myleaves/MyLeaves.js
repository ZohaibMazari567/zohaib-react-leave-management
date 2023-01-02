import React from "react";
import "./MyLeaves.css";
import AllLeaves from "./AllLeaves";
import CasualLeaves from "./CasualLeaves";
import SickLeaves from "./SickLeaves";










function funcAll() {
  const all_bg_color = document.querySelector(".all-border");
  const casual_bg_color = document.querySelector(".casual-border");
  const sick_bg_color = document.querySelector(".sick-border");
  
  const all_section = document.querySelector(".all_leave");
  const casual_section = document.querySelector(".casual_leave");
  const sick_section = document.querySelector(".sick_leave");

 
  all_bg_color.classList.add("active-bg-color");
  casual_bg_color.classList.remove("active-bg-color");
  sick_bg_color.classList.remove("active-bg-color");

  all_section.classList.remove("section-display-none");
  casual_section.classList.add("section-display-none");
  sick_section.classList.add("section-display-none");


};

function funcCasual() {
  const all_bg_color = document.querySelector(".all-border");
const casual_bg_color = document.querySelector(".casual-border");
const sick_bg_color = document.querySelector(".sick-border");

const all_section = document.querySelector(".all_leave");
const casual_section = document.querySelector(".casual_leave");
const sick_section = document.querySelector(".sick_leave");
  all_bg_color.classList.remove("active-bg-color");
  casual_bg_color.classList.add("active-bg-color");
  sick_bg_color.classList.remove("active-bg-color");

  all_section.classList.add("section-display-none");
  casual_section.classList.remove("section-display-none");
  sick_section.classList.add("section-display-none");

 
};

function funcSick() {

  const all_bg_color = document.querySelector(".all-border");
  const casual_bg_color = document.querySelector(".casual-border");
  const sick_bg_color = document.querySelector(".sick-border");
  
  const all_section = document.querySelector(".all_leave");
  const casual_section = document.querySelector(".casual_leave");
  const sick_section = document.querySelector(".sick_leave");
  all_bg_color.classList.remove("active-bg-color");
  casual_bg_color.classList.remove("active-bg-color");
  sick_bg_color.classList.add("active-bg-color");
 

  all_section.classList.add("section-display-none");
  casual_section.classList.add("section-display-none");
  sick_section.classList.remove("section-display-none");

};





const MyLeaves = () => {
  return (
    <>
      <div className="my-leaves-container">
        <div id="my-leaves-heading">
          <h1>
            <strong> Leaves</strong>
          </h1>
        </div>
        <div className="my-leaves-forms">
          <div className="all-border active-bg-color" onClick={funcAll}>
            <span id="leaves-all">
              All
            </span>
          </div>

          <div className="casual-border" onClick={funcCasual}>
            <span>
              <i className="material-icons oringe-icon-dot">brightness_1</i>
            </span>
            <span id="leaves-casual">Casual</span>
          </div>

          <div className="sick-border" onClick={funcSick}>
            <span>
            
              <i className="material-icons blue-icon-dot">brightness_1</i>
            </span>

            <span  id="leaves-sick"> Sick </span>
          </div>
        </div>
       
       <div className="all_leave">
       <AllLeaves/>
       </div>
      
      <div className="casual_leave section-display-none">
      <CasualLeaves/>
      </div>

      <div className="sick_leave section-display-none">
      <SickLeaves/>
      </div>
     

        
      </div>
    </>
  );
};

export default MyLeaves;
