import React from 'react'
import './Summary.css'


const Summary = () => {
  return (
  <>

<div className="main-section-container">


    
   

      <div className="summary-section"> 
       
        <div className="left-side">
          <div className="inner-box" id="leave-summary">
            <div className="leave-summay-heading"><h1>Leaves Summary</h1></div>
            <div className="container">
              <div className="box">
                <div className="box-border">
                  <h5 className="head">Total Employees</h5>
                  <div className="summary-values">

                    <div><span className="num"> 1,409 </span></div>

                    <div className="box-icons-up">
                      <div>   <i className="fa-solid fa-arrow-trend-up"></i></div>
                      <div>23%</div>
                   
                    
                  </div>

                  </div>
                  
                 
                </div>

                <div>
                  <p className="p1">13 Applications need review</p>
                </div>
              </div>

              <div className="box">
                <div className="box-border">
                  <h5 className="head">Total Overtime</h5>

                  <div className="summary-values">

                    <div><span className="num"> 569 </span></div>

                    <div className="box-icons-up">
                      <div>   <i className="fa-solid fa-arrow-trend-up"></i></div>
                      <div>13%</div>
                   
                    
                  </div>

                  </div>
                </div>

                <div>
                  <p className="p1">103 overtime schedules need approval</p>
                </div>
              </div>

              <div className="box">
                <div className="box-border">
                  <h5 className="head">Total Leaves</h5>

                  <div className="summary-values">

                    <div><span className="num"> 103 </span></div>

                    <div className="box-icons-down">
                      <div>  <i className="fa-solid fa-arrow-trend-down"></i></div>
                      <div>3%</div>
                   
                    
                  </div>

                  </div>

                  
                </div>

                <div>
                  <p className="p1">98 paid leave plans need approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div> 
      <div className="next-days-section">
        <h1 className="heading">In next 7 days</h1>

        <hr className="next-days-hr" />
        <h2 className="sub-heading">Friday 02/11/2018</h2>

        <hr className="next-days-hr"  />

      
        <div className="box-days">
          <div className="pic-name">
            <div><img src="images/pic.jpg" alt="" className="img-users" /></div>
            <div className="align">
              <h3 className="name-users">Momcilo Milijasevic</h3>
              <h4 className="days">(All Day)</h4>
            </div>
          </div>

          <div >
            <h4 className="reason">Unpaid-sick day</h4>
          </div>
        </div>

       
        <div className="box-days">
          <div className="pic-name">
            <div><img src="images/test2.jpeg" alt="" className="img-users" /></div>
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
        <hr className="next-days-hr"  />
      
        <div className="box-days">
          <div className="pic-name">
            <div><img src="images/test3.jpeg" alt="" className="img-users" /></div>
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
            <div><img src="images/test4.png" alt="" className="img-users" /></div>
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


<div className="request-for-leave"> <h2 >Request for leave</h2> </div>
    <div className="table-section">
      <div className="list-heading">
      
    </div>
    <div className="data-list">
      <table className="table" border="1" frame="void" rules="rows">
     
        <tr>
          <th className="emp-width">Employee Name</th>
          <th className="leave-type-clm">Leaves Type</th>
          <th className="from-to-clm">Form-To</th>
        </tr>

       
        <tr className="request-table-row">
          <td className="hover">
            <div className="list-profile">
              <div><img src="images/pic.jpg" className="dp" alt="profile picture" /></div>
              <div className="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td className="leave-type">Unpaid-Sick Day</td>
          <td className="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div className="approve-section">
              <div>
                <a href="" className="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" className="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" className="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

      

        <tr className="request-table-row">
          <td >
            <div className="list-profile">
              <div><img src="images/pic.jpg" className="dp" alt="profile picture" /></div>
              <div className="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td className="leave-type">Unpaid-Sick Day</td>
          <td className="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div className="approve-section">
              <div>
                <a href="" className="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" className="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" className="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

      
        <tr className="request-table-row">
          <td >
            <div className="list-profile">
              <div><img src="images/pic.jpg" className="dp" alt="profile picture" /></div>
              <div className="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td className="leave-type">Unpaid-Sick Day</td>
          <td className="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div className="approve-section">
              <div>
                <a href="" className="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" className="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" className="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

      
        <tr className="request-table-row">
          <td >
            <div className="list-profile">
              <div><img src="images/pic.jpg" className="dp" alt="profile picture" /></div>
              <div className="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td className="leave-type">Unpaid-Sick Day</td>
          <td className="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div className="approve-section">
              <div>
                <a href="" className="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" className="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" className="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

        <tr className="request-table-row">
          <td >
            <div className="list-profile">
              <div><img src="images/pic.jpg" className="dp" alt="profile picture" /></div>
              <div className="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td className="leave-type">Unpaid-Sick Day</td>
          <td className="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div className="approve-section">
              <div>
                <a href="" className="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" className="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" className="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

       
        <tr className="request-table-row">
          <td >
            <div className="list-profile">
              <div><img src="images/pic.jpg" className="dp" alt="profile picture" /></div>
              <div className="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td className="leave-type">Unpaid-Sick Day</td>
          <td className="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div className="approve-section">
              <div>
                <a href="" className="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" className="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" className="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    </div>  





  </>


  )
}


export default Summary