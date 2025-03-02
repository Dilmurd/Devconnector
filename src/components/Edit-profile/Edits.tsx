import type React from "react"
import "./Edits.scss"

interface HeroProps {
  title?: string
  subtitle?: string
}

const Edits: React.FC<HeroProps> = ({ title = "Edit Your Profile", subtitle = "Add some changes to your profile" }) => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="container">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">
            <i className="fas fa-user"></i> {subtitle}
          </p>
          <p className="hero-note">* = required field</p>

          <form className="hero-form">
            <div className="form-group">
              <select className="form-control" name="status" required>
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Other">Other</option>
              </select>
              <small className="form-text">Give us an idea of where you are at in your career</small>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Company" name="company" />
              <small className="form-text">Could be your own company or one you work for</small>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Website" name="website" />
              <small className="form-text">Could be your own or a company website</small>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Location" name="location" />
              <small className="form-text">City & state suggested (eg. Boston, MA)</small>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="* Skills" name="skills" required />
              <small className="form-text">Please use comma separated values (eg. HTML, CSS, JavaScript, PHP)</small>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder="Github Username" name="githubusername" />
              <small className="form-text">
                If you want your latest repos and a Github link, include your username
              </small>
            </div>

            <div className="form-group">
              <textarea className="form-control" placeholder="A short bio of yourself" name="bio"></textarea>
              <small className="form-text">Tell us a little about yourself</small>
            </div>

            <div className="social-networks">
              <button type="button" className="btn btn-light">
                Add Social Network Links
              </button>
              <span className="optional">Optional</span>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-light">
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edits

