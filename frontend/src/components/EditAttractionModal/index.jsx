import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddRounded } from "@mui/icons-material";
import Modal from "../Modal";
import ButtonPrimary from "../ButtonPrimary";
import InputField from "../InputField";
import axios from "axios";
import ImageUploader from "../ImageUploader";
import ImageThumbnail from "../ImageUploader/ImageThumbnail";
import { Skeleton } from "@mui/material";

const EditAttractionModal = ({
  openModal,
  onClose,
  updateData,
  attractionId,
}) => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(true);
  const [popupMessage, setPopupMessage] = useState("success");
  const [attraction, setAttraction] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset, // Add this line to set initial form values
  } = useForm();

  useEffect(() => {
    // Set initial form values when attractionData changes
    if (attraction) {
      setValue("name", attraction?.name);
      setValue("category_id", attraction?.category_id);
      setValue("thumbnail", attraction?.thumbnail[0]);
      setValue("description", attraction?.description);
      setValue("price", attraction?.price);
    }
  }, [attraction, setValue]);

  useEffect(() => {
    if (openModal) {
      fetchAttractionById();
    }
  }, [attractionId, openModal]);

  const handlePopup = (type, message) => {
    setIsPopup(true);
    setPopupSuccess(type);
    setPopupMessage(message);
    setTimeout(function () {
      setIsPopup(false);
    }, 2000);
  };

  const fetchAttractionById = async () => {
    if (attractionId) {
      try {
        const url = `http://localhost:8080/api/attractions/${attractionId}`;
        const response = await axios.get(url);
        setAttraction(response.data);
      } catch (error) {
        console.error("Error fetching attraction data:", error);
        // Handle error (show an error message)
        handlePopup(false, "Error fetching attraction data");
      }
    }
  };

  const handleImageChange = (file) => {
    setSelectedImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const onSubmit = async (data) => {
    const url = `http://localhost:8080/api/attractions/${attractionId}`;

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category_id", data.category_id);

    // Check if a new thumbnail is being uploaded
    // formData.append('thumbnail', selectedImage);

    formData.append("description", data.description);
    formData.append("price", data.price);

    try {
      const config = {
        method: 'PUT',
        baseURL: 'http://localhost:8080/api',
        url: `/attractions/${attractionId}`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      };

      // const response = await axios.put(url, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      const response = await axios(config);

      if (response.status === 200) {
        // Handle success (redirect or show a success message)
        handlePopup(true, "Data updated successfully");
        onClose(false); // Close the modal
      } else {
        // Handle unexpected response status
        handlePopup(false, "Unexpected response status: " + response.status);
      }
    } catch (error) {
      // Handle error (show an error message)
      console.error("Error updating data:", error);
      handlePopup(false, "Error updating data");
    }
  };

  const handleClose = () => {
    reset();
    onClose(false);
  };

  return (
    <>
      {/* Your existing modal JSX */}
      <Modal isOpen={openModal} onClose={handleClose} type={"edit"}>
        <Modal.Title title={"Edit Destinasi Wisata"} />
        <div>
          <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
            {/* Input fields and form elements (similar to the add modal) */}
            <ImageUploader
              className="mb-4"
              icon={<AddRounded />}
              handleChange={(file) => handleImageChange(file)}
            >
              {imagePreview ? (
                <>
                  {isLoading ? (
                    <Skeleton
                      variant="circular"
                      width={100 + "%"}
                      height={100 + "%"}
                    />
                  ) : (
                    <ImageThumbnail src={imagePreview} />
                  )}
                </>
              ) : (
                <ImageThumbnail alt={""} />
              )}
            </ImageUploader>
            <InputField
              name="name"
              label="name"
              type="text"
              placeholder="Ex : How to get women's right?"
              errors={errors}
              register={register}
            />

            {/* <label>
              Thumbnail:
              <input type="file" {...register("thumbnail")} />
            </label> */}
            <InputField
              name="category_id"
              label="Kategori"
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

            <ButtonPrimary
              className="w-full flex justify-center items-center"
              type="submit"
            >
              {" "}
              <span className="text-[16px] font-medium">Save Changes</span>
            </ButtonPrimary>
          </form>

          <ButtonPrimary
            className="w-full flex justify-center items-center"
            onClick={handleClose}
          >
            <span className="text-[16px] font-medium">Cancel</span>
          </ButtonPrimary>
        </div>
      </Modal>
    </>
  );
};

export default EditAttractionModal;
