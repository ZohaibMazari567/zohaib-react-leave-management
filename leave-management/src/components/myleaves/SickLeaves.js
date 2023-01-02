import React from 'react'

const SickLeaves = () => {
  return (
   <>
    <div className="sick-section ">
          <div className="leave-post-month">November 2020</div>

          {/* <!-- inner box 1 --> */}
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

          {/* <!-- inner box 2 --> */}
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

export default SickLeaves