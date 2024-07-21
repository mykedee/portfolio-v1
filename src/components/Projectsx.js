import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projectsx = () => {
 


  const data = [
    {
      id: 1,
      title: "PHONKY",
      description1:
        "This is a mini-ecommerce project that demonstrates my fluency in MERN stack technology and my competency in implementing payment integration (PayStack) and handling webhooks.",
      description2:
        " This app could be used as a boilerplate for a more complex ecommerce website as it includes features such as custom error handling, login, product search, error pages, cart, checkout, featured products, an admin dashboard, and admin product CRUD functionality",
      githubLink: "",
      externalLink: "",
    },
    {
      id: 2,
      title: "BSOMAgro",
      description1:
        "This full-stack ecommerce application demonstrates my competency in building an advanced, industry-grade ecommerce web application using the MERN stack technology.",
      description2:
        "The app includes all the essential functionalities expected of a production-ready ecommerce website, such as a secure authentication and authorization system, payment integration, custom error handling, client and admin dashboards with CRUD functions, pagination, search capabilities, and an email system.",
      githubLink: "",
      externalLink: "http://bsomintegrated.com.ng",
    },
    {
      id: 3,
      title: "MoneyPal",
      description1:
        "This is a mini-fintech web application built around the PayStack API that demonstrates my fluency in MERN stack technology and my competency in implementing payment integration (PayStack) and handling webhooks.",
      description2:
        "This app allows users to check the details of a Nigerian bank account number, verify BVN details, and send me money.",
      githubLink: "",
      externalLink: "",
    },
    {
      id: 4,
      title: "PowerAdmin",
      description1:
        "This is a full stack admin dashboard built with MERN stack technology. It can be used as a boilerplate for web applications that require a client and admin dashboard.",
      description2:
        "The features included in this app are secure authentication and authorization system, admin and client CRUD functions, light and dark mode, pagination, industry-grade component splitting, and many more.",
      githubLink: "https://github.com/mykedee/power-admin",
      externalLink: "https://powerapp-ikut.onrender.com/",
    },
  ];


   const [readMore, setReadMore] = useState(false);
   // const [readMore, setReadMore] = useState(false);

  const handleShow = (id) => {
  let tt= data.find((item) => item.id === id)
  console.log(tt)
    setReadMore(!readMore);
  };
  return (
    <section className="w-full md:w-11/12 my-6 mx-auto text-text-color dark:text-wheat ">
      {data.map((project) => (
        <div
          key={project.id}
          className="bg-slate-50 text-left rounded p-3 my-5 dark:bg-[#2e2e2ea3] hover:transform duration-700 ease-in-out hover:scale-x-[1.01]"
        >
          <div className="my-3">
            <div className="md:w-2/12 w-full">
              <Link to={project.externalLink}>
                <h1 className="text-xl font-bold my-4 hover:underline">
                  {project.title}
                </h1>
              </Link>
            </div>

            <p>
              {project.description1}{" "}
              <span>
                <button onClick={() => handleShow(project.id)}>
                  {readMore ? "" : "[read more...]"}
                </button>
                <p className="my-3">
                  {readMore ? project.description2 : ""}
                  <span onClick={() => handleShow(project.id)}>
                    {readMore ? "[...show less]" : ""}
                  </span>
                </p>
              </span>
            </p>
          </div>

          <div className="">
            {project.githubLink && (
              <FaGithub size={20} className="inline mr-3" />
            )}

            <a href={project.externalLink} target="_blank">
              <FaExternalLinkAlt size={20} className="inline" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projectsx;
