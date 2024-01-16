export const CardAttractionSmall = ({
  nama,
  kategori,
  lokasi,
  judul,
  deskripsi,
  gambar,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full object-cover" src={gambar} alt={judul} />
      </div>
      <div className="px-6 py-4">
        <div className="inline-block text-sm bg-blue-500 text-white px-2 py-1 mb-2 rounded-tl rounded-br">
          {kategori}
        </div>
        <div className="font-bold text-xl mb-2">{judul}</div>
        <p className="w-[18rem] md:w-full text-gray-700 text-base break-words truncate">
          {deskripsi}
        </p>
      </div>
    </div>
  );
};
