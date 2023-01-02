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
let day_from = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
}).format(time1);

let month_from = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
}).format(time1); 

let year_from = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
}).format(time1);





const time2 = new Date();
time2.setDate(time2.getDate()+7);
let day_To = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
}).format(time2);

let month_To = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
}).format(time2); 

let year_To = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
}).format(time2);















const Summary = () => {
  return (
    <body className="body">
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





          
          {
              leave_date_To.map((item)=>{


               const date_Day = new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                  }).format(item);
                  
                   const date_Month = new Intl.DateTimeFormat("en-US", {
                    
                     month: "2-digit",
                   
                   }).format(item);
                   
                     const date_Year = new Intl.DateTimeFormat("en-US", {
                       year: "numeric",
                     }).format(item);



                      if(date_Year>=year_from && date_Year<=year_To)
             {
              if(date_Month>=month_from|| date_Month<=month_To)
              {
              
              if(date_Day>day_from || date_Day<=day_To)
              {
                  return (
                    <div>
                      <h3 className="sub-heading">
                        {date_Day + "/" + date_Month + "/" + date_Year}
                      </h3>
                      <hr></hr>
                      {Next7DaysLeaves.map((date1) => {
                        let date12 = new Intl.DateTimeFormat("en-US", {
                          day: "2-digit",
                        }).format(date1.DateTo);

                        if (date12 === date_Day) {
                          return (
                          

                             <div className="box-days">
            <div className="pic-name">
              <div>
                <img src="images/pic.jpg" alt="" className="img-users" />
              </div>
              <div className="align">
                <h3 className="name-users">{date1.Username}</h3>
                <h4 className="days">(All Day)</h4>
              </div>
            </div>

            <div>
              <h4 className="reason">Unpaid-sick day</h4>
            </div>
          </div>

                          );
                        }
                      })}
                    </div>
                  );
              }
              }
             }


              })
          }





          

         







         




        
        </div>
      </div>

     {<LeavesTable/>}
    </body>
  );
};

export default Summary;
