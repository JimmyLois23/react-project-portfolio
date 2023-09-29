import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
// eslint-disable-next-line
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { skillsData } from "./utils";
// eslint-disable-next-line
import { Line } from "rc-progress";
import "./styles.scss";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <PageHeaderContent
        headerText="Experience"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="experience__content-wrapper">
        {skillsData.map((item, i) => {
          return (
            <div key={i} className="experience__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.5}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="experience__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div className="progressbar__wrapper">
                  {item.data.map((skillItem, j) => {
                    return (
                      <div
                        key={j}
                        className="progressbar__wrapper__inner-content"
                      >
                        <h2>{skillItem.skillName}</h2>

                        <h3>{skillItem.position}</h3>
                      </div>
                    );
                  })}
                </div>
              </Animate>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Experience };

// <AnimateKeyframes
//   play
//   duration={1}
//   keyframes={["opacity: 1", "opacity: 0"]}
//   iterationCount={1}
// >
// {
//   /* <Line
//                             percent={skillItem.percentage}
//                             strokeWidth="2"
//                             strokeColor="var(--green-theme-main-color)"
//                             trailWidth="2"
//                             strokeLinecap="square"
//                           /> */
// }
// </AnimateKeyframes>
