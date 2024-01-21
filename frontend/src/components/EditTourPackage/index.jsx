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

const EditTourPackageModal = ({
  openModal,
  onClose,
  updateData,
  tourPackageId,
}) => {
  const [isPopup, setIsPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(true);
  const [popupMessage, setPopupMessage] = useState("success");
  const [tourPackage, setTourPackage] = useState(null);
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
    // Set initial form values when tourPackageData changes
    if (tourPackage) {
      setValue("name", tourPackage?.name);
      setValue("image", tourPackage?.image);
      setSelectedImage(tourPackage?.image);
      setValue("description", tourPackage?.description);
      setValue("price", tourPackage?.price);
      setValue("min_people", tourPackage?.min_people);
      setValue("max_people", tourPackage?.max_people);
    }

    console.log(selectedImage);
  }, [tourPackage, setValue]);

  useEffect(() => {
    if (openModal) {
      fetchTourPackageById();
    }
  }, [openModal, tourPackageId]);

  const fetchTourPackageById = async () => {
    if (tourPackageId) {
      try {
        const url = `http://localhost:8080/api/tour-packages/${tourPackageId}`;
        const response = await axios.get(url);
        setTourPackage(response.data);
      } catch (error) {
        console.error("Error fetching tourPackage data:", error);
        // Handle error (show an error message)
        handlePopup(false, "Error fetching tourPackage data");
      }
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
    // const url = `http://localhost:8080/api/tour-packages/${tourPackageId}`;

    console.log("data: ", data);
    const formData = new FormData();
    formData.append("name", data.name);
    // formData.append("image", data.image[0]);

    // Check if a new image is being uploaded
    // formData.append('image', selectedImage);
    console.log(data.image[0]);

    if (data.image[0] instanceof File) {
      formData.append("image", data.image[0]);
    } else {
      formData.append("image", selectedImage); // Assuming selectedImage is a file input
    }

    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("min_people", data.min_people);
    formData.append("max_people", data.max_people);

    try {
      const config = {
        method: "POST",
        baseURL: "http://localhost:8080/api",
        url: `/tour-packages/${tourPackageId}`,
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
        <Modal.Title title={"Edit Paket Wisata"} />
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
                    <Imageimage src={imagePreview} />
                  )}
                </>
              ) : (
                <Imageimage alt={""} />
              )}
            </ImageUploader> */}
            <label>
              image:
              <input type="file" {...register("image")} />
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
              image:
              <input type="file" {...register("image")} />
            </label> */}
            {/* <InputField
              name="category_id"
              label="Kategori"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            /> */}
            {/* <Dropdown
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
            </Dropdown> */}
            <InputField
              name="price"
              label="Harga"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            />
            <InputField
              name="min_people"
              label="Minimal Orang"
              type="number"
              placeholder="Ex : Ruby Jane"
              errors={errors}
              register={register}
            />
            <InputField
              name="max_people"
              label="Maksimal Orang"
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

export default EditTourPackageModal;
