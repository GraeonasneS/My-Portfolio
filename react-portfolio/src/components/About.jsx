import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui itaque
          unde, perferendis accusantium assumenda animi sapiente? Doloribus
          exercitationem eius provident voluptas mollitia placeat repudiandae
          praesentium enim dolorum ipsum sunt velit ut voluptatem assumenda,
          nostrum expedita voluptatum impedit possimus iure voluptate dolore
          ullam nulla animi! Laboriosam aspernatur ea vitae a placeat?
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde hic
          quia tempora porro esse delectus ipsa fuga exercitationem animi
          assumenda, magni accusantium facere aspernatur repudiandae adipisci,
          velit placeat id odit distinctio impedit voluptate culpa voluptas,
          dolore neque. Dolores assumenda distinctio atque consequuntur fugit,
          et blanditiis dignissimos! Impedit iste rem debitis?
        </p>
      </div>
    </div>
  );
};

export default About;
