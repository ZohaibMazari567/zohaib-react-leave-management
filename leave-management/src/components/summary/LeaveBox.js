import React from "react";

import UserData, { LeaveBoxData } from "../userdata/TableData";

const LeaveBox = () => {
  return (
    <>


    {LeaveBoxData.map((boxData)=>{

        return(

            <div className="box">
        <div className="box-border">
          <h5 className="head">{boxData.title}</h5>
          <div className="summary-values">
            <div>
              <span className="num"> {boxData.num} </span>
            </div>

            <div className="box-icons-up">
              <div>
               
              </div>
              <div>{boxData.percent}%</div>
            </div>
          </div>
        </div>

        <div>
          <p className="p1">{boxData.description}</p>
        </div>
      </div>

        )
    })
    }


    
    </>
  );
};

export default LeaveBox;
