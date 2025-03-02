import React, { useState } from 'react';
import './Education.scss';

interface EducationFormData {
  school: string;
  degree: string;
  fieldOfStudy: string;
  fromDate: string;
  toDate: string;
  current: boolean;
  description: string;
}

const Education: React.FC = () => {
  const [formData, setFormData] = useState<EducationFormData>({
    school: '',
    degree: '',
    fieldOfStudy: '',
    fromDate: '',
    toDate: '',
    current: false,
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked,
      toDate: checked ? '' : prev.toDate
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="add-education">
      <div className="container">
        <h1>Add Your Education</h1>
        <p className="lead">
          <i className="fas fa-graduation-cap"></i> Add any school or bootcamp that you have attended
        </p>
        <small className="required-note">* = required field</small>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Field of Study"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>From Date</label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="current"
                checked={formData.current}
                onChange={handleCheckbox}
              /> Current School
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
              placeholder="Program Description"
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
  );
};

export default Education;
