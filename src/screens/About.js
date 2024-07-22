import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaSadCry } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
	return (
<>
	<div className="w-11/12 mx-auto min-h-[100vh]">
			<p className="text-white mt-10">About Page</p>
			<div className="flex items-center mb-10 p-2">
						<Link to="/"
							className="cursor-pointer"
						>
							<AiOutlineCloseCircle className="inline" size={25} /><span 
							className="mx-3 cursor-pointer "
						>
							Back
						</span>
						</Link>
						
			</div>
			<div className="flex justify-center text-center items-center">
					<span>
						<p>Nothing to see here at the moment.....please check back in few days</p>
						<FaSadCry className="inline-block my-5 text-wheat" size={50}/>
					</span>
				
			</div>
		</div>
</>
	
	);
};

export default About;
