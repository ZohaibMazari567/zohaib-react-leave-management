import React from 'react'
import './Summary.css'

const Summary = () => {
  return (
  <>

<div class="main-section-container">


    
   

      <div class="summary-section"> 
       
        <div class="left-side">
          <div class="inner-box" id="leave-summary">
            <div class="leave-summay-heading"><h1>Leaves Summary</h1></div>
            <div class="container">
              <div class="box">
                <div class="box-border">
                  <h5 class="head">Total Employees</h5>
                  <div class="summary-values">

                    <div><span class="num"> 1,409 </span></div>

                    <div class="box-icons-up">
                      <div>   <i class="fa-solid fa-arrow-trend-up"></i></div>
                      <div>23%</div>
                   
                    
                  </div>

                  </div>
                  
                 
                </div>

                <div>
                  <p class="p1">13 Applications need review</p>
                </div>
              </div>

              <div class="box">
                <div class="box-border">
                  <h5 class="head">Total Overtime</h5>

                  <div class="summary-values">

                    <div><span class="num"> 569 </span></div>

                    <div class="box-icons-up">
                      <div>   <i class="fa-solid fa-arrow-trend-up"></i></div>
                      <div>13%</div>
                   
                    
                  </div>

                  </div>
                </div>

                <div>
                  <p class="p1">103 overtime schedules need approval</p>
                </div>
              </div>

              <div class="box">
                <div class="box-border">
                  <h5 class="head">Total Leaves</h5>

                  <div class="summary-values">

                    <div><span class="num"> 103 </span></div>

                    <div class="box-icons-down">
                      <div>  <i class="fa-solid fa-arrow-trend-down"></i></div>
                      <div>3%</div>
                   
                    
                  </div>

                  </div>

                  
                </div>

                <div>
                  <p class="p1">98 paid leave plans need approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div> 
      <div class="next-days-section">
        <h1 class="heading">In next 7 days</h1>

        <hr class="next-days-hr" />
        <h2 class="sub-heading">Friday 02/11/2018</h2>

        <hr class="next-days-hr"  />

      
        <div class="box-days">
          <div class="pic-name">
            <div><img src="pic.jpg" alt="" class="img-users" /></div>
            <div class="align">
              <h3 class="name-users">Momcilo Milijasevic</h3>
              <h4 class="days">(All Day)</h4>
            </div>
          </div>

          <div >
            <h4 class="reason">Unpaid-sick day</h4>
          </div>
        </div>

       
        <div class="box-days">
          <div class="pic-name">
            <div><img src="test2.jpeg" alt="" class="img-users" /></div>
            <div class="align">
              <h3 class="name-users">Somebody Else</h3>
              <h4 class="days">(12:40pm-4pm)</h4>
            </div>
          </div>

          <div>
            <h4 class="reason">Paid-sick day</h4>
          </div>
        </div>

        <h3 class="sub-heading">Monday 05/11/2018</h3>
        <hr class="next-days-hr"  />
      
        <div class="box-days">
          <div class="pic-name">
            <div><img src="test3.jpeg" alt="" class="img-users" /></div>
            <div class="align">
              <h3 class="name-users">Anybody Acually</h3>
              <h4 class="days">(All Day)</h4>
            </div>
          </div>

          <div>
            <h4 class="reason">Jury Service</h4>
          </div>
        </div>
       
        <div class="box-days">
          <div class="pic-name">
            <div><img src="test4.png" alt="" class="img-users" /></div>
            <div class="align">
              <h3 class="name-users">Someone Here</h3>
              <h4 class="days">(All Day)</h4>
            </div>
          </div>

          <div>
            <h4 class="reason">Study leave / Training</h4>
          </div>
        </div>
      </div>
      

    </div>


<div class="request-for-leave"> <h2 >Request for leave</h2> </div>
    <div class="table-section">
      <div class="list-heading">
      
    </div>
    <div class="data-list">
      <table class="table" border="1" frame="void" rules="rows">
     
        <tr>
          <th class="emp-width">Employee Name</th>
          <th class="leave-type-clm">Leaves Type</th>
          <th class="from-to-clm">Form-To</th>
        </tr>

       
        <tr class="request-table-row">
          <td class="hover">
            <div class="list-profile">
              <div><img src="pic.jpg" class="dp" alt="profile picture" /></div>
              <div class="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td class="leave-type">Unpaid-Sick Day</td>
          <td class="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div class="approve-section">
              <div>
                <a href="" class="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" class="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" class="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

      

        <tr class="request-table-row">
          <td >
            <div class="list-profile">
              <div><img src="pic.jpg" class="dp" alt="profile picture" /></div>
              <div class="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td class="leave-type">Unpaid-Sick Day</td>
          <td class="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div class="approve-section">
              <div>
                <a href="" class="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" class="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" class="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

      
        <tr class="request-table-row">
          <td >
            <div class="list-profile">
              <div><img src="pic.jpg" class="dp" alt="profile picture" /></div>
              <div class="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td class="leave-type">Unpaid-Sick Day</td>
          <td class="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div class="approve-section">
              <div>
                <a href="" class="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" class="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" class="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

      
        <tr class="request-table-row">
          <td >
            <div class="list-profile">
              <div><img src="pic.jpg" class="dp" alt="profile picture" /></div>
              <div class="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td class="leave-type">Unpaid-Sick Day</td>
          <td class="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div class="approve-section">
              <div>
                <a href="" class="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" class="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" class="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

        <tr class="request-table-row">
          <td >
            <div class="list-profile">
              <div><img src="pic.jpg" class="dp" alt="profile picture" /></div>
              <div class="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td class="leave-type">Unpaid-Sick Day</td>
          <td class="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div class="approve-section">
              <div>
                <a href="" class="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" class="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" class="more-btn"> More... </a>
              </div>
            </div>
          </td>
        </tr>

       
        <tr class="request-table-row">
          <td >
            <div class="list-profile">
              <div><img src="pic.jpg" class="dp" alt="profile picture" /></div>
              <div class="name">Momcilo Milijesevic</div>
            </div>
          </td>
          <td class="leave-type">Unpaid-Sick Day</td>
          <td class="form-to">Friday 02. Nov - Thursday 08. Nov</td>
          <td>
            <div class="approve-section">
              <div>
                <a href="" class="disaprove-btn">Dissaprove</a>
              </div>
              <div>
                <a href="" class="approve-btn">Approve</a>
              </div>
              <div>
                <a href="" class="more-btn"> More... </a>
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