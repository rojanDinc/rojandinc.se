import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Navbar, Card, ExperienceCard, ProjectCard, Tag, Title, Footer } from "../components";
import LendoLogo from "../images/lendo.png";
import ValtechLogo from "../images/valtech.png";
import SnaptiveLogo from "../images/snaptive.png";
import ArlandaExpressLogo from "../images/arlanda_express.png";
import { Row, Col, Container } from "react-bootstrap";
import Masonry from "react-masonry-css";

const programmingLanguages = [
  "C#",
  "F#",
  "Go",
  "JavaScript",
  "TypeScript",
  "Swift",
  "Python",
  "Bash",
];
const technologies = [
  "React",
  "React Native",
  "SwiftUI",
  "Angular",
  "ExpressJS",
  ".NET",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "AWS",
  "GCP",
  "Heroku",
  "Docker",
  "Kubernetes",
  "RabbitMQ",
  "Git",
];
export default function IndexPage() {
  return (
    <div className="container sm:mx-auto space-y-10">
      <Navbar />
      <Container className="mb-5">
        <Row>
          <Col>
            <Card className="p-4">
              <h1 className="font-bold text-3xl">
                Hi I'm Rojan Dinc, a software engineer
              </h1>
              <div className="my-3" />
              <p>
                This is my personal website where you can find information about
                my prior professional experience.
              </p>
              <p>
                I also write about tech stuff I find interesting, visit my{" "}
                <Link to="/blog">blog page</Link> for more info.
              </p>
            </Card>
          </Col>
          <Col>
            <StaticImage
              className="rounded-xl"
              src="../images/me-min.png"
              placeholder="blurred"
              alt="picture of Rojan Dinc"
              style={{ borderRadius: "0.75rem" }}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <Title size="4xl">Experience</Title>
            <ExperienceCard
              title="System Developer"
              imageAlt={"colive logo"}
              image={LendoLogo}
              employer="Lendo"
              startDate={new Date("2021-03-15")}
              isCurrentEmployment
            >
              Lorem ipsum dolor sit.
            </ExperienceCard>
          </Col>
          <Col xs={12} sm={6}>
            <Title size="4xl">Tech skills</Title>
            <Card className="p-4">
              <Tag text="C#" />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Title size="4xl">Projects</Title>
        <Row>
          <Col>
            <Masonry
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
              breakpointCols={{
                default: 3,
                1100: 2,
                700: 1,
              }}
            >
              <ProjectCard
                title="Arlanda Express"
                workRole="Tech Lead for app team"
                fromDate={"Oct 2019"}
                toDate={"Mars 2021"}
                profileImage={ArlandaExpressLogo}
                imageAlt="lendo logo"
              >
                Building and scaling our different services in the Lendo SE
                market implementing new features for the Lendo SE market. Our
                solution is designed in a microservices architecture to handle
                the throughput of incoming loan ap- plications and also for
                easier maintainability for the different services that makes up
                the system. Also worked with monitoring, assisting administrat-
                ive teams and debugging infrastructure.
              </ProjectCard>
              <ProjectCard
                title="Arlanda Express"
                workRole="Backend developer"
                fromDate={"Oct 2019"}
                toDate={"Mars 2021"}
                profileImage={ArlandaExpressLogo}
                imageAlt="valtech logo"
              >
                I worked with different projects as consultant. I’ve been taking
                different roles in multiple projects such as tech lead,
                coach/teacher for entry level developers and as a fullstack
                developer.
              </ProjectCard>
              <ProjectCard
                title="Musikhjälpen"
                workRole="Cloud platform migration"
                fromDate={"Sept 2019"}
                toDate={"Oct 2019"}
                profileImage={LendoLogo}
                imageAlt="lendo logo"
              >
                Building and scaling our different services in the Lendo SE
                market implementing new features for the Lendo SE market. Our
                solution is designed in a microservices architecture to handle
                the throughput of incoming loan ap- plications and also for
                easier maintainability for the different services that makes up
                the system. Also worked with monitoring, assisting administrat-
                ive teams and debugging infrastructure.
              </ProjectCard>
              <ProjectCard
                title="Colive"
                workRole="Community platform"
                fromDate={"Sept 2018"}
                toDate={"Sept 2019"}
                profileImage={ValtechLogo}
                imageAlt="valtech logo"
              >
                I worked with different projects as consultant. I’ve been taking
                different roles in multiple projects such as tech lead,
                coach/teacher for entry level developers and as a fullstack
                developer.
              </ProjectCard>
            </Masonry>
          </Col>
        </Row>
        
        <Footer />
      </Container>
    </div>
  );
}
