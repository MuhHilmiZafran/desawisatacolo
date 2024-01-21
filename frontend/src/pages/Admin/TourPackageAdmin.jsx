import React, { useEffect, useState } from "react";
import Tables from "../../components/Tables/Tables";
import TableHeader from "../../components/Tables/TableHeader";
import TableBody from "../../components/Tables/TableBody";
import SearchBar from "../../components/SearchBar";
import ButtonPrimary from "../../components/ButtonPrimary";
import AddTourPackageModal from "../../components/AddTourPackageModal";
import axios from "axios";
import { Add, Delete, Edit } from "@mui/icons-material";
import TableRow from "../../components/Tables/TableRow";
import EditTourPackageModal from "../../components/EditTourPackage";

const TourPackageAdmin = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [tourPackageId, setTourPackageId] = useState("");

  useEffect(() => {
    getTourPackage();
  }, []);

  const getTourPackage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/tour-packages"
      );
      setTourPackages(response.data); // Assuming the TourPackage data is an array
    } catch (error) {
      console.error("Error fetching TourPackage:", error);
    }
  };

  const deleteTourPackage = async (tourPackageId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/tour-packages/${tourPackageId}`
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

  const handleOpenModalEdit = (tourPackageId) => {
    setIsShowModalEdit(true);
    setTourPackageId(tourPackageId);
  };

  const handleShowModalEdit = (showModal) => {
    setIsShowModalEdit(showModal);
    setTourPackageId("");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <SearchBar
          className="focus:outline-none text-neutralMediumLow"
          placeholder="Pencarian"
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
      <div>
        <Tables>
          <TableHeader>
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Paket Wisata</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Jumlah Rombongan</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Action</th>
          </TableHeader>
          <TableBody>
            {tourPackages.map((tourPackage) => (
              <TableRow scope="row" key={tourPackage.id}>
                <td>{tourPackage.id}</td>
                <td>{tourPackage.name}</td>
                <td>{tourPackage.description}</td>
                <td>{tourPackage.min_people}-{tourPackage.max_people}</td>
                <td>{tourPackage.price}</td>

                <td>
                  <div>
                    <div className="flex flex-row py-[8px] gap-x-4 justify-end">
                      <div className="columns">
                        <ButtonPrimary
                          className="w-full h-2 rounded-sm border text-green-600 border-green-600 justify-center items-center flex outline-green-600 hover:bg-green-300"
                          onClick={() => handleOpenModalEdit(tourPackage.id)}
                        >
                          <Edit style={{ fontSize: "1rem" }} />
                          {/* <span className="text-sm font-medium">Edit</span> */}
                        </ButtonPrimary>
                      </div>
                      <div className="columns">
                        <ButtonPrimary
                          className="w-full h-2 rounded-sm border text-red-600 border-red-600 justify-center items-center flex outline-red-600 hover:bg-red-300"
                          onClick={() => deleteTourPackage(tourPackage.id)}
                        >
                          <Delete style={{ fontSize: "1rem" }} />
                          {/* <span className="text-sm font-medium">Delete</span> */}
                        </ButtonPrimary>
                      </div>
                    </div>
                  </div>
                </td>
              </TableRow>
            ))}
          </TableBody>
        </Tables>
      </div>
      <AddTourPackageModal
        openModal={isShowModalAdd}
        onClose={() => {
          setIsShowModalAdd(false);
        }}
        // updateData={fetchAllArticles}
      />
      <EditTourPackageModal
        openModal={isShowModalEdit}
        onClose={handleShowModalEdit}
        tourPackageId={tourPackageId}
      />
    </div>
  );
};

export default TourPackageAdmin;
