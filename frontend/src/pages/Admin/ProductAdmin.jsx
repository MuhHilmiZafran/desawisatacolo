import React, { useState } from "react";
import Tables from "../../components/Tables/Tables";
import TableHeader from "../../components/Tables/TableHeader";
import TableBody from "../../components/Tables/TableBody";
import SearchBar from "../../components/SearchBar";
import { Add } from "@mui/icons-material";
import ButtonPrimary from "../../components/ButtonPrimary";

const ProductAdmin = () => {
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
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama Produk</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Stok</th>
            <th className="py-2 px-4 border-b">Action</th>
          </TableHeader>
          <TableBody></TableBody>
        </Tables>
      </div>
    </div>
  );
};

export default ProductAdmin;
