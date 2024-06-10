import React from "react";
import Hero from "../../components/Hero";
import classes from "./index.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const heroImages = [
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-13.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-12.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-20.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-16.png?w=350&org_if_sml=1&ar=1",
];

const favoriteProjects = [
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-4.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-5.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-9.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-3.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-8.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-11.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-10.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-6.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-1.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-2.png?w=350&org_if_sml=1&ar=1",
  "https://ctkgvpacra.cloudimg.io/_base_/images/projects/Lieblings-Projekte-Studio-Arde-7.png?w=350&org_if_sml=1&ar=1",
];

export default function Home() {
  const projectsContainerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: projectsContainerRef,
    offset: ["start end", "end start"], // [start, end] or [end, start] start of the container at the end of the window and bottom of the container at the top of the window
  });

  React.useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);

  const sectionOneTitleOneOpacity = useTransform(
    scrollY,
    [window.innerHeight * 0.5, window.innerHeight],
    [0, 1],
  );

  const sectionOneTitleTwoOpacity = useTransform(
    scrollY,
    [window.innerHeight, window.innerHeight * 1.5],
    [0, 1],
  );

  // const favoriteProjectsTitleTranslateY = useTransform(
  //   scrollY,
  //   [
  //     window.innerHeight * 2.5,
  //     window.innerHeight * 2.5 + window.innerHeight * 3,
  //   ],
  //   [0, window.innerHeight * 3],
  // );

  return (
    <>
      <Hero images={heroImages} />
      <div className={classes["section-one"]}>
        <motion.p
          className={classes["section-title"]}
          style={{
            opacity: sectionOneTitleOneOpacity,
          }}
        >
          Companies run by women* deserve to be <span>seen .</span>
        </motion.p>
        <p className={classes["section-description"]}>
          * and all companies with female people and FLINTA* in management
          positions.
        </p>
        <div className={classes["details"]}>
          <motion.p
            className={classes["section-title"]}
            style={{
              opacity: sectionOneTitleTwoOpacity,
            }}
          >
            The foundation for this is a <span>strong brand</span> that
            inspires.
          </motion.p>

          <div className={classes["row"]}>
            <p className={classes["section-description"]}>
              In 2023, the business world is still dominated by men. So it's
              high time for a diverse business world in which people are equally
              recognized regardless of gender and ethnic origin. That's why
              we're
            </p>
            <p className={classes["section-description"]}>
              committed to increasing the visibility of companies with women in
              leadership positions by working together to develop a strong brand
              that turns people into raving fans.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["projects"]} ref={projectsContainerRef}>
        <p
          className={`${classes["section-title"]} ${classes["our-favorite-projects"]}`}
        >
          Our favorite
          <br />
          projects
        </p>
        {favoriteProjects.map((image, index) => (
          <img
            src={image}
            alt={`image-${index + 1}`}
            key={`image-${index + 1}`}
            className={classes[`image-${index + 1}`]}
          />
        ))}
      </div>

      {Array(100)
        .fill(0)
        .map((_, i) => (
          <h1 key={i}>ok</h1>
        ))}
    </>
  );
}
