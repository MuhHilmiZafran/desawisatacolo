// src/App.js
import { Shop, ShopRounded } from "@mui/icons-material";
import React from "react";

const ProductDetail = () => {
  const product = {
    name: "Nama Produk",
    description: "Deskripsi produk yang panjang dan informatif.",
    price: "Rp 100.000",
    image: "url_gambar_produk.jpg",
  };

  const handleBuyClick = () => {
    // Logika ketika tombol beli ditekan
    console.log("Produk ditambahkan ke keranjang");
  };

  return (
    <div className="container mx-auto">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-between">
            <img
              alt="ecommerce"
              className="lg:w-1/2  max-w-[400px] max-h-[400px] object-cover rounded border border-gray-200"
              src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
            ></img>{" "}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Category
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Kopi Muria
              </h1>
              <p className="leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                totam ipsum nam dolore? Quis corrupti accusantium excepturi
                sapiente id sit ab mollitia porro nulla, explicabo pariatur
                laudantium velit ipsum cumque?
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Beli Sekarang
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <Shop />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
