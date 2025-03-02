import type React from "react"
import { useState } from "react"
import "./Experience.scss"

interface ExperienceFormData {
  jobTitle: string
  company: string
  location: string
  fromDate: string
  toDate: string
  current: boolean
  description: string
}

const Experience: React.FC = () => {
  const [formData, setFormData] = useState<ExperienceFormData>({
    jobTitle: "",
    company: "",
    location: "",
    fromDate: "",
    toDate: "",
    current: false,
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
      toDate: checked ? "" : prev.toDate,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission here
  }

  return (
    <div className="add-experience">
      <div className="container">
        <h1>Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming positions that you have had in the past
        </p>
        <small className="required-note">* = required field</small>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>From Date</label>
            <input type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input type="checkbox" name="current" checked={formData.current} onChange={handleCheckbox} /> Current Job
            </label>
          </div>

          <div className="form-group">
            <label>To Date</label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              disabled={formData.current}
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button type="button" className="btn-back" onClick={() => window.history.back()}>
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Experience

