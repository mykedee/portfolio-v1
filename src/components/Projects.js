import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Projects = ({ showProfile, setShowProfile }) => {
	return (
		<div className="my-16 py-24 relative">
			<div className="dark:bg-[#3d3d3d] bg-white w-[98%] md:w-[60%] mx-auto min-h-full absolute top-0  z-10 left-0 right-0 rounded-lg">
				<div className="w-11/12 py-8 mx-auto">
					<div className="flex items-center p-2">
						<button
							className="cursor-pointer"
							onClick={() => setShowProfile(false)}
						>
							<AiOutlineCloseCircle size={25} />
						</button>
						<span
							className="mx-3 cursor-pointer "
							onClick={() => setShowProfile(false)}
						>
							Back
						</span>
					</div>
					<div className="p-2 font-heading text-center font-bold text-2xl md:text-4xl">
						<h1>Selected Projects</h1>
					</div>

					<div className="flex md:flex-row flex-col justify-between items-center p-2 ">
						<div className="mx-3 my-5 p-3 dark:bg-[#999] bg-[#F2EFEF] rounded">
							<p>
								Velit laborum aute ad ex qui reprehenderit laboris Lorem mollit
								tempor sint laborum aute. Esse mollit elit nulla dolor consequat
								minim sit sunt pariatur Lorem. Duis laborum esse incididunt
								eiusmod nulla duis reprehenderit anim. Do nulla ipsum ut id elit
								commodo ullamco sint commodo qui exercitation amet nostrud.
								Reprehenderit pariatur ipsum commodo elit sunt aliquip nulla.
								Reprehenderit fugiat veniam eu Lorem ad et excepteur tempor ut
								commodo aliqua ipsum. Sit labore laboris sint aliqua cupidatat
								cillum tempor proident commodo sunt exercitation exercitation.
							</p>
							<Link to="/">							<p className="font-bold">PowerAdmin</p>
</Link>
							<p>React, Tailwind CSS, Nodejs, MongoDB</p>
						</div>

						<div className="mx-3 p-3 dark:bg-[#999] bg-[#F2EFEF] rounded">
							<p>
								Velit laborum aute ad ex qui reprehenderit laboris Lorem mollit
								tempor sint laborum aute. Esse mollit elit nulla dolor consequat
								minim sit sunt pariatur Lorem. Duis laborum esse incididunt
								eiusmod nulla duis reprehenderit anim. Do nulla ipsum ut id elit
								commodo ullamco sint commodo qui exercitation amet nostrud.
								Reprehenderit pariatur ipsum commodo elit sunt aliquip nulla.
								Reprehenderit fugiat veniam eu Lorem ad et excepteur tempor ut
								commodo aliqua ipsum. Sit labore laboris sint aliqua cupidatat
								cillum tempor proident commodo sunt exercitation exercitation.
							</p>
						</div>
					</div>

					<div className="flex md:flex-row flex-col justify-between items-center p-3  ">
						<div className="mx-3 my-5 p-3 dark:bg-[#999] bg-[#F2EFEF] rounded">
							<p>
								Velit laborum aute ad ex qui reprehenderit laboris Lorem mollit
								tempor sint laborum aute. Esse mollit elit nulla dolor consequat
								minim sit sunt pariatur Lorem. Duis laborum esse incididunt
								eiusmod nulla duis reprehenderit anim. Do nulla ipsum ut id elit
								commodo ullamco sint commodo qui exercitation amet nostrud.
								Reprehenderit pariatur ipsum commodo elit sunt aliquip nulla.
								Reprehenderit fugiat veniam eu Lorem ad et excepteur tempor ut
								commodo aliqua ipsum. Sit labore laboris sint aliqua cupidatat
								cillum tempor proident commodo sunt exercitation exercitation.
							</p>
						</div>

						<div className="mx-3 p-3 dark:bg-[#999] bg-[#F2EFEF] rounded">
							<p>
								Velit laborum aute ad ex qui reprehenderit laboris Lorem mollit
								tempor sint laborum aute. Esse mollit elit nulla dolor consequat
								minim sit sunt pariatur Lorem. Duis laborum esse incididunt
								eiusmod nulla duis reprehenderit anim. Do nulla ipsum ut id elit
								commodo ullamco sint commodo qui exercitation amet nostrud.
								Reprehenderit pariatur ipsum commodo elit sunt aliquip nulla.
								Reprehenderit fugiat veniam eu Lorem ad et excepteur tempor ut
								commodo aliqua ipsum. Sit labore laboris sint aliqua cupidatat
								cillum tempor proident commodo sunt exercitation exercitation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
