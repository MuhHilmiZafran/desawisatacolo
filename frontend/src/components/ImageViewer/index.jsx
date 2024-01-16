import React, { useState, useEffect } from "react";

const ImageViewer = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/get-image-url/${imageName}`
        );
        const data = await response.json();
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
  }, [imageName]);

  return (
    <div >
      {imageUrl && <img src={imageUrl} alt="Gambar" className="object-cover rounded-lg md:w-[700px] md:h-[430px]"/>}
    </div>
  );
};

export default ImageViewer;
