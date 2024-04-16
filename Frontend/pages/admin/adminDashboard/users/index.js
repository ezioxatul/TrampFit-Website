import AdminSideBar from "@/components/AdminSideBar";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SortIcon from '@mui/icons-material/Sort';
import UserTable from "@/components/UserTable";
export default function User() {

    let columnName = ['User ID', 'Name', 'City', 'Mobile Number', 'Email'];
    let rowData = ['1', 'Aadrash', 'Jalandhar', '9876860219', 'sharmaadarsh180@gmail.com', 'View Detail'];
    return (
        <>
            <div className=" flex">
                <AdminSideBar />
                <div className=" space-y-12">
                    <h1 className=" text-green-600 ml-20 text-2xl mt-8 "> User Info. </h1>
                    <div className="flex w-[80vw] justify-between">
                        <div className=" ml-20">
                            <Input type="text" className=" text-lg  w-80 h-11 pl-10 border border-green-600" placeholder="Search " />
                            <SearchIcon className="absolute ml-2  mt-[-2.1rem] h-6 w-6  text-green-600" />
                        </div>
                        <Button className=" w-20 h-11 flex justify-around hover:bg-green-700  bg-green-600  p-2 "><SortIcon className="" />  Sort</Button>
                    </div>
                    <div className="border-2 rounded-xl ml-20">
                        <UserTable columnName={columnName} rowData={rowData} />
                    </div>
                </div>
            </div>
        </>
    );
}