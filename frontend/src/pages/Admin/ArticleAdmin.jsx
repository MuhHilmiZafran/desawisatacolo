import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { Add } from "@mui/icons-material";
import ButtonPrimary from "../../components/ButtonPrimary";
import AddArticleModal from "../../components/AddAttractionModal";
import CardAttractionAdmin from "../../components/CardAttractionAdmin";

const ArticleAdmin = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);

  const handleSearchArticle = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    setSearchValue(keyword);
  };

  const examplePayload = {
    image: "https://example.com/image.jpg",
    title: "Example Title",
    author: "John Doe",
    date: "2023-11-28T12:00:00Z", // Use a valid date string
    view_count: 100,
    comment_count: 20,
    id: 1, // Assuming you have an 'id' property
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
        <CardAttractionAdmin payloads={examplePayload} />
        <CardAttractionAdmin payloads={examplePayload} />
        <CardAttractionAdmin payloads={examplePayload} />
        <CardAttractionAdmin payloads={examplePayload} />
      </div>
      <AddArticleModal
        openModal={isShowModalAdd}
        onClose={() => {
          setIsShowModalAdd(false);
        }}
        // updateData={fetchAllArticles}
      />
    </div>
  );
};

export default ArticleAdmin;
