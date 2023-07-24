import React from "react";
import MyImage from "../assets/myImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center py-6">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an aspiring developer
          </h2>
          <p className="max-w-d text-gray-500 py-4">
            I am a fresh graduate from Quezon City University with a degree of
            Bachelor of Science in Information Technology. I am a self-taught
            developer who is passionate about learning new technologies and
            building web applications. I am currently looking for a job that
            will help me grow as a developer and as a person.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MyImage}
            alt="myProfile"
            className="rounded-2xl mx-auto w-5/6 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
