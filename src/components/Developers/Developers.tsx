import React from 'react';
import './Developers.scss';

interface Skill {
  name: string;
  color?: string;
}

interface Developer {
  id: string;
  name: string;
  title: string;
  company?: string;
  location: string;
  skills: Skill[];
  avatar?: string;
}

const Developer: React.FC<Developer> = ({
  name,
  title,
  company,
  location,
  skills,
  avatar
}) => {
  return (
    <div className="developer-card">
      <div className="developer-info">
        <div className="avatar">
          <img 
            src={avatar || '/placeholder.svg'} 
            alt={`${name}'s profile`} 
          />
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p className="position">
            {title} {company && <span>at {company}</span>}
          </p>
          <p className="location">{location}</p>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                <i className="fas fa-check"></i> {skill.name}
              </span>
            ))}
          </div>
          <button className="view-profile">View Profile</button>
        </div>
      </div>
    </div>
  );
};

const DevelopersList: React.FC = () => {
  const developers: Developer[] = [
    {
      id: '1',
      name: 'no name',
      title: 'Developer',
      company: 'at mjot talim',
      location: 'Tashkent',
      skills: [
        { name: 'html,css' },
        { name: 'react' }
      ]
    },
    {
      id: '2',
      name: 'Sardorbek',
      title: 'Junior Developer',
      company: 'MDIST',
      location: 'Tashkent, Uzbekistan',
      skills: [
        { name: 'JavaScript and React' }
      ]
    },
    {
      id: '3',
      name: 'testuser',
      title: 'Senior Developer',
      company: 'apple',
      location: 'boston, usa',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'PHP' }
      ]
    }
  ];

  return (
    <div className="developers-page">
      <div className="container">
        <h1>Developers</h1>
        <p className="lead">
          <i className="fas fa-connectdevelop"></i> Browse and connect with developers
        </p>
        <div className="developers-grid">
          {developers.map(developer => (
            <Developer key={developer.id} {...developer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersList;
