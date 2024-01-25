import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { kittyType } from "../types/kitty";
import EditKittyModal from "./EditKittyModal"; // Import the EditKittyModal component

const KittyDetails = () => {
  const { id } = useParams();
  const [kitty, setKitty] = useState<kittyType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKittyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/kitty/${id}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(
            `Error fetching kitty details: ${response.statusText}`
          );
        }

        const data = await response.json();
        setKitty(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchKittyDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/kitty/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting kitty: ${response.statusText}`);
      }

      // Redirect to the kitties list or any other page after successful deletion
      navigate("/kitties");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  if (!kitty) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Link to="/kitties" className="text-blue-500 hover:underline">
          Back to Kitties
        </Link>
      </div>
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{kitty.name}</h1>
        <p className="text-lg mb-2">{kitty.breed}</p>
        <p className="text-lg mb-4">{kitty.color}</p>
        <button
          onClick={handleEdit}
          className="bg-primaryBrown1 text-white px-4 py-2 rounded-md mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-primaryBrown1 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>

      {isEditing && <EditKittyModal kitty={kitty} onClose={handleEditClose} />}
    </div>
  );
};

export default KittyDetails;
