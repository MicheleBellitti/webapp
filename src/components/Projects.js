import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projBG from "../assets/img/projects_bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AusCareTab from './AuscareTab';
import NewsTab from "./Newstab";


export const Projects = () => {

  const projects = [
    {
      title: "AusCare",
      description: "A Raspberry PI based AR device to aid autistic children in therapy and enable their medical caretaker with a digital twin",
      imgUrl: projImg1,
    },
    {
      title: "Asteroids",
      description: "A Java implementation from scratch of the well-known game from Atari",
      imgUrl: projImg2,
    },
    {
      title: "DenseRetail",
      description: "A visual and cognitive pipeline for detecting objects, recognizing brands, and generating natural language descriptions of grocery stores scenes",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here's an overview of some projects I developed.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Auscare PoC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">How's it going?</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <AusCareTab />
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <NewsTab />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
