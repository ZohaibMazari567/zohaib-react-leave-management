import React from 'react'



const AllLeaves = () => {
  return (
   <>


<div className="all-section ">
          <div className="leave-post-month">December 2020</div>
          {/* <!-- inner box 1 --> */}
          <div className="leave-box">
            <div>
              <span className="leave-days">Half Day Application</span>
              <h4 className="leave-date">Wed, 16 Dec</h4>

              <span className="rsn-casual"> Casual</span>
            </div>

            <div>
              <div>
                <span className="leave-waiting" href="">
                  Awaiting
                </span>
              </div>
              <div>
                <i className="material-icons iconbox">chevron_right</i>
              </div>
            </div>
          </div>

          <div className="leave-post-month">November 2020</div>

          {/* <!-- inner box 2 --> */}
          <div className="leave-box">
            <div>
              <span className="leave-days">Full Day Application</span>
              <h4 className="leave-date">Mon, 28 Nov</h4>
              <span className="rsn-sick"> Sick</span>
            </div>

            <div>
              <div>
                <span className="leave-approved" href="">
                  Approved
                </span>
              </div>
              <div>
                <i className="material-icons iconbox">chevron_right</i>
              </div>
            </div>
          </div>

          {/* <!-- inner box 3 --> */}

          <div className="leave-box">
            <div>
              <span className="leave-days">3 Days Application</span>
              <h4 className="leave-date">Tue, 22 Dec - Fri, 25 Nov</h4>

              <span className="rsn-casual"> Casual</span>
            </div>

            <div>
              <div>
                <span className="leave-declined" href="">
                  Declined
                </span>
              </div>
              <div>
                <i className="material-icons iconbox">chevron_right</i>
              </div>
            </div>
          </div>

          {/* <!-- inner box 4 --> */}
          <div className="leave-box">
            <div>
              <span className="leave-days">Full Day Application</span>
              <h4 className="leave-date">Wed, 02 Nov</h4>
              <span className="rsn-sick"> Sick</span>
            </div>
            <div>
              <div>
                <span className="leave-approved" href="">
                  Approved
                </span>
              </div>
              <div>
                <i className="material-icons iconbox">chevron_right</i>
              </div>
            </div>
          </div>
        </div>


   </>
  )
}

export default AllLeaves