import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const About = () => {
	return (
<>
			<Header />
	<div className="dark:bg-[#3d3d3d] bg-white w-11/12 mx-auto min-h-full">
			<p className="text-white mt-10">About Page</p>
<div className="flex items-center mb-10 p-2">
						<button
							className="cursor-pointer"
						>
							<AiOutlineCloseCircle size={25} />
						</button>
						<span
							className="mx-3 cursor-pointer "
						>
							Back
						</span>
					</div>
			<div className="flex justify-center items-center">
				<div className="flex-1">
					<p>PowerAdmin Dashboard</p>
					<p>
						A fully responsive full stack admin/client dashboard built with
						React, Tailwind CSS, Node, Express, Mongodb
					</p>
				</div>
				<div className="flex-1">B</div>
				<div className="flex-1">C</div>
			</div>
		</div>
</>
	
	);
};

export default About;
