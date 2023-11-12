import React, { useState } from "react";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const HomeScreen = (props) => {
	const [showProfile, setShowProfile] = useState(false);
	const [showAbout, setShowAbout] = useState(false);
	const [showContact, setShowContact] = useState(false);
	const handleProfile = () => {
		if (!showProfile) {
			setShowProfile(true);
		} else {
			setShowProfile(false);
		}
	};

	const handleAbout = () => {
		if (!showAbout) {
			setShowAbout(true);
		} else {
			setShowAbout(false);
		}
	};

	const handleContact = () => {
		if (!showContact) {
			setShowContact(true);
		} else {
			setShowContact(false);
		}
	};

	return (
		<div
			className={`sticky lg:overflow-x-hidden overflow-x-auto py-[5%] min-h-[100vh] ${
				props.showDarkMode ? "dark" : "bg-dash-bg"
			} `}
		>
			<div className="flex">
				{/* <div className="flex lg:overflow-x-hidden overflow-x-auto min-h-[100vh] relative"> */}
				<div className="absolute p-1 border rounded-full border-slate-800 dark:border-wheat  right-0 top-0 mx-5 md:mx-10 my-5">
					<span
						className="flex justify-center items-center  cursor-pointer"
						onClick={props.handleMode}
					>
						{props.showDarkMode ? (
							<MdOutlineDarkMode size={25} />
						) : (
							<MdOutlineLightMode size={25} />
						)}
					</span>
				</div>
				<div className="my-28 lg:my-auto w-full mx-auto">
					<div className="absolute top-0 w-full">
						{showProfile && (
							<Projects
								showProfile={showProfile}
								setShowProfile={setShowProfile}
							/>
						)}
						{showAbout && (
							<About showAbout={showAbout} setShowAbout={setShowAbout} />
						)}
						{showContact && (
							<Contact
								showContact={showContact}
								setShowContact={setShowContact}
							/>
						)}
					</div>

					<div className="flex md:flex-row justify-center items-center flex-col">
						<div className="w-5/6 md:w-4/6 mx-auto my-1 ">
							<h1 className="font-bold text-3xl md:text-6xl text-center lg:text-8xl my-4 lg:w-full">
								Olalekan Adedeji
							</h1>
							<p className="text-left w-full lg:w-3/5 mx-auto md:text-center md:text-base text-sm font-light my-2">
								Hi there, I am a Web Developer skilled in creating visual
								pleasing, high-performance and scalable web applications using
								mordern web technologies.
								{/* Full Stack developer skilled in creating visual pleasing,
								high-performance and scalable web applications using mordern web
								technologies. */}
							</p>
							<p className="block text-left md:text-base text-sm w-full lg:w-3/5 mx-auto md:text-center font-light my-2">
								Tools and technologies I work with includes
								<span className="font-bold"> Javascript</span> |
								<span className="font-bold"> React</span> |
								<span className="font-bold"> Vue</span> |
								<span className="font-bold"> Nuxt</span> |
								<span className="font-bold"> Node</span> |
								<span className="font-bold"> MongoDB</span> |
								<span className="font-bold"> SQL</span> |
								<span className="font-bold"> GIT </span> |
								<span className="font-bold"> Figma</span>
							</p>

							<div className="w-[35%] md:w-[9%] mx-auto mt-14 md:mt-16 text-sm">
								<div
									className="grid gap-2 md:gap-6 grid-cols-2 my-3 cursor-pointer"
									onClick={handleProfile}
								>
									<span className="inline-block h-[1px] items-center my-auto w-8 bg-black dark:bg-wheat"></span>
									<span>Portfolio</span>
								</div>

								<div
									className="grid gap-2 md:gap-6 grid-cols-2 my-3 cursor-pointer"
									onClick={handleAbout}
								>
									<span className="inline-block h-[1px] items-center my-auto w-8 bg-black dark:bg-wheat"></span>
									<span>About</span>
								</div>

								<div
									className="grid gap-2 md:gap-6 grid-cols-2 my-3 cursor-pointer"
									onClick={handleContact}
								>
									<span className="inline-block h-[1px] items-center my-auto w-8 bg-black dark:bg-wheat"></span>
									<span>Contact</span>
								</div>
							</div>

							<p className="relative mt-12 md:mt-16 right-0 left-0 bottom-0 text-center">
								{/* <div className="inline-block"> */}

								<div className="flex items-center justify-center text-sm">
									<span className="rounded-full w-12 h-12 border shadow-slate-800 dark:shadow-slate-50 mx-2">
										<img src="/images/lakes.gif" alt="logo" />
									</span>
									<span>I am social 😉</span>
								</div>

								<p className="flex justify-center gap-2 my-6">
									<Link to="/">
										<FaXTwitter size={20} />
									</Link>
									<Link to="/">
										<FaLinkedinIn size={20} />
									</Link>
									<Link to="/">
										<FaInstagram size={20} />
									</Link>
								</p>
								{/* <i className="fa-solid fa-chevron-down"></i> */}
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <Footer />	 */}
			<div className="flex justify-center items-center pt-5">
				<div>
					<p className="font-light text-sm pt-7">
						&copy; {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeScreen;
