import { AiOutlineCloseCircle } from "react-icons/ai";

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
						<p>
						Olalekan Micheal is a budding software engineer based in Nigeria. 
						Holds a masters degree in Information Science
						developer with 3 years experience converting still-life designs to interactive websites. 
						She is a problem solver, and a lover of graphical books, animated movies, 
						good music, and the japanese culture.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
