// U78784426
// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {institution: 'Wharton High School ',
      degree: 'High School Diploma',
      years: '2018 - 2021',
    },
    {institution: 'University of South Florida',
      degree: 'Bachelor of Science Degree',
      years: '2022 - Present',
    },
  ];

  return (
    <div className="education">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p>{edu.degree}</p>
          <p>{edu.years}</p>
        </div>
      ))}
    </div>);
};

export default Education;