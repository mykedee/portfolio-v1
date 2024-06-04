import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="dark:bg-red h-auto py-5">
        <div className="flex justify-center items-center pt-5 font-body">
          <div>
            <p className="font-light text-sm ">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
