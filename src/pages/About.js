import React from "react";

const About = () => {
  return (
    <>
      <div className="card w-100 bg-black/60 border-2 border-base-200 text-neutral-content pt-6 pb-6 backdrop-blur-sm mt-8 mb-8">
        <div className="card-body items-center text-center">
          <h1 className="text-6xl mb-4 font-bold">Github Finder App</h1>
          <p className="mb-4 text-xl custom-font">
            A React app to search GitHub profiles and see profile details...
            developed by <strong>
              <a className="hover:font-bold hover:duration-300 hover:ease-in" href="https://github.com/motazabdou" target='_blank'>Motaz Abdou</a>,
              </strong>
          </p>
          <p className="text-lg text-gray-400">
            Version <span className="text-white">1.0.0</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
