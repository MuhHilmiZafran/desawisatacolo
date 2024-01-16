import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { CardAttractionLong } from "../../components/CardAttractionLong";
import axios from "axios";

const TouristAttraction = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getAttractions();
  }, []);

  const getAttractions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/attractions");
      setAttractions(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 px-6 md:px-12 py-9">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-medium">Artikel dan Berita</div>
          <div className="text-md text-slate-500">
            Berisi Artikel dan Berita tentang Desa Wisata Colo.
          </div>
        </div>
        <div>
          {attractions.map((attraction) => (
            <CardAttractionLong key={attraction.id} payloads={attraction} />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default TouristAttraction;
