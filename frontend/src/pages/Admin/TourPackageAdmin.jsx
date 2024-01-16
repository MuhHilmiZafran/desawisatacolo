import React, { useState } from "react";
import Tables from "../../components/Tables/Tables";
import TableHeader from "../../components/Tables/TableHeader";
import TableBody from "../../components/Tables/TableBody";
import SearchBar from "../../components/SearchBar";
import ButtonPrimary from "../../components/ButtonPrimary";

const TourPackageAdmin = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);

  const handleSearchProduct = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    setSearchValue(keyword);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <SearchBar
          className="focus:outline-none text-neutralMediumLow"
          placeholder="Pencarian"
          value={searchValue}
          onChange={handleSearchProduct}
        />
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
          <TableBody></TableBody>
        </Tables>
      </div>
    </div>
  );
};

export default TourPackageAdmin;
