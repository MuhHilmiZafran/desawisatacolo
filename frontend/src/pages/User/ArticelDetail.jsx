import React, { useEffect, useState } from "react";
import { CardFasilitas } from "../../components/CardFasilitas";
import Footer from "../../components/Footer";
import { useParams } from "react-router";
import axios from "axios";
import ImageViewer from "../../components/ImageViewer";
import CommentSection from "../../components/CommentSection";
import LogComment from "../../components/LogComment";
import ButtonPrimary from "../../components/ButtonPrimary";
import { NavLink } from "react-router-dom";
import FormReservationModal from "../../components/FormReservasiModal";

const ArticleDetail = () => {
  const { id } = useParams();
  const [tourPackages, setTourPackages] = useState(null);
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);

  // const [comments, setComments] = useState(null);

  //get data local storage
  // const dataUser = JSON.parse(localStorage.getItem("data"));
  // const userId = dataUser?.id;

  useEffect(() => {
    getTourPackageById();
  }, [id]);

  const getTourPackageById = async () => {
    if (id) {
      try {
        const url = `http://localhost:8080/api/tour-packages/${id}`;
        const response = await axios.get(url);
        setTourPackages(response.data);
      } catch (error) {
        console.error("Error fetching tourPackages data:", error);
        // Handle error (show an error message)
      }
    }
  };

  // useEffect(() => {
  //   fetchAllComment();
  // }, [id]);

  // const fetchAllComment = async () => {
  //   if (id) {
  //     try {
  //       const url = `http://localhost:8080/api/comments`;
  //       const response = await axios.get(url);
  //       setComments(response.data);
  //     } catch (error) {
  //       console.error("Error fetching tourPackages data:", error);
  //       // Handle error (show an error message)
  //     }
  //   }
  // };

 

  return (
    <>
      <div className="flex flex-col p-10">
        <div className="flex flex-col mb-5 md:flex-row justify-between">
          <div className="max-w-sm lg:max-w-[800px] md:max-w-[700px] mb-5 md:mr-5 flex-col justify-start items-start gap-5 inline-flex">
            {/* <img
              src="https://res.cloudinary.com/dzisbnmi0/image/upload/v1700667556/cld-sample-5.jpg"
              alt=""
              className="object-cover rounded-lg md:w-[700px] md:h-[430px]"
            /> */}

            {tourPackages?.image && (
              <ImageViewer imageName={tourPackages?.image} />
            )}
            <div className="w-full text-justify text-black text-3xl font-normal font-['Inter']">
              {tourPackages?.name
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </div>
            <div className="w-full text-justify text-black text-base font-normal font-['Inter']">
              {tourPackages?.description}
            </div>
            {/*
            <div className="w-full max-w-[300] md:max-w-[900px] justify-center items-center gap-5 flex">
              <img
                className="w-56 h-24 md:w-[300px] md:h-[300px] rounded-lg object-cover"
                src="https://res.cloudinary.com/dzisbnmi0/image/upload/v1700667555/cld-sample-2.jpg"
              />
              <img
                className="w-48 h-24 md:w-[380px] md:h-[300px] rounded-lg object-cover"
                src="https://res.cloudinary.com/dzisbnmi0/image/upload/v1700667548/samples/breakfast.jpg"
              />
            </div>
            <div className="w-full text-justify text-black text-base font-normal font-['Inter']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="self-stretch justify-center items-start gap-5 flex max-w-[1000px]">
              <img
                className="w-48 h-24 md:w-[380px] md:h-[300px] rounded-lg object-cover"
                src="https://res.cloudinary.com/dzisbnmi0/image/upload/v1700667548/samples/breakfast.jpg"
              />
              <img
                className="w-56 h-24 md:w-[300px] md:h-[300px] md:69 rounded-lg object-cover"
                src="https://res.cloudinary.com/dzisbnmi0/image/upload/v1700667555/cld-sample-2.jpg"
              />
            </div>
            <div className="w-full text-justify text-black text-base font-normal font-['Inter']">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div> */}
          </div>
          <div className="max-w-[300px] flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2 border rounded-md">
              <div className="text-center text-black text-2xl font-normal border-b w-full justify-center flex font-['Inter']">
                Jumlah Rombongan
              </div>
              <div className="text-justify text-black text-xl font-normal font-['Inter']">
                {tourPackages?.min_people} - {tourPackages?.max_people} Orang
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 border rounded-md">
              <div className="text-center text-black text-2xl font-normal border-b w-full justify-center flex font-['Inter']">
                Biaya Paket Wisata <br />
                (/Orang)
              </div>
              <div className="text-justify text-black text-xl font-normal font-['Inter']">
                RP. {tourPackages?.price}
              </div>
            </div>
            <div className="w-full flex flex-col items-center border rounded-md">
              <div className="text-justify text-black text-2xl font-normal border w-full flex justify-center font-['Inter']">
                Fasilitas
              </div>
              <div className="self-stretch justify-start items-start gap-5 p-3 flex flex-wrap">
                <CardFasilitas nama="Ojek" />
                <CardFasilitas nama="Ojek" />
                <CardFasilitas nama="Ojek" />
                <CardFasilitas nama="Ojek" />
                <CardFasilitas nama="Ojek" />
              </div>
            </div>
            <div className="columns">
              <ButtonPrimary
                className="w-full h-2 rounded-sm border text-green-600 border-green-600 justify-center items-center flex outline-green-600 hover:bg-green-300"
                onClick={isShowModalAdd}
              >
                <span className="text-sm font-medium">Reservasi Sekarang</span>
              </ButtonPrimary>
            </div>
            <div>
              <div className="text-justify text-black text-2xl font-normal border w-full flex justify-center font-['Inter']">
                Rekomendasi
              </div>
            </div>
            {/* <div className="w-full flex flex-col rounded-lg border border-zinc-300 justify-center items-center">
              <div className="text-justify text-black text-2xl border-b w-full flex justify-center font-normal font-['Inter']">
                Jam Buka
              </div>
              <div className="max-w-[280px] py-3 px-10 flex-col justify-between w-full items-center gap-2 flex">
                <div className="self-stretch justify-between items-center flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Senin
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Selasa
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Rabu
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Kamis
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Jumat
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Sabtu
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    Minggu
                  </div>
                  <div className="text-justify text-black text-md font-normal font-['Inter']">
                    00.00 - 23.59
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div>
          <div>Comment</div>
          <div>
            <CommentSection tourismId={id} userId={userId} />
          </div>
          <div>
            {comments?.map((comment) => (
              <LogComment key={comment.id} payload={comment} />
            ))}
          </div>
        </div> */}
      </div>
      
    </>
  );
};

export default ArticleDetail;
