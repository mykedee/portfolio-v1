import React from "react";

const Footer = (props) => {
	return (
		<>
			{/* <div
				className={`flex justify-center items-center py-5 ${
					props.showDarkMode ? "dark" : "bg-dash-bg"
				} `}
			> */}
			<div className="flex justify-center items-center py-5">
				{/* <div className="bg-black text-wheat flex justify-center items-center py-5"> */}

				<div>
					<p className="font-light text-sm">
						&copy; {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</>
	);
};
export default Footer;
