import React, { useState } from "react";
import { kittyType } from "../types/kitty";
import { useNavigate } from "react-router-dom";

interface EditKittyModalProps {
  kitty: kittyType;
  onSave: () => void;
  onClose: () => void;
}

const EditKittyModal: React.FC<EditKittyModalProps> = ({
  kitty,
  onSave,
  onClose,
}) => {
  const [editedKitty, setEditedKitty] = useState({ ...kitty });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedKitty((prevKitty) => ({
      ...prevKitty,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8000/kitty/${kitty._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedKitty),
      });

      if (!response.ok) {
        throw new Error(`Error updating kitty: ${response.statusText}`);
      }

      // If the update is successful, trigger the onSave callback
      onSave();

      // Close the modal
      onClose();

      // Trigger page refresh by navigating to the current page
      navigate(`/kitty/${kitty._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Edit Kitty</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={editedKitty.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Breed
          </label>
          <input
            type="text"
            name="breed"
            value={editedKitty.breed}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <input
            type="text"
            name="color"
            value={editedKitty.color}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-primaryBrown1 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditKittyModal;
