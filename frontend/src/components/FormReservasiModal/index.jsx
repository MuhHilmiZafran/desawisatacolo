import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddRounded } from "@mui/icons-material";
import Modal from "../Modal";
import ButtonPrimary from "../ButtonPrimary";
import InputField from "../InputField";
import axios from "axios";
import Dropdown from "../Dropdown";

const FormReservationModal = ({ openModal, onClose, tourPackage }) => {
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [isPopup, setIsPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(true);
  const [popupMessage, setPopupMessage] = useState("success");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   control,
  //   reset,
  // } = useForm();

  // useEffect(() => {
  //   getTopics();
  // }, []);

  const handlePopup = (type, message) => {
    setIsPopup(true);
    setPopupSuccess(type);
    setPopupMessage(message);
    setTimeout(function () {
      setIsPopup(false);
    }, 2000);
  };



  // const getTopics = async () => {
  //   const token = getAuthCookie();
  //   try {
  //     const response = await axios.get(`${VITE_API_BASE_URL}/users/public/topics`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setTopics(response.data.data.topics);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleImageChange = (file) => {
  //   setSelectedImage(file);
  //   const imageUrl = URL.createObjectURL(file);
  //   setImagePreview(imageUrl);
  // };

  const handleSelectTopic = () => {};

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category_id", data.category_id.value);
      formData.append("thumbnail", data.thumbnail[0]); // Assuming thumbnail is a file input
      formData.append("description", data.description);
      formData.append("price", data.price);

      console.log(data);

      await axios.post("http://localhost:8080/api/attractions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success (redirect or show a success message)
      console.log("Data added successfully");
    } catch (error) {
      // Handle error (show an error message)
      console.error("Error adding data:", error);
    }
  };

  const handleClose = () => {
    // reset();
    // setSelectedImage(null)
    // setImagePreview('');
    onClose(false);
  };

  return (
    <>
      {/* <Popup isSuccess={popupSuccess} isOpen={isPopup} message={popupMessage} /> */}

      <Modal isOpen={openModal} onClose={handleClose} type={"add"}>
        <Modal.Title title={"Tambah Destinasi Wisata"} />
        <div>
          <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name="name"
              label="Nama Wisata"
              type="text"
              placeholder="Ex : How to get women's right?"
              errors={errors}
              register={register}
            />
            <InputField
              name="name"
              label="name"
              type="text"
              placeholder="Ex : How to get women's right?"
              errors={errors}
              register={register}
            />

            <label>
              Thumbnail:
              <input type="file" {...register("thumbnail")} />
            </label>
            {/* <InputField
              name="category_id"
              label="Kategori"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            /> */}
            {/* <label>
              <select {...register("category_id")}>
                {category.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label> */}
            {/* <Dropdown
              control={control}
              name={"category_id"}
              label={"Kategori"}
              placeholder={"Pilih kategori"}
              handleSelect={handleSelectTopic}
              errors={errors}
            >
              {categories.map((category) => (
                <option
                  label={category.name}
                  value={category.id}
                  key={category.id}
                />
              ))}
            </Dropdown> */}
            <InputField
              name=""
              label="Jumlah Rombongan"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            />

            <InputField
              name="price"
              label="Price"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            />
            <label htmlFor="description">
              Deskripsi
              <textarea {...register("description")} />
            </label>
            {/* <TextEditor label={'Description'} name={'description'} register={register} control={control} errors={errors} />
            <Dropdown control={control} name={'topic'} label={'Topic'} placeholder={'Choose article`s Topics'} handleSelect={handleSelectTopic} errors={errors}>
              {topics?.map((topic) => (
                <option label={topic.name} value={topic.id} key={topic.id} />
              ))}
            </Dropdown> */}
            <ButtonPrimary className="w-full flex justify-center items-center">
              {" "}
              <span className="text-[16px] font-medium">Save</span>
            </ButtonPrimary>
          </form>

          <ButtonPrimary
            className="w-full flex justify-center items-center text-red-600"
            onClick={handleClose}
          >
            <span className="text-[16px] font-medium tect">Discard</span>
          </ButtonPrimary>
        </div>
      </Modal>
    </>
  );
};

export default FormReservationModal;
