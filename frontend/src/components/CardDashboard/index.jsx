import { AddBoxOutlined } from "@mui/icons-material";


export const CardDashboard = () => {
  return (
    <div className="w-60 h-full px-6 py-4 bg-cyan-600 rounded-lg border border-white justify-start items-center gap-5 flex">
      <div className="flex justify-center text-white">
        <AddBoxOutlined />
      </div>
      <div>
        <div className="self-stretch text-white text-xl font-medium font-['Roboto'] leading-loose">
          123.456.789
        </div>
        <div className="self-stretch text-white text-sm font-normal font-['Roboto']">
          Total users
        </div>
      </div>
    </div>
  );
};
