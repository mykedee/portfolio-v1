import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projectsx = () => {


  const data = [
    {
      id: 1,
      title: "PowerAdmin",
      description1:
        "This is a full stack admin dashboard built with MERN stack technology. It can be used as a boilerplate for web applications that require a client and admin dashboard.",
      description2:
        "The features included in this app are secure authentication and authorization system, admin and client CRUD functions, light and dark mode, pagination, industry-grade component splitting, and many more.",
      githubLink: "https://github.com/mykedee/power-admin",
      externalLink: "https://powerapp-ikut.onrender.com/",
    },
    {
      id: 2,
      title: "PHONKY",
      description1:
        "This is a mini-ecommerce project that demonstrates my fluency in MERN stack technology and my competency in implementing payment integration (PayStack) and handling webhooks.",
      description2:
        " This app could be used as a boilerplate for a more complex ecommerce website as it includes features such as custom error handling, login, product search, error pages, cart, checkout, featured products, an admin dashboard, and admin product CRUD functionality",
      githubLink: "",
      externalLink: "",
    },
    {
      id: 3,
      title: "BSOMAgro",
      description1:
        "This full-stack ecommerce application demonstrates my competency in building an advanced, industry-grade ecommerce web application using the MERN stack technology.",
      description2:
        "The app includes all the essential functionalities expected of a production-ready ecommerce website, such as a secure authentication and authorization system, payment integration, custom error handling, client and admin dashboards with CRUD functions, pagination, search capabilities, and an email system.",
      githubLink: "",
      externalLink: "http://bsomintegrated.com.ng",
    },
    {
      id: 4,
      title: "MoneyPal",
      description1:
        "This is a mini-fintech web application built around the PayStack API that demonstrates my fluency in MERN stack technology and my competency in implementing payment integration (PayStack) and handling webhooks.",
      description2:
        "This app allows users to check the details of a Nigerian bank account number, verify BVN details, and send me money.",
      githubLink: "",
      externalLink: "",
    },
  ];


  return (
    <section className="w-full md:w-11/12 my-6 mx-auto text-text-color dark:text-wheat ">
      {data.map((project) => (
        <div
          key={project.id}
          className="bg-slate-50 text-left rounded p-3 my-5 dark:bg-[#5d5d5da3] hover:transform duration-700 ease-in-out hover:scale-x-[1.01]"
        >
          <div className="my-3">
            <div className="md:w-2/12 w-full">
              <a href={project.externalLink}>
                <h1 className="text-xl font-bold my-4 hover:underline">
                  {project.title}
                </h1>
              </a>
            </div>

            <p>
              {project.description1}</p>
                <p className="my-3">
                  {project.description2}
                </p>
          </div>

          <div className="">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FaGithub size={20} className="inline mr-3" />
              </a>
            )}

            <a href={project.externalLink} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt size={20} className="inline" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projectsx;
