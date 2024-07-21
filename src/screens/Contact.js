import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Contact = () => {
	return (
		<>
			<div className="w-11/12 mx-auto min-h-full">

				<div className="w-3/6 py-8 mx-auto">
					<div className="flex items-center mb-10 p-2">
						<button
							className="cursor-pointer"
						>
							<AiOutlineCloseCircle size={25} />
						</button>
						<Link to="/"
							className="mx-3 cursor-pointer "
						>
							Backs
						</Link>
					</div>
					<div className="text-center test-sm md:text-base">
						<h1 className="mb-5">Have a project to discuss? </h1>

						<p>Shot me a DM on socials</p>
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
		</>
	);
};

export default Contact;
