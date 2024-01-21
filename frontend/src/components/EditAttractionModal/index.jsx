import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddRounded } from "@mui/icons-material";
import Modal from "../Modal";
import ButtonPrimary from "../ButtonPrimary";
import InputField from "../InputField";
import axios from "axios";
import { Skeleton } from "@mui/material";
import Dropdown from "../Dropdown";

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
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      setValue("thumbnail", attraction?.thumbnail);
      setSelectedImage(attraction?.thumbnail);
      setValue("description", attraction?.description);
      setValue("price", attraction?.price);
    }

    console.log(selectedImage);
  }, [attraction, setValue]);

  useEffect(() => {
    if (openModal) {
      fetchAttractionById();
    }
  }, [openModal, attractionId]);

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

  useEffect(() => {
    if (openModal) {
      getCategory();
    }
  }, [openModal]);

  const getCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data); // Assuming the attractions data is an array
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  useEffect(() => {
    if (attraction) {
      getCategoryById();
    }
  }, [openModal, attraction]);

  const getCategoryById = async () => {
    try {
      if (attraction?.category_id) {
        const url = `http://localhost:8080/api/categories/${attraction?.category_id}`;
        const response = await axios.get(url);
        setSelectedCategory(response.data);
      }
    } catch (error) {
      console.error("Error fetching attractions:", error);
    }
  };

  const handleSelectTopic = () => {};

  const handlePopup = (type, message) => {
    setIsPopup(true);
    setPopupSuccess(type);
    setPopupMessage(message);
    setTimeout(function () {
      setIsPopup(false);
    }, 2000);
  };
  const handleImageChange = (file) => {
    setSelectedImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const onSubmit = async (data) => {
    // const url = `http://localhost:8080/api/attractions/${attractionId}`;

    console.log("data: ", data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category_id", data.category_id);
    // formData.append("thumbnail", data.thumbnail[0]);

    // Check if a new thumbnail is being uploaded
    // formData.append('thumbnail', selectedImage);
    console.log(data.thumbnail[0]);

    if (data.thumbnail[0] instanceof File) {
      formData.append("thumbnail", data.thumbnail[0]);
    } else {
      formData.append("thumbnail", selectedImage); // Assuming selectedImage is a file input
    } 

    formData.append("description", data.description);
    formData.append("price", data.price);

    try {
      const config = {
        method: "POST",
        baseURL: "http://localhost:8080/api",
        url: `/attractions/${attractionId}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };

      // console.log(data);

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
        // }
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
            {/* <ImageUploader
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
            </ImageUploader> */}
            <label>
              image:
              <input type="file" {...register("thumbnail")} />
            </label>
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
            {/* <InputField
              name="category_id"
              label="Kategori"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            /> */}
            <Dropdown
              control={control}
              name={"category_id"}
              label={"Kategori"}
              placeholder={selectedCategory?.name}
              handleSelect={handleSelectTopic}
              errors={errors}
            >
              {categories.map((category) => (
                <option
                  label={category.name}
                  value={category.id}
                  key={category.id}
                >
                  {category.name}
                </option>
              ))}
            </Dropdown>
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
