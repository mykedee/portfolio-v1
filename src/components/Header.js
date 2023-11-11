import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Projects from "./Projects";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = ({ setShowProfile, showProfile }) => {
	const [isOpen, setIsOpen] = useState(false);
	const openNav = () => {
		if (!isOpen) {
			// setIsOpen(false);
			setIsOpen(true);
		} else {
			// setIsOpen(true);
			setIsOpen(false);
		}
	};

	// const handleShow = () => {
	// 	setShowProfile(true);
	// };

	return (
		<div className="z-20">
			{/* {showProfile && (
				<Projects setShowProfile={setShowProfile} showProfile={showProfile} />
			)} */}
			<header className="fixed top-0 w-full flex justify-between bg-black py-0 md:py-1">
				<div className="flex justify-between w-5/6 mx-auto items-center">
					<h6 className="text-white">
						<Link to="/">
							<img src="/images/ad8.png" alt="logo" />
						</Link>
					</h6>
					<nav className={isOpen ? "open" : "close"}>
						<ul
							className="text-white hidden md:gap-4 md:items-center z-50"
							onClick={() => setIsOpen(false)}
						>
							<Link>Projects</Link>
							<Link to="/about">About</Link>
							<Link to="/contact">Contact</Link>

							<li className="md:hidden text-center">
								<p>I am social 😉</p>
								<p className="flex justify-center gap-2 mt-6">
									<span>
										<FaXTwitter />
									</span>
									<span>
										<FaLinkedinIn />
									</span>
								</p>
							</li>
						</ul>
					</nav>
					<div>
						{/* <div className="flex">
							<span className="cursor-pointer">
								<MdOutlineDarkMode size={25} />

								<MdOutlineLightMode size={25} />
							</span>
						</div> */}

						<button className="p-2 block cursor-pointer" onClick={openNav}>
							<div className={isOpen ? "hamburger" : undefined}>
								<span className="items-center  bg-wheat h-0.5 w-4 my-1"></span>
								<span className="items-center bg-wheat h-0.5 w-6 my-1"></span>
								<span className="items-center  bg-wheat h-0.5 w-5 my-1"></span>
							</div>
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
