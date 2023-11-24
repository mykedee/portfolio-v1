import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Projects = ({ showProfile, setShowProfile }) => {
	return (
		<div className="my-16 py-24 relative">
			<div className="dark:bg-[#7a7a7a] bg-white w-[98%] md:w-[60%] mx-auto min-h-full absolute top-0  z-10 left-0 right-0 rounded-lg">
				<div className="w-5/6 py-8 mx-auto">
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
					<div className="p-2 font-heading text-center font-bold text-4xl">
						<h1>Selected Projects</h1>
					</div>

					<div className="flex justify-between items-center p-3 ">
						<p className="mx-3 p-3 bg-[#999] rounded">
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

						<p className="mx-3 p-3 bg-[#999] rounded">
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

					<div className="flex justify-between items-center p-3 ">
						<p className="mx-3 p-3 bg-[#999] rounded">
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

						<p className="mx-3 p-3 bg-[#999] rounded">
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
	);
};

export default Projects;
