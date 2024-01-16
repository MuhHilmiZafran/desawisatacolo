import { useEffect, useState } from "react";
import { CardAttractionLong } from "../../components/CardAttractionLong";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";
import axios from "axios";

const TourPackage = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    getAttractions();
  }, []);

  const getAttractions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/attractions");
      setAttractions(response.data);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-5 px-6 md:px-12 py-9">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-medium">Destinasi Wisata</div>
          <div className="text-md text-slate-500">
            Berisi Informasi Destinasi Wisata Desa Wisata Colo
          </div>
        </div>
        <div>
          <SearchBar
            className="focus:outline-none w-full"
            placeholder="Pencarian"
            // value={searchValue}
            // onChange={handleSearchArticle}
          />
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

export default TourPackage;
