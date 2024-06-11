import React from "react";
import Hero from "../../components/Hero";
import classes from "./index.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import useCursorStore from "../../store/cursorStore";

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

const brandStrategy = [
  {
    label: "Brand Strategy",
    color: "red",
  },
  {
    label: "Brand Design",
    color: "red",
  },
  {
    label: "Visual Identity",
    color: "red",
  },
  {
    label: "Web Design​",
    color: "red",
  },
  {
    label: "Web Development",
    color: "red",
  },
  {
    label: "Collateral",
    color: "red",
  },
  {
    label: "Branded Spaces",
    color: "red",
  },
  {
    label: "Brand Mentoring",
    color: "red",
  },
];

const coreValues = [
  {
    label: "We value team spirit and close cooperation.",
    description:
      "Personal support and close cooperation with our customers is particularly important to us. We see ourselves as a team member of your company and not as an external service provider, because we believe that the best ideas can only emerge through cooperation on an equal footing. #bettertogether",
  },
  {
    label: "We think strategically and holistically.",
    description: `A brand is more than just a well-designed logo and the choice of colors and fonts. We always develop brands based on an individual brand strategy. With us, you get a design that doesn't just look "pretty" and then gets lost in the crowd of competitors, but strategically positions your company on the market and thus attracts the right customers. d`,
  },
  {
    label: "We are committed to equal rights and women*.",
    description:
      "Even today, the business world is still dominated by men. Our mission is to make women*-led companies more visible through branding and design and thus reduce gender inequality. Together we can create a business world in which people have equal rights regardless of gender and ethnic origin. Because: We firmly believe that our (business) world will be better through female ideas, creativity and empathy.",
  },
];

export default function Home() {
  const cursorState = useCursorStore();
  const [selectedCoreValuesIndexes, setSelectedCoreValuesIndexes] =
    React.useState<Array<number>>([]);
  const projectsContainerRef = React.useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  // const { scrollYProgress } = useScroll({
  //   target: projectsContainerRef,
  //   offset: ["start end", "end start"], // [start, end] or [end, start] start of the container at the end of the window and bottom of the container at the top of the window
  // });

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
        <div className={classes["images-container"]}>
          {favoriteProjects.map((image, index) => (
            <img
              src={image}
              alt={`image-${index + 1}`}
              key={`image-${index + 1}`}
              className={classes[`image-${index + 1}`]}
            />
          ))}
        </div>
      </div>
      <div className={classes["outer-wrapper"]}>
        <div className={classes["wrapper"]}>
          <div className={classes["brand-strategy-description"]}>
            <p className={classes["section-title"]}>
              Studio Ardē is an award-winning design studio from Vienna with a
              focus on <span>strategy and branding</span>. We make brands
              tangible and experienceable.
            </p>
            <div className={classes["row"]}>
              <p className={classes["section-description"]}>
                We develop and transform brands and make them tangible: digital,
                analogue, in space and on the internet, two and three
                dimensions. Only when the personality and uniqueness of a
                company is
              </p>
              <p className={classes["section-description"]}>
                tangible for its customers can an emotional bond and trust be
                built. Only through emotional bonding do people become fans of a
                brand. And fans become customers.
              </p>
            </div>
          </div>
          <div className={classes["list"]}>
            {brandStrategy.map(({ label }) => {
              return (
                <div key={label} className={classes["item"]}>
                  <p>{label}</p>
                  <div className={classes["image"]} />
                </div>
              );
            })}
          </div>
          <div className={classes["core-values-container"]}>
            <p className={classes["section-title"]}>
              What is important to us is important to you? Then we should{" "}
              <span>definitely</span> work together.
            </p>
            <div className={classes["core-values"]}>
              {coreValues.map(({ description, label }, index) => {
                const isSelected = selectedCoreValuesIndexes.includes(index);

                return (
                  <div className={classes["core-value"]} key={label}>
                    <button
                      onClick={() => {
                        if (isSelected) {
                          setSelectedCoreValuesIndexes((prevValues) =>
                            prevValues.filter((_index) => _index !== index),
                          );
                        } else {
                          setSelectedCoreValuesIndexes((prevValues) => [
                            ...prevValues,
                            index,
                          ]);
                        }
                      }}
                      className={classes["menu-button"]}
                      onMouseEnter={() => cursorState.setCursorType("button")}
                      onMouseLeave={() => cursorState.setCursorType("default")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 40 40"
                        aria-hidden="true"
                        style={{
                          transform: isSelected
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        <line
                          x1="0"
                          y1="20"
                          x2="40"
                          y2="20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></line>
                        <line
                          x1="20"
                          y1="0"
                          x2="20"
                          y2="40"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></line>
                      </svg>
                    </button>
                    <div className={classes["col"]}>
                      <p className={classes["label"]}>{label}</p>
                      <div
                        className={classes["grid-container"]}
                        style={{
                          gridTemplateRows: isSelected ? "1fr" : "0fr",
                        }}
                      >
                        <div className={classes["inner"]}>
                          <p className={classes["section-description"]}>
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
