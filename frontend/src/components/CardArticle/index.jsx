import moment from "moment";
import ImageViewer from "../ImageViewer";
import { NavLink } from "react-router-dom";

export const CardArticle = ({ payloads }) => {
  const { id, title, description, image, created_at } = payloads;
  const formatDate = moment(created_at).locale("id").format("D MMMM YYYY");

  return (
    <div className="max-w-md w-full bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        {image && (
          <ImageViewer imageName={image} className={"w-full h-[300px]"} />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-6">
          <div className="flex justify-between">
            <div>
              <NavLink to={`/detail-artikel/${id}`}>
                <h2 className="text-xl font-bold">{title}</h2>
              </NavLink>
              <p className="text-sm">{description}</p>
            </div>
            <p className="text-white-600">{formatDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
