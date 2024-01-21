import {
  Comment,
  CommentOutlined,
  Delete,
  Edit,
  Visibility,
} from "@mui/icons-material";
import ButtonPrimary from "../ButtonPrimary";
import moment from "moment/moment";
import { useState } from "react";
import ImageViewer from "../ImageViewer";

const CardAttractionAdmin = ({
  openModalEdit,
  openModalComment,
  payloads,
  deleteArticle,
}) => {
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const { thumbnail, name, created_at, category_id } = payloads;

  const formatDate = moment(created_at).locale("id").format("D MMMM YYYY");

  const handleOpenModalConfirm = () => {
    setIsShowModalConfirm(true);
  };

  const handleShowModalConfirm = (showModal) => {
    setIsShowModalConfirm(showModal);
  };

  const handleDeleteArticle = () => {
    //   deleteArticle(payloads.id);
    handleShowModalConfirm(false);
  };

  const handleImageError = (event) => {
    event.currentTarget.src =
      "https://res.cloudinary.com/dzisbnmi0/image/upload/v1700667555/cld-sample-2.jpg";
  };

  return (
    <div className="bg-white h-full w-full p-[16px] border border-solid mb-4">
      <div className="flex flex-row">
        {/* <img
          src={thumbnail}
          className="w-44 h-44 object-cover"
          onError={handleImageError}
        /> */}
        {/* <img
            className="object-cover w-full h-full"
            src={thumbnail}
            alt={name}
            onError={handleImageError}
          /> */}
        {thumbnail && (
          <ImageViewer imageName={thumbnail} className={" w-46 h-44"} />
        )}

        <div className="flex flex-col w-full gap-y-2 ml-[32px] justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium capitalize">{name}</h3>
            {/* <p className="capitalize text-[12px] font-normal">{author}</p> */}
            <p className="text-[12px] font-normal">{formatDate}</p>
            <div className="flex flex-row justify-start">
              <div className="flex gap-2 mr-5 font-medium">
                <Visibility style={{ fontSize: "1rem" }} />{" "}
                <span className="text-[12px] font-medium">100</span>
              </div>
              <div className="flex gap-2">
                <CommentOutlined style={{ fontSize: "1rem" }} />{" "}
                <span className="text-[12px] font-medium">100</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row py-[8px] gap-x-4 justify-end">
              <div className="columns">
                <ButtonPrimary
                  className="w-full h-2 rounded-sm border text-cyan-700 border-cyan-600 justify-center items-center flex outline-cyan-600 hover:bg-cyan-300"
                  onClick={openModalComment}
                >
                  <Comment style={{ fontSize: "1rem" }} />
                  {/* <span className="text-sm font-medium">Comment</span> */}
                </ButtonPrimary>
              </div>
              <div className="columns">
                <ButtonPrimary
                  className="w-full h-2 rounded-sm border text-green-600 border-green-600 justify-center items-center flex outline-green-600 hover:bg-green-300"
                  onClick={openModalEdit}
                >
                  <Edit style={{ fontSize: "1rem" }} />
                  {/* <span className="text-sm font-medium">Edit</span> */}
                </ButtonPrimary>
              </div>
              <div className="columns">
                <ButtonPrimary
                  className="w-full h-2 rounded-sm border text-red-600 border-red-600 justify-center items-center flex outline-red-600 hover:bg-red-300"
                  onClick={deleteArticle}
                >
                  <Delete style={{ fontSize: "1rem" }} />
                  {/* <span className="text-sm font-medium">Delete</span> */}
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAttractionAdmin;
