import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import { Add } from "@mui/icons-material";
import ButtonPrimary from "../../components/ButtonPrimary";

import CardAttractionAdmin from "../../components/CardAttractionAdmin";
import axios from "axios";
import EditAttractionModal from "../../components/EditAttractionModal";
import AddArticleModal from "../../components/AddArticleModal";
import CardArticleAdmin from "../../components/CardArticleAdmin";
import EditArticleModal from "../../components/EditArticleModal";

const ArticleAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [articleId, setArticleId] = useState("");

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

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/articles");
      setArticles(response.data); // Assuming the articles data is an array
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const deleteArticle = async (articleId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/articles/${articleId}`
      );

      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModalEdit = (articleId) => {
    setIsShowModalEdit(true);
    setArticleId(articleId);
  };

  const handleShowModalEdit = (showModal) => {
    setIsShowModalEdit(showModal);
    setArticleId("");
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
            className="w-full h-8 rounded-sm border justify-center items-center flex gap-x-2 text-black"
          >
            <Add style={{ fontSize: "1rem", color: "black" }} />

            <span className="text-sm font-medium">Tambah Wisata</span>
          </ButtonPrimary>
        </div>
      </div>
      <div className="overflow-y-auto max-h-[500px]">
      {articles.map((article) => (
          <CardArticleAdmin
            key={article.id}
            openModalEdit={() => handleOpenModalEdit(article.id)}
            deleteArticle={() => deleteArticle(article.id)}
            payloads={article}
          />
        ))}
      </div>
      <AddArticleModal
        openModal={isShowModalAdd}
        onClose={() => {
          setIsShowModalAdd(false);
        }}
        // updateData={getArticles}
      />
      <EditArticleModal
        openModal={isShowModalEdit}
        onClose={handleShowModalEdit}
        articleId={articleId}
      />
    </div>
  );
};

export default ArticleAdmin;
