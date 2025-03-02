import type React from "react"
import { FaUser, FaUserEdit, FaBriefcase, FaGraduationCap, FaUserMinus } from "react-icons/fa"
import "./Dashboard.scss"

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>

      <div className="dashboard__welcome">
        <FaUser className="dashboard__welcome-icon" />
        <span>Welcome Dilmutod</span>
      </div>

      <div className="dashboard__actions">
        <button className="dashboard__button">
          <FaUserEdit />
          <a href="/edit-profile">Edit Profile</a>
        </button>
        <button className="dashboard__button">
          <FaBriefcase />
          <a href="/add-experience">Add Experience</a>
        </button>
        <button className="dashboard__button">
          <FaGraduationCap />
          <a href="/add-education">Add Education</a>
        </button>
      </div>

      <section className="dashboard__section">
        <h2 className="dashboard__subtitle">Experience Credentials</h2>
        <table className="dashboard__table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>{/* Table content will be populated dynamically */}</tbody>
        </table>
      </section>

      <section className="dashboard__section">
        <h2 className="dashboard__subtitle">Education Credentials</h2>
        <table className="dashboard__table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
            </tr>
          </thead>
          <tbody>{/* Table content will be populated dynamically */}</tbody>
        </table>
      </section>

      <button className="dashboard__delete">
        <FaUserMinus />
        Delete My Account
      </button>
    </div>
  )
}

export default Dashboard

