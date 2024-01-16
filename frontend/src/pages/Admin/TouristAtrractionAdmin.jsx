import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { Add, Edit } from "@mui/icons-material";
import ButtonPrimary from "../../components/ButtonPrimary";
import axios from "axios";
import CardAttractionAdmin from "../../components/CardAttractionAdmin";
import AddAttractionModal from "../../components/AddAttractionModal";
import EditAttractionModal from "../../components/EditAttractionModal";

const TouristAttractionAdmin = () => {
  const [attractions, setAttractions] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [attractionId, setAttractionId] = useState("");

  useEffect(() => {
    getAttractions();
  }, []);

  const getAttractions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/attractions");
      setAttractions(response.data); // Assuming the attractions data is an array
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const deleteAttraction = async (attractionId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/attractions/${attractionId}`
      );

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchArticle = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    setSearchValue(keyword);
  };

  const handleOpenModalEdit = (attractionId) => {
    setIsShowModalEdit(true);
    setAttractionId(attractionId);
  };

  const handleShowModalEdit = (showModal) => {
    setIsShowModalEdit(showModal);
    setAttractionId("");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <SearchBar
          className="focus:outline-none text-neutralMediumLow"
          placeholder="Find something here ..."
          value={searchValue}
          onChange={handleSearchArticle}
        />
        <div className="flex justify-center">
          <ButtonPrimary
            onClick={() => {
              setIsShowModalAdd(true);
            }}
            className="w-full h-8 rounded-sm border justify-center items-center flex gap-x-2"
          >
            
            <Add style={{ fontSize: "1rem" }} />

            <span className="text-sm font-medium">Tambah Wisata</span>
          </ButtonPrimary>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[500px]">
        {attractions.map((attraction) => (
          <CardAttractionAdmin
            key={attraction.id}
            openModalEdit={() => handleOpenModalEdit(attraction.id)}
            deleteAttraction={() => deleteAttraction(attraction.id)}
            payloads={attraction}
          />
        ))}
      </div>
      <AddAttractionModal
        openModal={isShowModalAdd}
        onClose={() => {
          setIsShowModalAdd(false);
        }}
        // updateData={fetchAllArticles}
      />
      <EditAttractionModal
        openModal={isShowModalEdit}
        onClose={handleShowModalEdit}
        attractionId={attractionId}
      />
    </div>
  );
};

export default TouristAttractionAdmin;
