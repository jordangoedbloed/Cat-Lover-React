import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Larger Hero Section with Image */}
      <div className="bg-primaryBrown1 text-white py-32 text-center">
        {/* You can replace 'your-image.jpg' with the path to your actual image */}
        <img
          src="your-image.jpg"
          alt="Hero Image"
          className="mx-auto rounded-full mb-8 shadow-lg"
          style={{ maxWidth: "300px" }}
        />

        <h1 className="text-4xl font-bold mb-4">Welcome to Kitty Paradise</h1>
        <p className="text-lg">
          Discover the adorable world of kitties. They're fluffy, playful, and
          simply irresistible!
        </p>
      </div>

      {/* Section Explaining How Cute Kitties Are */}
      <div className="flex flex-col items-center justify-center bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-8 text-primaryBrown1">
          Why Kitties Are So Cute
        </h2>
        <p className="text-lg max-w-xl text-center">
          Kitties, with their soft fur, curious eyes, and playful antics, have a
          way of stealing hearts. Whether they're purring on your lap or chasing
          after a toy, their cuteness knows no bounds.
        </p>
      </div>

      {/* Add more sections or content as needed */}
      <Footer />
    </div>
  );
};

export default Home;
