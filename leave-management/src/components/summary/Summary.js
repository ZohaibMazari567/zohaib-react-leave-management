import React from "react";
import { Link } from "react-router-dom";
import UserData from "../userdata/TableData";
import LeaveBox from "./LeaveBox";
import LeavesTable from "./LeavesTable";
import Next7DaysLeaves from "./Next7DaysLeaves";
import "./Summary.css";

const leave_date_To = [
  ...new Set(
    Next7DaysLeaves.map((data) => {

    
      return data.DateTo;
    })
  ),
];







const time1 = new Date();
time1.setDate(time1.getDate());
let Curent_date_day_from = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
}).format(time1);

let Curent_date_month_from = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
}).format(time1); 

let Curent_date_year_from = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
}).format(time1);





const time2 = new Date();
time2.setDate(time2.getDate()+7);
let Curent_date_day_To = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
}).format(time2);

let Curent_date_month_To = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
}).format(time2); 

let Curent_date_year_To = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
}).format(time2);















const Summary = () => {
  return (
    <>
      <div className="main-section-container">
        <div className="summary-section">
          <div className="left-side">
            <div className="inner-box" id="leave-summary">
              <div className="leave-summay-heading">
                <h1>Leaves Summary</h1>
              </div>
              <div className="container">{<LeaveBox />}</div>
            </div>
          </div>
        </div>
        <div className="next-days-section">
          <h1 className="heading">In next 7 days</h1>

          <hr className="next-days-hr" />
          <h2 className="sub-heading">Friday 02/11/2018</h2>

          <hr className="next-days-hr" />

          <div className="box-days">
            <div className="pic-name">
              <div>
                <img src="images/pic.jpg" alt="" className="img-users" />
              </div>
              <div className="align">
                <h3 className="name-users">Momcilo Milijasevic</h3>
                <h4 className="days">(All Day)</h4>
              </div>
            </div>

            <div>
              <h4 className="reason">Unpaid-sick day</h4>
            </div>
          </div>

          <div className="box-days">
            <div className="pic-name">
              <div>
                <img src="images/test2.jpeg" alt="" className="img-users" />
              </div>
              <div className="align">
                <h3 className="name-users">Somebody Else</h3>
                <h4 className="days">(12:40pm-4pm)</h4>
              </div>
            </div>

            <div>
              <h4 className="reason">Paid-sick day</h4>
            </div>
          </div>

          <h3 className="sub-heading">Monday 05/11/2018</h3>
          <hr className="next-days-hr" />

          <div className="box-days">
            <div className="pic-name">
              <div>
                <img src="images/test3.jpeg" alt="" className="img-users" />
              </div>
              <div className="align">
                <h3 className="name-users">Anybody Acually</h3>
                <h4 className="days">(All Day)</h4>
              </div>
            </div>

            <div>
              <h4 className="reason">Jury Service</h4>
            </div>
          </div>

          <div className="box-days">
            <div className="pic-name">
              <div>
                <img src="images/test4.png" alt="" className="img-users" />
              </div>
              <div className="align">
                <h3 className="name-users">Someone Here</h3>
                <h4 className="days">(All Day)</h4>
              </div>
            </div>

            <div>
              <h4 className="reason">Study leave / Training</h4>
            </div>
          </div>
        </div>
      </div>

     {<LeavesTable/>}
    </>
  );
};

export default Summary;
