/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mydesk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "POS System Using Bridge Software Design Pattern",
    description:
      "This project implements a point-of-sale system using Bridge design pattern. The project focuses on how to build a system using object oritented methodology",
    url: "https://github.com/AhmedBinhamim/POS-System-Using-Bridge-Design-Pattern",
  },
  {
    title: "Mars Rover Game",
    description:
      "The game Mars Rover typically involves the player controlling a rover that has just landed in mars. The mission of the rover is to collect all the gold on mars as was specified by the NASA headquarters on Earth, for research purposes.",
    url: "https://github.com/AhmedBinhamim/Mars-Rover-Game-C-",
  },
  {
    title: "Air Express Flight Booking System",
    description:
      "Air Express is a flight booking system that provides customers with a convenient and user-friendly system to search for and book flights. The system is built using a combination of front-end technologies, including HTML, CSS, and JavaScript, and a back-end technology of PHP.",
    url: "https://github.com/AhmedBinhamim/Air-Express-Flight-Booking-System",
  },
  {
    title: "Fitness Management System",
    description:
      "In the sports industry, fitness management systems have become increasingly popular among sports centers, gyms, and health clubs. These systems are designed to help sports center members achieve their fitness goals by providing personalized workout plans, tracking progress, and providing feedback.",
    url: "https://github.com/AhmedBinhamim/Fitness-Management-System",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
