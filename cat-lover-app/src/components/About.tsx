import React from "react";
import Navbar from "./common/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">About this website</h1>
        <p className="text-lg mb-4">
          Welcome to my Kitty API web application! 🐾
        </p>
        <p className="text-lg mb-4">
          My platform allows you to manage a collection of adorable kitties. You
          can add new kitties, edit their information, and delete them as
          needed.
        </p>
        <p className="text-lg mb-4">
          Whether you're a cat lover or just enjoy managing cute virtual pets,
          this platform provides a simple and delightful experience.
        </p>
        <p className="text-lg mb-4">
          Feel free to explore the Kitties section to view, add, edit, and
          delete your favorite virtual feline friends!
        </p>
      </div>
    </div>
  );
};

export default About;
