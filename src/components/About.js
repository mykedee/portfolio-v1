import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = ({ showAbout, setShowAbout }) => {
	return (
		<div className="my-16 py-24 relative ">
			<div className=" dark:bg-[#3d3d3d] bg-white w-[98%] md:w-[60%] mx-auto min-h-full absolute top-0 z-10 left-0 right-0 rounded-lg">
				<div className="w-11/12 py-8 mx-auto">
					<div className="flex items-center mb-10">
						<button
							className="cursor-pointer"
							onClick={() => setShowAbout(false)}
						>
							<AiOutlineCloseCircle size={25} />
						</button>
						<span
							className="mx-3 cursor-pointer "
							onClick={() => setShowAbout(false)}
						>
							Back
						</span>
					</div>
					<div className="">
						<h1 className='p-2 font-heading text-center font-bold text-2xl md:text-4xl'>About Me</h1>
<p>Olalekan Micheal is a budding software engineer based in Nigeria. 
Holds a masters degree in Information Science
developer with 3 years experience converting still-life designs to interactive websites. 
She is a problem solver, and a lover of graphical books, animated movies, 
good music, and the japanese culture.</p>
					</div>
					{/* <div className="text-center test-sm md:text-base">
						<h1 className="mb-5">Have a project to discuss? </h1>

						<p>Shooooot me a DM on socials</p>
						<p className="flex justify-center gap-2 my-6">
							<Link to="/">
								<FaXTwitter size={20} />
							</Link>
							<Link to="/">
								<FaLinkedinIn size={20} />
							</Link>
							<Link to="/">
								<FaGithub size={20} />
							</Link>
						</p>
						<p>or</p>
					</div> */}


				</div>
			</div>
		</div>
	);
};

export default About;
