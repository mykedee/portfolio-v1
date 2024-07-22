import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Contact = () => {
	return (
    <>
      <div className="w-11/12 mx-auto min-h-full">
        <div className="w-full md:w-3/6 py-8 mx-auto">
          <div className="flex items-center mb-10 p-2">
            <button className="cursor-pointer">
              <AiOutlineCloseCircle size={25} />
            </button>
            <Link to="/" className="mx-3 cursor-pointer ">
              Backs
            </Link>
          </div>
          <div className="text-center py-4 test-sm md:text-base">
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
                <FaInstagram size={20} />
              </Link>
            </p>
            <p>or</p>
          </div>

          <form className="bg-slate-50 dark:bg-[#5d5d5da3] p-4 md:p-20 rounded">
            <div className="mb-10">
              <label className="block mb-2">Subject</label>
              <input
                className="w-full p-4 mb-3 rounded dark:bg-[#555555]"
                placeholder="subject"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>

              <textarea
                className="w-full h-[200px] p-4 mb-3 rounded dark:bg-[#555555]"
                placeholder="Enter message"
              />
            </div>
            <button className="w-full rounded md:w-2/6 md:float-right p-3 bg-slate-900 text-white dark:bg-wheat dark:text-slate-950">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
