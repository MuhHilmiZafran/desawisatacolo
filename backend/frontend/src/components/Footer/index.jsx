// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white p-9">
      <div className="container mx-auto flex flex-col gap-3 md:flex-row justify-between items-start">
        <div className="flex flex-col max-w-[400px] gap-2">
          <p className="text-lg font-semibold">Desa Wisata</p>
          <p className="text-sm">Alamat Desa Wisata, Negara</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nihil totam libero voluptatum cupiditate autem officiis cum
            temporibus eum ipsa molestias ipsam, beatae facere! Et culpa illo
            rem? Dolor, perferendis!
          </p>
        </div>
        <div>
          <div className="w-[300px] h-[200px] bg-slate-50"></div>
        </div>
        <div>
          <div>
            <p className="text-lg font-semibold">Hubungi Kami</p>
            <p className="text-sm">Email: info@desawisata.com</p>
            <p className="text-sm">Telepon: (123) 456-7890</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Ikuti Kami</p>
            <div className="flex space-x-2">
              <a href="#" className="text-sm">
                Facebook
              </a>
              <a href="#" className="text-sm">
                Instagram
              </a>
              <a href="#" className="text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
