import { useState } from "react";
import { CardDashboard } from "../../components/CardDashboard";
import SearchBar from "../../components/SearchBar";
import Tables from "../../components/Tables/Tables";
import TableHeader from "../../components/Tables/TableHeader";
import TableBody from "../../components/Tables/TableBody";

const DashboardAdmin = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchArticle = (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    setSearchValue(keyword);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
      <div>
        <SearchBar
          className="focus:outline-none w-72 text-neutralMediumLow"
          placeholder="Find something here ..."
          value={searchValue}
          onChange={handleSearchArticle}
        />
      </div>
      {/* <div>
        <Tables scroll>
          <TableHeader>
            <th className="w-[130px]">Date</th>
            <th className="w-[130px]">Transaction id</th>
            <th className="w-[130px]">User id</th>
            <th className="w-[130px]">Counselor id</th>
            <th className="w-[130px]">Counselor Name</th>
            <th className="w-[130px]">Method</th>
            <th className="w-[130px]">Topic</th>
            <th className="w-[130px]">Time</th>
            <th className="w-[130px]">Price</th>
            <th className="w-[130px]">Status</th>
          </TableHeader>
          <TableBody>
            
          </TableBody>
        </Tables>
      </div> */}
    </div>
  );
};

export default DashboardAdmin;
