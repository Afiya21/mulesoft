import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blu from "../../Assets/blu.gif";
import uhg from "../../Assets/uhg.gif";
import usBank from "../../Assets/usbank.gif"
import adt from "../../Assets/adt.gif"
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
              title="MuleSoft Developer at US BANK"
              description="Configure Mule service flows with various exception handling strategies such as Global Exception, Custom Exception and Choice Exception Strategies that notifies the user with custom and simple error descriptions.
              "
        
              
          
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blu}
              isBlog={false}
              title="MuleSoft Engineer at Blue Cross Blue Shield, Detroit MI"
              description="eveloped the flows/orchestrations for integrating the components written on top of different internal platforms using Mule ESB."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uhg}
              isBlog={false}
              title="Middleware Developer UnitedHealth Group. Tamp, FL "
              description="Configure the OAuth provider module to connect with custom-built Java Class and OAuth API to implement Oauth2, MuleSoft JDBC object store, and clustering in the server."
                        
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={adt}
              isBlog={false}
              title="MQ Engineer at ADT  Security Service, Fort Lauderdale, FL "
              description="Worked closely with the application teams in designing the new environments and deploying them in DEV, QA, and PROD."
                        
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
