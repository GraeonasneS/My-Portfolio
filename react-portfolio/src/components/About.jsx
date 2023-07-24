import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            About me
          </p>
        </div>
        <p className="text-xl">
          My name is Marcus Owen Grae V. Sensano, a fresh graduate of Quezon
          City University with a degree in Bachelor of Science in Information
          Technology. I am a former project manager of my capstone team and a
          front-end developer for the project that we made.
        </p>

        <br />

        <p className="text-xl">
          I like reading books and articles, playing video games and coding.
          Throughout my academic years, I have been a project manager and a
          developer for the projects that I got into and I have learned a lot
          from those experiences. I am eager in learning new things and I am
          willing to learn more. I am also a fast learner and I can adapt to new
          environments quickly. I am also a team player and I can work with a
          team or individually. I am also a responsible person and I can manage
          my time well.
        </p>
      </div>
    </div>
  );
};

export default About;
