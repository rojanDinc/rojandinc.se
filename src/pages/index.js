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
  "Terraform"
];

const methodologies = [
  "Domain driven design",
  "Test driven design",
  "MVVM",
  "Railway oriented programming",
  "Functional programming",
  "Object oriented programming",
  "Microservices"
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
            <p>My interests are system design, software design, functional programming, distributed systems, hardware programming, infrastructure and producing music.</p>
            <p>
              I also write about tech stuff, visit my{" "}
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
            <ul>
              <li>Saved billing costs by 20%, increased reliability, security, maintainability, automation and scalability by migrating old infrastructure to Google Cloud Platform.</li>
              <li>Increased total reviews submitted to Google reviews and Trustpilot with 40% and 70%, also increased average review rating by 4.52% by designing and implementing a centralized service for customer reviews engagement.</li>
              <li>Implemented features in backoffice web application to reduce time of manual labor for users and support staff.</li>
              <li>Picked out of 6 engineers company wide to be a part of the GCP ambassador program to take more infrastructure responsibility and share knowledge to engineering teams.</li>
              <li>Joined the SRE team after the GCP ambassador program.</li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            title="Consultant"
            imageAlt={"valtech logo"}
            image={ValtechLogo}
            employer="Valtech"
            startDate={new Date("2018-09-01")}
            endDate={new Date("2021-03-01")}
          >
            <ul>
              <li>Worked with a team of three engineers on development of a ticketing iOS application used as a work tool by train conductors to improve every day manual tasks.</li>
              <li>Modernized a customers overall architecture using technologies such as kubernetes, F#, Azure, Docker transforming old solution to a more modern microservice based solution.</li>
              <li>Increased a chairity web app's reliability to handle peak time traffic (100-500 requests/s) by moving the app to a modern cloud provider to scale easier.</li>
              <li>Trained a team of four trainee engineers on software architecture, clean code and nodejs/typescript by having weekly assistance and workshops.</li>
              <li>Helped a startup company with building their SaaS platform from scratch and their campaign app which led to an intitial 289 users registered the first month after the campaign release.</li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            title="Co-founder & Software Developer"
            imageAlt={"snaptive logo"}
            image={SnaptiveLogo}
            employer="Wellia AB"
            startDate={new Date("2017-06-01")}
            endDate={new Date("2021-06-01")}
          >
            <ul>
              <li>Grew the initial registered members of the Snaptive app by 500 members by quickly designing and implementing a proof of concept and later on a beta version using Ionic, Firebase and TypeScript.</li>
              <li>Reduced initial infrastructure costs to only ~8$/month by using Firebase as a backend.</li>
            </ul>
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
          <Card className="p-4">
            <div className="d-inline-flex mb-3"><a class="d-flex font-bold text-lg" href="https://github.com/rojanDinc/rop-monads" target="_blank"><b><u>rop-monads</u></b></a><br/></div>
            <ul>
              <li>Authored an open source library in javascript/typescript that provides common monad types Result and Optional used in functional programming.</li>
            </ul>
          </Card>
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
