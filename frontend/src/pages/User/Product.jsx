import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import CardProduct from "../../components/CardProduct";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5 px-6 md:px-12 py-9">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-medium">Oleh-Oleh</div>
          <div className="text-md text-slate-500">
            Berisi Produk-produk Khas Desa Wisata Colo.
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
        <div className="flex gap-3">
          {products.map((product) => (
            <CardProduct key={product.id} payloads={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
