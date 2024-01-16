import React from "react";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import CardProduct from "../../components/CardProduct";

const Product = () => {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category A',
      image: 'https://placekitten.com/300/200',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      category: 'Category B',
      image: 'https://placekitten.com/301/200',
      price: 29.99,
    },
    // Add more products as needed
  ];
  
  return (
    <div>
      <div className="flex flex-col gap-5 px-6 md:px-12 py-9">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-medium">Produk Wisata</div>
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
