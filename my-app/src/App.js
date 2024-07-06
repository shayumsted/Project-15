// U78784426
// src/App.js
function App() {
  const CodeWork= [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Visual Studio Code', level: 'Advanced'}, ];

  const experiences = [
    {title: 'Cashier', company: 'Winn Dixie', duration: 'August 2020 - May 2021'},
    {title: 'Fulfillment Expert', company: 'Target', duration: 'October 2021 - November 2022'},
    {title: 'Caption Creator', company: 'TransPerfect', duration: 'November 2023 - March 2024'},
    {title: 'AI Writing Evaluator', company: 'Target', duration: 'May 2024 - Present'}];

    const educationList = [
      {institution: 'Wharton High School ', degree: 'High School Diploma', years: '2018 - 2021'},
      {institution: 'University of South Florida', degree: 'Bachelor of Science Degree', years: '2022 - Present'},];  

  return (
    <div className="App">
      <h1>Shamira Umstead </h1>
      <PersonalInfo />
      <p> I am a Junior majoring in Business Analystics and Information Systems. This class has altered my computer skills, efficiency standards, and Visual Studio Code experience. I also have skills in Microsoft Office, Tableau, and Retail. </p>
      <p> Email- sumsteadl@usf.edu </p>
      <p>LinkedIn- https://linkedin.com/in/shamiraumstead </p>

      <h2>Skills</h2>
      <oL>
      {CodeWork.map((skill, index) => (
        <Skills key={index} name={skill.name} level={skill.level} />))}  </oL>

      <h2>Experience</h2>
      <oL>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.duration}</p> </div>))} </oL>

      <h2>Education</h2>
      <oL>
      {educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p>{edu.degree}</p>
          <p>{edu.years}</p>
        </div> ))} </oL>
    </div> );}

export default App;