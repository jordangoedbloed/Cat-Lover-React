// // CreateKitty.tsx

// import React, { useState } from "react";

// const CreateKitty = ({ onCreate }) => {
//   const [newKitty, setNewKitty] = useState({
//     name: "",
//     breed: "",
//     color: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewKitty((prevKitty) => ({
//       ...prevKitty,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8000/kitty", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newKitty),
//       });
//       const data = await response.json();
//       onCreate(data);
//       setNewKitty({
//         name: "",
//         breed: "",
//         color: "",
//       });
//     } catch (error) {
//       console.error("Error creating kitty:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <h1 className="text-2xl font-bold mb-4">Create a New Kitty</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={newKitty.name}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Breed:
//           </label>
//           <input
//             type="text"
//             name="breed"
//             value={newKitty.breed}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Color:
//           </label>
//           <input
//             type="text"
//             name="color"
//             value={newKitty.color}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Create Kitty
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateKitty;

// CreateKitty.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the props interface
interface CreateKittyProps {
  onCreate: (data: string) => void; // Adjust 'any' to the actual type of created kitty data
}

const CreateKitty: React.FC<CreateKittyProps> = ({ onCreate }) => {
  const [newKitty, setNewKitty] = useState({
    name: "",
    breed: "",
    color: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewKitty((prevKitty) => ({
      ...prevKitty,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/kitty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newKitty),
      });
      const data = await response.json();
      onCreate(data);
      setNewKitty({
        name: "",
        breed: "",
        color: "",
      });
    } catch (error) {
      console.error("Error creating kitty:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create a New Kitty</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={newKitty.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Breed:
          </label>
          <input
            type="text"
            name="breed"
            value={newKitty.breed}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Color:
          </label>
          <input
            type="text"
            name="color"
            value={newKitty.color}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Create Kitty
        </button>
      </form>
    </div>
  );
};

export default CreateKitty;
