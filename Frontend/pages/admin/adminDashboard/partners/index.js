import AdminSideBar from "@/components/AdminSideBar";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SortIcon from '@mui/icons-material/Sort';
import UserTable from "@/components/UserTable";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function partners() {
    let [partnerInfo,setPartnerInfo] = useState([]);

    let columnName = ['Partner ID', 'Name', 'Mobile Number', 'Email', 'Status'];

    useEffect(() => {
        try {
            let token = localStorage.getItem("adminToken");

            const option = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }

            fetch('http://localhost/adminDashboard/getPartnersInfo', option).then(async (res) => {
                
                let partnerInfo = await res.json();

                let newPartnerData = [];

                partnerInfo.data.map((val) =>{
                    let partnerData = Object.values(val);
                    partnerData.push('View Detail');
                    newPartnerData.push(partnerData);
                })

                setPartnerInfo(newPartnerData);

            }).catch((err) => {
                console.log(err);
            })

        } catch (err) {
            console.log(err);
        }

    }, []);


    return (
        <>
            <div className=" flex">
                <AdminSideBar />
                <div className=" space-y-12">
                    <h1 className=" text-green-600 ml-20 text-2xl mt-8"> Partners Info. </h1>
                    <div className="flex w-[80vw] justify-between">
                        <div className=" ml-20">
                            <Input type="text" className=" text-lg  w-80 h-11 pl-10 border border-green-600" placeholder="Search" />
                            <SearchIcon className="absolute ml-2  mt-[-2.1rem] h-6 w-6  text-green-600" />
                        </div>
                        <Button className=" w-20 h-11 flex justify-around hover:bg-green-700  bg-green-600  p-2 "><SortIcon className="" />  Sort</Button>
                    </div>
                    <div className="border-2 rounded-xl ml-20">
                        <UserTable columnName={columnName} rowData={partnerInfo} />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
