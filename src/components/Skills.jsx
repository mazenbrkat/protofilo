import "./skills.css";

const skills = [
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Bootstrap 5", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Responsive Design", level: "Advanced" },
  { name: "UI / UX Design", level: "Good Knowledge" },
  { name: "Git & GitHub", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h4>{skill.name}</h4>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
