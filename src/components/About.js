import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = ({ showAbout, setShowAbout }) => {
	return (
		<div className="my-16 py-12 relative ">
			<div className=" dark:bg-[#111] bg-white w-[98%] md:w-[60%] mx-auto min-h-full absolute top-0 z-10 left-0 right-0 rounded-lg">
				{/* <div className="bg-dash-bg dark:bg-black h-full absolute w-full z-10 top-0 left-0 right-0"> */}
				{/* <div className="bg-red-600 h-[100vh] absolute w-full z-10 top-0 left-0 right-0"> */}
				<div className="w-11/12 py-8 mx-auto">
					<div className="flex items-center mb-10 ">
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
					<div className="text-center test-sm md:text-base">
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
					</div>

					<form>
						<div className="mb-10">
							<label className="block mb-2">Subject</label>
							<input
								className="w-full p-4 mb-3 rounded-lg"
								placeholder="subject"
							/>
						</div>
						<div>
							<textarea
								className="w-full h-[200px] p-4 mb-3 rounded-lg"
								placeholder="Enter message"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default About;