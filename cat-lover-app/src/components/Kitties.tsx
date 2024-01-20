// import { useState, useEffect } from "react";
// import { kittyType } from "../types/kitty";
// import Pagination from "../components/Pagination";
// import Navbar from "./common/Navbar";

// function Kitties() {
//   const [kitties, setKitties] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(5);

//   useEffect(() => {
//     const fetchKitties = async () => {
//       setLoading(true);
//       fetch("http://localhost:8000/kitty")
//         .then((response) => response.json())
//         .then((res) => {
//           console.log(res), setKitties(res.items);
//         })
//         .catch((err) => console.log(err));
//       setLoading(false);
//     };

//     fetchKitties();
//   }, []);

//   // get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentKitties = kitties.slice(indexOfFirstPost, indexOfLastPost);

//   // change page
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex justify-center">
//         <div className="grid grid-cols-3 gap-8 max-w-[1240px] mx-auto">
//           {currentKitties.map((kitty: kittyType) => (
//             <div className="flex flex-col shadow-lg bg-white p-6 rounded-md mb-8">
//               <h1 className="font-bold text-xl mb-2">{kitty.name}</h1>
//               <p className="text-lg">{kitty.breed}</p>
//               <p className="text-lg">{kitty.color}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={kitties.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// }
// export default Kitties;

import { useState, useEffect } from "react";
import { kittyType } from "../types/kitty";
import Pagination from "../components/Pagination";
import Navbar from "./common/Navbar";

function Kitties() {
  const [kitties, setKitties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

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

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8 max-w-[1240px] mx-auto">
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentKitties.map((kitty: kittyType) => (
              <div
                key={kitty._id}
                className="flex flex-col shadow-lg bg-white p-6 rounded-md mb-8"
              >
                <img src={kitty.img} />
                <h1 className="font-bold text-xl mb-2">{kitty.name}</h1>

                {/* Details van alle katten */}
                {/* <p className="text-lg">{kitty.breed}</p>
                <p className="text-lg">{kitty.color}</p> */}
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
