import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name: - ",
    value: "Sk Rafikul Islam",
  },
  {
    label: "College: - ",
    value: "Calcutta Institute of Engineering and Management",
  },
  {
    label: "Address: - ",
    value: "Kolkata | West Bengal | India",
  },
  {
    label: "LinkedIn: - ",
    value: "https://www.linkedin.com/in/srafikulislam/",
  },
  {
    label: "Github: - ",
    value: "https://github.com/skrafikulislam",
  },
  {
    label: "Email: - ",
    value: "skrafikulislam22730@gmail.com",
  },
  {
    label: "Phone: - ",
    value: "+91 9064281142",
  },
];

const jobSummary =
  "I am an enthusiastic Full Stack Web Developer eager to embark on my professional journey. While my formal education provided a strong foundation in development principles, I've supplemented this knowledge through hands-on projects and self-led learning. I have a passion for building user-centric web solutions and am continuously seeking opportunities to hone my skills in both front-end and back-end technologies. While I may be early in my career, my drive to innovate, collaborate, and adapt is unwavering";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-850px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>

            <ul>
              {personalDetails.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(  --green-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(  --green-theme-main-color)" />
              </div>
              <div>
                <FaReact size={60} color="var(  --green-theme-main-color)" />
              </div>
              <div>
                <FaNodeJs size={60} color="var(  --green-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export { About };
