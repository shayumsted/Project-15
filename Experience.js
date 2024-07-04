// src/components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {title: 'Cashier',
      company: 'Winn Dixie',
      duration: 'August 2020 - May 2021',
    },
    {title: 'Fulfillment Expert',
        company: 'Target',
        duration: 'October 2021 - November 2022',
      },
    {title: 'Caption Creator',
        company: 'TransPerfect',
        duration: 'November 2023 - March 2024',
      },
      {title: 'AI Writing Evaluator',
        company: 'Target',
        duration: 'May 2024 - Present',
      },
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.duration}</p>
        </div>
      ))}
    </div>);
};

export default Experience;
