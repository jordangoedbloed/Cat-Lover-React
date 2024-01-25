import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { kittyType } from "../types/kitty";

const KittyDetails = () => {
  const { id } = useParams();
  const [kitty, setKitty] = useState<kittyType | null>(null);

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

  if (!kitty) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{kitty.name}</h1>
      <p>{kitty.breed}</p>
      <p>{kitty.color}</p>
    </div>
  );
};

export default KittyDetails;
