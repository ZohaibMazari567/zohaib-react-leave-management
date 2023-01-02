import React from 'react'
import "./SubmitRequest.css"
import { Link } from 'react-router-dom'




function func_1() {
    const leave_type1 = document.querySelector(".type-1");
const leave_type2 = document.querySelector(".type-2");
const leave_type3 = document.querySelector(".type-3");
const leave_type4 = document.querySelector(".type-4");

const radio_btn1 = document.getElementById("radio_btn1");
const radio_btn2 = document.getElementById("radio_btn2");
const radio_btn3 = document.getElementById("radio_btn3");
const radio_btn4 = document.getElementById("radio_btn4");
  if ((radio_btn1.checked = true)) {
    leave_type1.classList.add("checked-box");
    leave_type2.classList.remove("checked-box");
    leave_type3.classList.remove("checked-box");
    leave_type4.classList.remove("checked-box");
  }
}
function func_2() {
    const leave_type1 = document.querySelector(".type-1");
const leave_type2 = document.querySelector(".type-2");
const leave_type3 = document.querySelector(".type-3");
const leave_type4 = document.querySelector(".type-4");

const radio_btn1 = document.getElementById("radio_btn1");
const radio_btn2 = document.getElementById("radio_btn2");
const radio_btn3 = document.getElementById("radio_btn3");
const radio_btn4 = document.getElementById("radio_btn4");
  if ((radio_btn2.checked = true)) {
    leave_type1.classList.remove("checked-box");
    leave_type2.classList.add("checked-box");
    leave_type3.classList.remove("checked-box");
    leave_type4.classList.remove("checked-box");
  }
}
function func_3() {
    const leave_type1 = document.querySelector(".type-1");
const leave_type2 = document.querySelector(".type-2");
const leave_type3 = document.querySelector(".type-3");
const leave_type4 = document.querySelector(".type-4");

const radio_btn1 = document.getElementById("radio_btn1");
const radio_btn2 = document.getElementById("radio_btn2");
const radio_btn3 = document.getElementById("radio_btn3");
const radio_btn4 = document.getElementById("radio_btn4");
  if ((radio_btn3.checked = true)) {
    leave_type1.classList.remove("checked-box");
    leave_type2.classList.remove("checked-box");
    leave_type3.classList.add("checked-box");
    leave_type4.classList.remove("checked-box");
  }
}
function func_4() {
    const leave_type1 = document.querySelector(".type-1");
const leave_type2 = document.querySelector(".type-2");
const leave_type3 = document.querySelector(".type-3");
const leave_type4 = document.querySelector(".type-4");

const radio_btn1 = document.getElementById("radio_btn1");
const radio_btn2 = document.getElementById("radio_btn2");
const radio_btn3 = document.getElementById("radio_btn3");
const radio_btn4 = document.getElementById("radio_btn4");

  if ((radio_btn4.checked = true)) {
    leave_type1.classList.remove("checked-box");
    leave_type2.classList.remove("checked-box");
    leave_type3.classList.remove("checked-box");
    leave_type4.classList.add("checked-box");
  }
}



const SubmitRequest = () => {
  return (
   <>

<div class="submit-request-container">
      <h1 id="submit-request-heading">Submit A Request</h1>

      <div class="submit-request-section">


        <h4 id="type-leave-heading">Type of Leave</h4>

        {/* <!-- Type of Leave --> */}
        <form action="" class="submit-request-form" >
          <div class="first-row">
            <div class="submit-request-box type-1">
              <div >
                <input type="radio" name="leave-type" 
                id="radio_btn1" class="radio-btn"
                onClick={func_1}
                />
              </div>
              <div class="box-description">
                <h4 class="box-heading">Paid Time off (PTO)</h4>
                <p class="box-peragraph">
                  Each computrcraft employee has 15 PTO days per year
                </p>
              </div>
            </div>
  
            <div class="submit-request-box type-2" >
              <div >
                <input type="radio"  name="leave-type" 
                id="radio_btn2"
                class="radio-btn"
                onClick={func_2}
                />
              </div>
              <div class="box-description">
                <h4 class="box-heading">Telecommuting</h4>
                <p class="box-peragraph">
                  Working outside of the office during normal office hour
                </p>
              </div>
            </div>
          </div>
  
          <div class="first-row">
            <div class="submit-request-box type-3"  >
              <div >
                <input type="radio" name="leave-type" 
                id="radio_btn3"
                class="radio-btn"
                onClick={func_3}
                />
              </div>
              <div class="box-description">
                <h4 class="box-heading">Jury Duty</h4>
                <p class="box-peragraph">
                  Computecraft will compensate employees for up to 15 days of jury
                  duty
                </p>
              </div>
            </div>
  
            <div class="submit-request-box type-4" >
              <div >
                <input type="radio"  name="leave-type" 
                id="radio_btn4"
                class="radio-btn" 
                
                onClick={func_4}
                />
              </div>
                <div class="box-description">
                  <h4 class="box-heading">Bereavement</h4>
                <p class="box-peragraph">
                  If a close family member has passed away,Please take time to be
                  with your family
                </p>
              </div>
            
          </div>
          </div>
        </form>
  
        <hr class="submit-request-hr"/>
        <h4 id="date-range-heading">Date Range</h4>
  
        <div class="clender">
          <div class="start-date">
            <label for="" class="label-start">Start date</label> <br />
            <input type="date" />
          </div>
          <div>
            <i class="material-icons icone-arrow">arrow_forward</i>
          </div>
  
          <div class="end-date">
            <label for="" class="label-end">End date</label> <br />
            <input type="date" />
          </div>
        </div>
  
        <hr class="submit-request-hr2"/>
  
        <h4 class="note-management-heading">Note To Management</h4>
        <input
          type="text"
          class="input-message"
          placeholder="Please enter any detail that management should take into considration"/>
  
        <div class="btn">
          <a href="" class="submit"> Submit Request</a>
        </div>

      </div>
     
    </div>

   </>
  )
}

export default SubmitRequest