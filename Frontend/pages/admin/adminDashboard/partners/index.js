import AdminSideBar from "@/components/AdminSideBar";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SortIcon from '@mui/icons-material/Sort';
import UserTable from "@/components/UserTable";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { useRouter } from "next/router";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';

export default function partners() {
    let router = useRouter();

    let [partnerInfo, setPartnerInfo] = useState([]);
    let [searchData, setSearchData] = useState();
    let [applySearch, setApplySearch] = useState(false);
    let [filterSwitch, setFilterSwitch] = useState(false);
    let [pendingSwitch, setPendingSwitch] = useState(true);
    let [approvedSwitch, setApprovedSwitch] = useState(true);
    let [rejectedSwitch, setRejectedSwitch] = useState(true);
    let [handleFilterSwitch, setHandleFilterSwitch] = useState(false);
    let [viewPartnerGymDetail, setViewPartnerGymDetail] = useState(false);

    let [statusFilter, setStatusFilter] = useState({
        pending: "",
        rejected: "",
        approved: ""
    });

    let [pendingStyle, setPendingStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    })

    let [approveStyle, setApproveStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    })

    let [rejectStyle, setRejectStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    })

    let filterStatus = ['Pending', 'Approved', 'Rejected'];

    let columnName = ['Partner ID', 'Name', 'Mobile Number', 'Email', 'Status'];

    useEffect(() => {
        if (statusFilter.pending === "" && statusFilter.rejected === "" && statusFilter.approved === "") {

            try {
                let token = localStorage.getItem("adminToken");
                if (token) {

                    const option = {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }

                    fetch('http://localhost/adminDashboard/getPartnersInfo', option).then(async (res) => {

                        let partnerInfo = await res.json();

                        if (partnerInfo.response) {

                            let newPartnerData = [];

                            partnerInfo.data.map((val) => {
                                let partnerData = Object.values(val);
                                partnerData.push('View Detail');
                                newPartnerData.push(partnerData);
                            })

                            setPartnerInfo(newPartnerData);
                        } else {
                            toast.error(partnerInfo.response);
                            setTimeout(() => {
                                router.push('/admin');
                            }, 3000);
                        }

                    }).catch((err) => {
                        console.log(err);
                    })

                } else {
                    router.push('/admin');
                }


            } catch (err) {
                console.log(err);
            }

        }
    }, [handleFilterSwitch]);

    // apply search 

    useEffect(() => {
        if (searchData != undefined) {
            try {

                const option = {
                    method: "GET"
                }

                fetch(`http://localhost/adminDashboard/searchPartner?searchText=${searchData}`, option).then(async (res) => {

                    let partnerInfo = await res.json();

                    let newPartnerData = [];

                    partnerInfo.data.map((val) => {
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
        }
    }, [applySearch])


    //apply Filter

    useEffect(() => {
        if (statusFilter.pending != "" || statusFilter.rejected != "" || statusFilter.approved != "") {

            try {

                const option = {
                    method: "GET"
                }

                fetch(`http://localhost/adminDashboard/filterPartner?pending=${statusFilter.pending}&approved=${statusFilter.approved}&rejected=${statusFilter.rejected}`).then(async (res) => {

                    let partnerInfo = await res.json();

                    let newPartnerData = [];

                    partnerInfo.data.map((val) => {
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

        }
    }, [handleFilterSwitch])

    const handlerSearchData = (e) => {

        setSearchData(e.target.value);
        console.log(searchData);
        setApplySearch(!applySearch);

    }

    const handleFilter = () => {
        setFilterSwitch(!filterSwitch);
    }

    const handleFilterData = (e) => {
        setHandleFilterSwitch(!handleFilterSwitch);
        if (e.target.id === "Pending") {

            setPendingSwitch(!pendingSwitch);

            if (pendingSwitch) {

                pendingStyle.bgColor = "bg-green-600",
                    pendingStyle.textColor = "text-white",
                    pendingStyle.border = "border-none"

                setPendingStyle({ ...pendingStyle })

                statusFilter.pending = e.target.id;

            } else {

                pendingStyle.bgColor = "bg-white",
                    pendingStyle.textColor = "text-gray-300",
                    pendingStyle.border = "border"

                setPendingStyle({ ...pendingStyle })

                statusFilter.pending = "";
            }

        } else if (e.target.id === "Approved") {
            setApprovedSwitch(!approvedSwitch);

            if (approvedSwitch) {
                approveStyle.bgColor = "bg-green-600",
                    approveStyle.textColor = "text-white",
                    approveStyle.border = "border-none"

                setApproveStyle({ ...approveStyle })

                statusFilter.approved = e.target.id;
            } else {
                approveStyle.bgColor = "bg-white",
                    approveStyle.textColor = "text-gray-300",
                    approveStyle.border = "border"

                setApproveStyle({ ...approveStyle })

                statusFilter.approved = "";
            }
        } else {

            setRejectedSwitch(!rejectedSwitch);

            if (rejectedSwitch) {
                rejectStyle.bgColor = "bg-green-600",
                    rejectStyle.textColor = "text-white",
                    rejectStyle.border = "border-none"

                setRejectStyle({ ...rejectStyle })
                statusFilter.rejected = e.target.id
            } else {
                rejectStyle.bgColor = "bg-white",
                    rejectStyle.textColor = "text-gray-300",
                    rejectStyle.border = "border"

                setRejectStyle({ ...rejectStyle })
                statusFilter.rejected = ""
            }
        }
        setStatusFilter({ ...statusFilter });
    }

    const handlePartnerGymDetail = (e) => {
        setViewPartnerGymDetail(true);
    }

    const closePartnerGymDetail = ()=> {
        setViewPartnerGymDetail(false);
    }


    return (
        <>
            <div className=" flex">
                <AdminSideBar />
                <div className=" space-y-12">
                    <h1 className=" text-green-600 ml-20 text-2xl mt-8"> Partners Info. </h1>
                    <div className="flex w-[80vw] justify-between">
                        <div className=" ml-20">
                            <Input type="text" className=" text-lg  w-80 h-11 pl-10 border border-green-600" placeholder="Search" onChange={handlerSearchData} />
                            <SearchIcon className="absolute ml-2  mt-[-2.1rem] h-6 w-6  text-green-600" />
                        </div>
                        <div className=" flex space-x-4">
                            <Button className=" w-20 h-11 flex justify-around hover:bg-green-700  bg-green-600  p-2 " onClick={handleFilter}>{filterSwitch ? <FilterAltOffIcon className="" /> : <FilterAltIcon className="" />} Filter</Button>
                            <Button className=" w-20 h-11 flex justify-around hover:bg-green-700  bg-green-600  p-2 "><SortIcon className="" />  Sort</Button>
                        </div>
                    </div>
                    {
                        filterSwitch &&
                        <div className="flex space-x-4 ml-20">
                            {
                                filterStatus.map((val, i) => {
                                    return (
                                        i === 0 ?
                                            <p className={`cursor-pointer ${pendingStyle.border} ${pendingStyle.bgColor} rounded-lg text-center p-2 text-sm ${pendingStyle.textColor} font-semibold w-20`} id={val} onClick={handleFilterData}>{val}</p>
                                            :
                                            i === 1 ? <p className={`cursor-pointer ${approveStyle.border} ${approveStyle.bgColor} rounded-lg text-center p-2 text-sm ${approveStyle.textColor} font-semibold w-20`} id={val} onClick={handleFilterData}>{val}</p>
                                                :
                                                <p className={`cursor-pointer ${rejectStyle.border} ${rejectStyle.bgColor} rounded-lg text-center p-2 text-sm ${rejectStyle.textColor} font-semibold w-20`} id={val} onClick={handleFilterData}>{val}</p>
                                    );
                                })
                            }
                        </div>
                    }

                    <div className="border-2 rounded-xl ml-20">
                        <UserTable columnName={columnName} rowData={partnerInfo} viewDetail={handlePartnerGymDetail} />
                    </div>

                    <Dialog open={viewPartnerGymDetail}>
                        <DialogContent className="w-[35rem] h-[30rem] space-y-6">
                        <p className=" cursor-pointer hover:text-green-600 transition text-center mt-[-1rem] float-right mr-[-1rem]" onClick={closePartnerGymDetail}><CloseIcon /></p>
                            <div className="flex justify-between mt-5 ml-4 mr-4">
                                <h1 className="text-green-600 text-xl flex">Dream Gym Fitness & spa</h1>
                                <p className="text-sm text-yellow-500 bg-yellow-100  text-center w-20 pt-0.5 h-[1.7rem] rounded-lg mt-1">Pending</p>
                            </div>
                        
                            <p className="text-green-600 ml-4">Timing  :<span className="text-gray-400"> 6:00 AM to 8:00 PM</span></p>
                          
                            <div className="ml-4 space-y-1">
                                <p className=" text-green-600">Location :</p>
                                <p className=" text-gray-400 ">Landmark-gurudwara
                                    gursagar near suian wala
                                    Hospital, sector 76,Mohali,
                                    141008 </p>    
                            </div>

                            <div className="ml-4 space-y-1">
                            <p className=" text-green-600">Description :</p>
                                <p className=" text-gray-400 ">Gyms provide a one-stop shop for your fitness journey.
                                 They typically have a variety of cardio and weightlifting equipment to suit different workout styles. 
                                 For those who prefer personalized guidance, there's the option of 
                                 hiring a personal trainer. Some gyms even
                                  go the extra mile with amenities like saunas, 
                                steam rooms, or childcare to make your workout experience more convenient and enjoyable. </p>    
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}