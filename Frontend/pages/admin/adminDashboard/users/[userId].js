import AdminSideBar from "@/components/AdminSideBar";
import { useState } from "react";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';

import UserTable from "@/components/UserTable";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Button } from "@/components/ui/button";

export default function userId() {
    // session table Data
    let sessionColumnName = ["Session ID", "Gym Name", "City", "Session Timing", "Date", ""];
    let sessionRowInfo = [["#123456", "Atul Fitness Club", "Pathankot", "6PM - 8PM", "1-4-2024", "View Detail"]];

    // membership Table Data
    let membershipColumnName = ["Membership ID", "Membership Type", "Amount", "Start From", "Valid To", "Status", ""];
    let membershipRowInfo = [["#123456", "Basic Plan", "2099.00", "20-12-2023", "1-4-2024", "Active", "View Detail"]];

    // toggle switch state
    let [switchUserDetails, setSwitchUserDetails] = useState(false);
    let [basicplanFilter, setBasicPlanFilter] = useState(true);
    let [premiumplanFilter, setPremiumPlanFilter] = useState(true);
    let [primeplanFilter, setPrimePlanFilter] = useState(true);
    let [filter, setFilter] = useState(false);
    let [filterButtonCheck,setFilterButtonCheck] = useState(true)

    // session and Membership Switch

    let [sessionStyle, setSessionStyle] = useState({
        bgColor: "bg-green-600",
        textColor: "text-white",
        border: "border-none"
    });

    let [membershipStyle, setMembershipStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    });

    // filter switching
    let [filterButton,setFilterButton] = useState({
        bgColor : "bg-white",
        textColor : "text-gray-300",
        border : "border"
    })

    let [basicPlanStyle, setBasicPlanStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    });

    let [premiumPlanStyle, setPremiumPlanStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    });

    let [primePlanStyle, setPrimePlanStyle] = useState({
        bgColor: "bg-white",
        textColor: "text-gray-300",
        border: "border"
    })

    // style handler function

    const handleSessionStyle = () => {
        setSwitchUserDetails(false);

        sessionStyle.bgColor = "bg-green-600"
        sessionStyle.textColor = "text-white"
        sessionStyle.border = "border-none"

        setSessionStyle({ ...sessionStyle });

        membershipStyle.bgColor = "bg-white"
        membershipStyle.textColor = "text-gray-300"
        membershipStyle.border = "border"

        setMembershipStyle({ ...membershipStyle });
    }

    const handleMembershipStyle = () => {
        setSwitchUserDetails(true);

        membershipStyle.bgColor = "bg-green-600"
        membershipStyle.textColor = "text-white"
        membershipStyle.border = "border-none"

        setMembershipStyle({ ...membershipStyle });

        sessionStyle.bgColor = "bg-white"
        sessionStyle.textColor = "text-gray-300"
        sessionStyle.border = "border"

        setSessionStyle({ ...sessionStyle });

    }

    // filter handler function 

    const activeFilter = () => {
        setFilter(!filter);
        setFilterButtonCheck(!filterButtonCheck);

        if(filterButtonCheck) {
            filterButton.bgColor = "bg-green-600"
            filterButton.textColor = "text-white"
            filterButton.border = "border-none"

            setFilterButton({ ...filterButton })
        } else {
            filterButton.bgColor = "bg-white"
            filterButton.textColor = "text-gray-300"
            filterButton.border = "border"

            setFilterButton({ ...filterButton })
        }
    }

    const handleBasicFilter = () => {

        setBasicPlanFilter(!basicplanFilter);

        if (basicplanFilter) {
            basicPlanStyle.bgColor = "bg-green-600"
            basicPlanStyle.textColor = "text-white"
            basicPlanStyle.border = "border-none"

            setBasicPlanStyle({ ...basicPlanStyle })
        } else {

            basicPlanStyle.bgColor = "bg-white"
            basicPlanStyle.textColor = "text-gray-300"
            basicPlanStyle.border = "border"

            setBasicPlanStyle({ ...basicPlanStyle })
        }
    }

    const handlePremiumFilter = () => {
        setPremiumPlanFilter(!premiumplanFilter);

        if (premiumplanFilter) {

            premiumPlanStyle.bgColor = "bg-green-600"
            premiumPlanStyle.textColor = "text-white"
            premiumPlanStyle.border = "border-none"

            setPremiumPlanStyle({ ...premiumPlanStyle })

        } else {

            premiumPlanStyle.bgColor = "bg-white"
            premiumPlanStyle.textColor = "text-gray-300"
            premiumPlanStyle.border = "border"

            setPremiumPlanStyle({ ...premiumPlanStyle })

        }
    }


    const handlePrimeFilter = () => {

        setPrimePlanFilter(!primeplanFilter);

        if (primeplanFilter) {
            primePlanStyle.bgColor = "bg-green-600"
            primePlanStyle.textColor = "text-white"
            primePlanStyle.border = "border-none"

            setPrimePlanStyle({ ...primePlanStyle })
        } else {
            primePlanStyle.bgColor = "bg-white"
            primePlanStyle.textColor = "text-gray-300"
            primePlanStyle.border = "border"

            setPrimePlanStyle({ ...primePlanStyle })
        }
    }

    return (
        <>
            <div className=" flex">
                <AdminSideBar />
                <div>
                    <h1 className="ml-20 mt-8 text-3xl text-green-600 ">AADRASH KAUSHAL</h1>
                    <div className="flex justify-center space-x-6 w-[60vw] mt-20 ml-20 h-20 ">
                        <h1 className={`text-md  ml-20  ${sessionStyle.bgColor} ${sessionStyle.textColor} ${sessionStyle.border} h-12  pt-2.5 inline-block text-center w-56 rounded-md cursor-pointer`} onClick={handleSessionStyle}>Session Booking History</h1>
                        <h1 className={`${membershipStyle.textColor} text-md  ml-20 ${membershipStyle.border} ${membershipStyle.bgColor} h-12 pt-2.5 text-center w-56 rounded-md cursor-pointer`} onClick={handleMembershipStyle}>Membership History</h1>
                    </div>
                    {
                        switchUserDetails ?
                            <div className=" mx-auto  ml-20 space-y-8">
                                <div className="flex w-[60rem] h-36 bg-white border-2 border-r-2 rounded-xl">
                                    <div className="mt-2.5 ml-2 mr-5">
                                        <FitnessCenterIcon className=" h-8 w-8 text-green-600" />
                                    </div>
                                    <div>
                                        <div className=" flex">
                                            <h1 className=" text-2xl mt-2 text-green-600 w-48">Basic Plan</h1>
                                            <h1 className="text-sm mt-3.5 ml-[33rem] mr-2 text-gray-400">Membership #12345678</h1>
                                        </div>
                                        <div className="flex ml-[-2rem] mt-3">
                                            <CurrencyRupeeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                            <p className="text-md  text-gray-400 mt-2">2099.00</p>
                                        </div>
                                        <div className="flex ml-[-2rem] mt-3">
                                            <DateRangeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                            <div className="flex ">
                                                <h1 className="text-md  text-gray-400 mt-2">1-12-2023 To 1-4-2024</h1>
                                                <h1 className=" text-md text-green-600 ml-[35rem] mt-2 hover:text-green-700 cursor-pointer">View Details</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-between">
                                    <p className={` w-24 h-8 flex justify-evenly pt-1 rounded-md cursor-pointer  ${filterButton.border} ${filterButton.textColor}  ${filterButton.bgColor}  text-center `} onClick={activeFilter}>{ filter ? < FilterAltOffIcon className="" /> : < FilterAltIcon className="" />}Filter</p>
                                    {
                                        filter &&
                                        <div className=" flex space-x-4">
                                            <h1 className={` ${basicPlanStyle.textColor} w-32 rounded-lg text-center pt-0.5 h-8 ${basicPlanStyle.border} cursor-pointer ${basicPlanStyle.bgColor}`} onClick={handleBasicFilter}>Basic Plan</h1>
                                            <h1 className={` ${premiumPlanStyle.textColor} ${premiumPlanStyle.bgColor} w-32 rounded-lg text-center pt-0.5 h-8 cursor-pointer ${premiumPlanStyle.border}`} onClick={handlePremiumFilter}>Premium Plan</h1>
                                            <h1 className={` ${primePlanStyle.textColor} ${primePlanStyle.bgColor} w-32 rounded-lg text-center pt-0.5 h-8 cursor-pointer ${primePlanStyle.border}`} onClick={handlePrimeFilter}>Prime Plan</h1>
                                        </div>
                                    }

                                </div>
                                <div className="border-2 rounded-xl mt-10 mb-10">
                                    <UserTable columnName={membershipColumnName} rowData={membershipRowInfo} />
                                </div>
                            </div>
                            :
                            <div className=" mx-auto  ml-20">
                                <div className="flex w-[60rem] h-36 bg-white border-2 border-r-2 rounded-xl">
                                    <div className="mt-2.5 ml-2 mr-5">
                                        <CheckCircleIcon className=" h-8 w-8 text-green-600" />
                                    </div>
                                    <div>
                                        <div className=" flex">
                                            <h1 className=" text-2xl mt-2 text-green-600">Last Booked Session</h1>
                                            <h1 className="text-sm mt-3.5 ml-[33rem] mr-2 text-gray-400">Session #12345678</h1>
                                        </div>
                                        <div className="flex ml-[-2rem] mt-3">
                                            <LocationOnIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                            <p className="text-md  text-gray-400 mt-2">Atul Fitness Club</p>
                                        </div>
                                        <div className="flex ml-[-2rem] mt-3">
                                            <DateRangeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                            <div className="flex ">
                                                <p className="text-md  text-gray-400 mt-2">26-3-2024 12:00 PM</p>
                                                <p className=" text-md text-green-600 ml-[37.5rem] mt-2 hover:text-green-700 cursor-pointer">View Details</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-2 rounded-xl mt-10 mb-10">
                                    <UserTable columnName={sessionColumnName} rowData={sessionRowInfo} />
                                </div>
                            </div>
                    }

                </div>
            </div>
        </>
    );
}