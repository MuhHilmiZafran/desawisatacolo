import React, { useState } from "react";
import Tables from "../../components/Tables/Tables";
import TableHeader from "../../components/Tables/TableHeader";
import TableBody from "../../components/Tables/TableBody";
import SearchBar from "../../components/SearchBar";
import ButtonPrimary from "../../components/ButtonPrimary";

const ProductTransaction = () => {
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
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Pemesan</th>
            <th className="py-2 px-4 border-b">Nama Produk</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Total Harga</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </TableHeader>
          <TableBody></TableBody>
        </Tables>
      </div>
    </div>
  );
};

export default ProductTransaction;
