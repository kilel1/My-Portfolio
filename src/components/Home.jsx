import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(135deg, #ff1493, #c71585)",
        color: "white",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Hi, I'm Brian Kibet 
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8">
        A passionate <span className="font-bold">Web Designer</span> who loves
        creating modern, responsive, and visually appealing websites.
      </p>

      
      <Link
        to="/about"
        className="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-100 transition duration-300"
      >
        Learn More About Me
      </Link>
    </div>
  );
};

export default Home;



