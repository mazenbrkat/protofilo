import { Container, Row, Col } from "react-bootstrap";
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
    <section id="skills" className="skills py-5">
      <Container>
        <h2 className="skills-title">Skills</h2>

        <Row className="gy-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <div className="skill-card">
                <h5>{skill.name}</h5>
                <span className="skill-level">{skill.level}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
