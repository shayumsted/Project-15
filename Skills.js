// U78784426
// src/components/SkillItem.js
import React from 'react';
import './Skills.css';

const Skill = ({ name, level }) => {
  return (
    <div className="skills">
      <h3>{name}</h3>
      <p>Expertise: {level}</p>
    </div> );
};

export default Skill;

// src/components/Skills.js
import React from 'react';
import Skills from './Skills';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Visual Studio Code', level: 'Advanced'}, ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Skills key={index} name={skill.name} level={skill.level} />
      ))}
    </div>);
};

export default Skills;