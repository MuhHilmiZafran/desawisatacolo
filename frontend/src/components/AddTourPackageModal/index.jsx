import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddRounded } from "@mui/icons-material";
import Modal from "../Modal";
import ButtonPrimary from "../ButtonPrimary";
import InputField from "../InputField";
import axios from "axios";

const AddTourPackageModal = ({ openModal, onClose, updateData }) => {
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
      formData.append("name", data.name);
      formData.append("image", data.image[0]); // Assuming image is a file input
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("min_people", data.min_people);
      formData.append("max_people", data.max_people);

      console.log(data);

      await axios.post("http://localhost:8080/api/tour-packages", formData, {
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
              label="name"
              type="text"
              placeholder="Ex : How to get women's right?"
              errors={errors}
              register={register}
            />

            <label>
              image:
              <input type="file" {...register("image")} />
            </label>

            <InputField
              name="price"
              label="Price"
              type="number"
              placeholder="Ex : 20000"
              errors={errors}
              register={register}
            />
            <InputField
              name="min_people"
              label="Min. Orang"
              type="number"
              placeholder="Ex : 15"
              errors={errors}
              register={register}
            />
            <InputField
              name="max_people"
              label="Max. Orang"
              type="number"
              placeholder="Ex : 20"
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
            className="w-full flex justify-center items-center"
            onClick={handleClose}
          >
            <span className="text-[16px] font-medium">Discard</span>
          </ButtonPrimary>
        </div>
      </Modal>
    </>
  );
};

export default AddTourPackageModal;
