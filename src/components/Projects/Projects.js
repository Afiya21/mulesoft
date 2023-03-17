import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import edirr from "../../Assets/edirr.gif";
import online_therapy from "../../Assets/online_therapy.gif";
import usBank from "../../Assets/usbank.gif"
import sign from "../../Assets/sign.gif"
function Projects() {
  
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usBank}
              isBlog={false}
              title="MuleSoft Developer"
              description="Configure Mule service flows with various exception handling strategies such as Global Exception, Custom Exception and Choice Exception Strategies that notifies the user with custom and simple error descriptions.
              "
        
              
          
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edirr}
              isBlog={false}
              title="e-dirr"
              description="this is integrating modern insurance with tradtional socal impact that act like insurance called edirr in ethiopia using mern for web app and flutter for mobile app"
              
              ghLink="https://github.com/Afiya21/eDirr "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online_therapy}
              isBlog={false}
              title="online mental therapy"
              description="this project want to solve peoples's insecurity to go to physcologiest.this web app developed by php "
                ghLink="https://github.com/Afiya21/onlineTherapy"
                        
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={sign}
              isBlog={false}
              title="sign languge detection"
              description="this project want to communicate people that use sign langueg as mother languge and oher people who can't sign languge"
                      ghLink="https://github.com/Afiya21/handsign-detection"
                        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
