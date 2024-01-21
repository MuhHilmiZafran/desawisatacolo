import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddRounded } from "@mui/icons-material";
import Modal from "../Modal";
import ButtonPrimary from "../ButtonPrimary";
import InputField from "../InputField";
import axios from "axios";

const AddArticleModal = ({ openModal, onClose, updateData }) => {
  const [topics, setTopics] = useState([]);
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
      formData.append("title", data.title);
      formData.append("image", data.image[0]); // Assuming image is a file input
      formData.append("description", data.description);

      console.log(data);

      await axios.post("http://localhost:8080/api/articles", formData, {
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
        <Modal.Title title={"Tambah Article Wisata"} />
        <div>
          <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name="title"
              label="title"
              type="text"
              placeholder="Ex : How to get women's right?"
              errors={errors}
              register={register}
            />

            <label>
              image:
              <input type="file" {...register("image")} />
            </label>
            {/* <InputField
              name="category_id"
              label="Kategori"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            /> */}
            {/* <InputField
              name="price"
              label="Price"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            /> */}
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
              <span className="text-[16px] font-medium text-black">Save</span>
            </ButtonPrimary>
          </form>

          <ButtonPrimary
            className="w-full flex justify-center items-center"
            onClick={handleClose}
          >
            <span className="text-[16px] font-medium text-black">Discard</span>
          </ButtonPrimary>
        </div>
      </Modal>
    </>
  );
};

export default AddArticleModal;
