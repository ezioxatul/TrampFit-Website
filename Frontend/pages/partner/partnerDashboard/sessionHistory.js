import PartnerTable from "@/components/PartnerTable";
import PartnerSideBar from "@/components/PartnerSideBar";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import SearchIcon from '@mui/icons-material/Search';




export default function sessionHistory() {
  let columnName = ["ID", "Name", "Timing", "Date"];
  let [rowData, setRowData] = useState([
    [1, "John Doe", "07:00", "22-05-2024", "View Detail"],
  ]);

  return (
    <div className="flex">
      <PartnerSideBar />
      <div>
        <h1 className=" text-green-600 text-3xl ml-24 mt-8"> Session Info. </h1>
        <div className=" mt-8  ml-24">
          <Input
            type="text"
            className=" text-lg  w-72 h-9 pl-10 border border-green-600"
            placeholder="Search"
          />
          <SearchIcon className="absolute ml-2  mt-[-1.7rem] h-5 w-5  text-green-600" />
        </div>
        <div className=" mt-8  ml-24 border rounded-md border-gray-200 ">
        <PartnerTable  columnName={columnName} rowData={rowData} />
        </div>
      </div>
    </div>
  );
}
