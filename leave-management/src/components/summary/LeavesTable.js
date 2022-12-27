import React from 'react'
import UserData, { LeaveBoxData } from "../userdata/TableData";

const LeavesTable = () => {
  return (
    <>

<div className="request-for-leave">
        <h2>Request for leave</h2>
      </div>
      <div className="table-section">
        <div className="data-list">
          <table className="table" border="1" frame="void" rules="rows">
            <tr>
              <th className="emp-width">Employee Name</th>
              <th className="leave-type-clm">Leaves Type</th>
              <th className="from-to-clm">Form-To</th>
            </tr>

            {UserData.map((data) => {
              return (
                <tr className="request-table-row">
                  <td>
                    <div className="list-profile">
                      <div>
                        <img
                          src={data.profile}
                          class="dp"
                          alt="profile picture"
                        />
                      </div>
                      <div className="name">{data.name}</div>
                    </div>
                  </td>
                  <td className="leave-type">{data.leaveType}</td>
                  <td className="form-to">{data.formTo}</td>
                  <td>
                    <div className="approve-section">
                      <div>
                        <a href="#" className="disaprove-btn">
                          Dissaprove
                        </a>
                      </div>
                      <div>
                        <a href="#" className="approve-btn">
                          Approve
                        </a>
                      </div>
                      <div>
                        <a href="#" className="more-btn">
                          {" "}
                          More...{" "}
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default LeavesTable