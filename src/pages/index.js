import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import {
  Card,
  ExperienceCard,
  ProjectCard,
  Tag,
  Title,
  Layout,
} from "../components";
import LendoLogo from "../images/lendo.png";
import ValtechLogo from "../images/valtech.png";
import SnaptiveLogo from "../images/snaptive.png";
import ArlandaExpressLogo from "../images/arlanda_express.png";
import { Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";

const lengthSorter = (a, b) => a.length - b.length;

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
  "GatsbyJS",
  "TravisCI",
  "CircleCI",
];

const methodologies = [
  "Domain driven design",
  "Test driven design",
  "MVVM",
  "Railway oriented programming",
  "Functional programming",
  "Object oriented programming",
];

export default function IndexPage({ data }) {
  const projects = data.allMarkdownRemark.edges;

  const renderProjectCard = (projectData) => (
    <ProjectCard
      key={projectData.node.key}
      title={projectData.node.frontmatter.title}
      link={projectData.node.frontmatter.slug}
      workRole={projectData.node.frontmatter.workRole}
      fromDate={projectData.node.frontmatter.from}
      toDate={projectData.node.frontmatter.until}
      image={projectData.node.frontmatter.logo}
      imageAlt={projectData.node.frontmatter.logoAlt}
    >
      {projectData.node.excerpt}
    </ProjectCard>
  )

  return (
    <Layout>
      <Row>
        <Col>
          <Card className="p-4 mb-5">
            <h1 className="font-bold text-3xl">
              Hi I'm Rojan Dinc, a software engineer
            </h1>
            <p>
              This is my personal website where you can find information about
              my prior professional experience, kind of like a CV.
            </p>
            <p>
              I also write about tech stuff I find interesting, visit my{" "}
              <Link to="/blog">blog page.</Link>
            </p>
          </Card>
        </Col>
    {/*
        <Col className="d-none d-sm-none d-md-block">
          <StaticImage
            className="rounded-xl"
            src="../images/me-min.png"
            placeholder="blurred"
            alt="picture of Rojan Dinc"
            style={{ borderRadius: "0.75rem" }}
          />
        </Col>
      */}
      </Row>

      <Row className="mb-5">
        <Col xs={12}>
          <Title size="4xl">Experience</Title>
          <ExperienceCard
            title="System Developer"
            imageAlt={"colive logo"}
            image={LendoLogo}
            employer="Lendo"
            startDate={new Date("2021-03-15")}
            isCurrentEmployment
          >
          Building and scaling our different services in the Lendo SE market implementing new features for the Lendo SE market. Our solution is designed in a microservices architecture to handle the throughput of incoming loan applications and also for easier maintainability for the different services that makes up the system. Also worked with monitoring, assisting administrative teams and debugging infrastructure.
          </ExperienceCard>
          <ExperienceCard
            title="Consultant"
            imageAlt={"valtech logo"}
            image={ValtechLogo}
            employer="Valtech"
            startDate={new Date("2018-09-01")}
            endDate={new Date("2021-03-01")}
          >
          I worked with different projects as consultant. I’ve been taking different roles in multiple projects such as tech lead, coach/teacher for entry level developers and as a fullstack developer.
          </ExperienceCard>
          <ExperienceCard
            title="Co-founder & Software Developer"
            imageAlt={"snaptive logo"}
            image={SnaptiveLogo}
            employer="Wellia AB"
            startDate={new Date("2017-06-01")}
            endDate={new Date("2021-06-01")}
          >
          Worked as a developer and implemented our core mobile app and admin web application. Also worked with implementation of our SaaS and customize solutions after customer needs.
          </ExperienceCard>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-5">
          <Title size="4xl">Tech skills</Title>
          <Card className="p-4 d-inline-block">
            {programmingLanguages
              .concat(technologies)
              .sort(lengthSorter)
              .map((lang) => (
                <Tag text={lang} />
              ))}
          </Card>
        </Col>
      </Row>

      <Title size="4xl">Projects</Title>
      <Row>
        <Col>
          <Masonry
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            breakpointCols={{
              default: 2,
              700: 1,
            }}
          >
            {projects.map(renderProjectCard)}
          </Masonry>
        </Col>
      </Row>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {frontmatter: {key: {eq: "project"}}}
      sort: {fields: frontmatter___from, order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            from(formatString: "YYYY-MM-DD")
            until(formatString: "YYYY-MM-DD")
            logo {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            logoAlt
            workRole
            current
          }
          excerpt(format: PLAIN, pruneLength: 200)
        }
      }
    }
  }
`;
