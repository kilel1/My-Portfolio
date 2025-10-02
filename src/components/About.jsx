import React from "react";

const About = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(135deg, #ff1493, #c71585)",
        color: "white",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
      <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
        My name is <span className="font-bold">Brian Kibet</span>, a dedicated
        and creative web designer passionate about building digital experiences
        that are modern, responsive, and user-friendly.  
        <br /> <br />
        I specialize in blending clean UI design with strong technical
        implementation, making sure every website I create is both visually
        stunning and functionally robust.
      </p>

      {/* GitHub Link */}
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
      >
        View My Work 
      </a>
    </div>
  );
};

export default About;


        