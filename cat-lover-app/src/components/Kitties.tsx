import { useState, useEffect } from "react";
import { kittyType } from "../types/kitty";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import Navbar from "./common/Navbar";

function Kitties() {
  const [kitties, setKitties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchKitties = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:8000/kitty/?page=1&limit=100"
        );
        const data = await response.json();
        setKitties(data.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchKitties();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentKitties = kitties.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredKitties = currentKitties.filter((kitty: kittyType) =>
    kitty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <button className="bg-primaryBrown1 text-white px-4 py-2 rounded-md">
          <Link to="/kitties/create">Create Kitty</Link>
        </button>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 p-2 border rounded-md"
        />
        <div className="grid grid-cols-3 gap-8 max-w-[1240px] mx-auto">
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredKitties.map((kitty: kittyType) => (
              <div
                key={kitty._id}
                className="flex flex-col shadow-lg bg-white p-6 rounded-md mb-8"
              >
                <h1 className="font-bold text-xl mb-2">{kitty.name}</h1>
                <Link to={`/kitties/${kitty._id}`}>Details</Link>
              </div>
            ))
          )}
        </div>
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={kitties.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Kitties;
