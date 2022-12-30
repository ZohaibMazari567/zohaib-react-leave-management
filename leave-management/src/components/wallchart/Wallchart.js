import React from 'react'
import './Wallchart.css'
import UserData, { UpcomingHolidaysData } from '../userdata/TableData'
import { Link } from 'react-router-dom'
const Wallchart = () => {
  return (
    <>

<div className="approve-leave-container">





{/* <!-- ------------------------------------------------------------------  --> */}

<div className="profile-container">


  <div className="user-profile-pto">


    <div className="pto-profile">


      <div className="user-pic-name">


        <div> <img src="images/test2.jpeg" id="profile-pic" alt=""/> </div>
        <div className="user-name-position">
          <h1 id="user-name">Nadia Jamrozik</h1>
          <p id="user-position">Product Manager</p>
        </div>

      </div>




      <div className="number-of-days">

        <div>
          <p className="leave-days-summary">Year to Date</p>
          <p>PTO</p>
        </div>


        <div>
          <p className="leave-days-summary">Days Available</p>
          <p>5</p>


        </div>
        <div>

          <p className="leave-days-summary">Days Used</p>
          <p>8</p>
        </div>


      </div>



    </div>


    <div className="pto-container">

      <div className="pto">

        <div className="pto-heading">
          <h2>
            Paid Time Off (PTO)
          </h2>
        </div>

        <div className="pending">

          <span><i className="fa-regular fa-clock pending-icon"></i></span>


          <span href=""> Pending</span>
        </div>

      </div>

      <div className="form2">

        <div className="pto-box">
          <div>
            <h4 className="day">Monday</h4>
            <span className="month">August 8</span>
          </div>
          <div className="year">
            <span>2022</span>
          </div>

        </div>

        <div className="arrow">
          <i className="fa-solid fa-arrow-right"></i>

        </div>

        <div className="pto-box">
          <div>
            <h4 className="day">Monday</h4>
            <span className="month">August 8</span>
          </div>
          <div className="year"><span>2022</span></div>

        </div>

        <div className="purpos-box">
          <p className="work-days">4 Work Days Requested</p>
          <div className="purpos">

            <span><i className="fa-solid fa-pen"></i></span>


            <span href=""> Purpose Changes</span>
          </div>
        </div>


      </div>

      <div className="leave-reason">
        <p className="leave-reason-text">My child is out of school for break and i need to stay home for childcare</p>

      </div>
      <hr className="pto-hr"/>
      <div className="note">
        <h4> Note from Management</h4>
      </div>

      <div>
        <input type="text" className="note-input" 
          placeholder="Please enter your reason for approving or denying  the request  "/>

      </div>

      <div className="btn">
        <button className="reject">Reject Request</button>
        <button className="approve">Approve Request</button>
      </div>




    </div>





  </div>







</div>


<div className="upcoming-list-section">

   

  <div className="upcoming-holidays-list">

    <div className="holidays-table-heading">
      <h2>Upcoming Public Holidays</h2>
    </div>

    <table className="holidays-table">



     {
      UpcomingHolidaysData.map((holidays)=>{

        return(
          <tr className="upcoming-list-table-row">

        <td>

          <div className="column-data">


            <div>

              <div>
                <h4 className="list-date">{holidays.date}</h4>
              </div>
              <div>
                <p className="holidays-week">{holidays.day}</p>
              </div>

            </div>

            <div>
              <h4 className="holidays-reason">{holidays.event}</h4>
            </div>

          </div>

          <hr className="upcomming-list-hr"/>

        </td>


      </tr>



        )

      })
     }




      




      


    </table>
  </div>


</div>



</div>

    </>
  )
}

export default Wallchart