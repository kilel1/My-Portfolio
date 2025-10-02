import React from "react";

const Contactform = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(135deg, #ff1493, #c71585)",
        color: "white",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg md:text-xl mb-8">
        I’d love to hear from you! Whether you want to collaborate, ask a
        question, or just say hi ,feel free to reach out.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-white text-black rounded-lg shadow-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md text-black placeholder-gray-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md text-black placeholder-gray-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-md text-black placeholder-gray-500"
          rows="4"
        ></textarea>
        <button className="w-full bg-pink-600 text-white py-3 rounded-md shadow-lg hover:bg-pink-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactform;




