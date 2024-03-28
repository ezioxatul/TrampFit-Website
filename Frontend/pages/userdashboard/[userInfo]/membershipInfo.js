import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserSideBar from "@/components/UserSideBar";
import UserTable from "@/components/UserTable";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useRouter } from "next/router";

export default function Membership() {
    let router = useRouter();
    let phoneNumber = router.query.userInfo
 
 
    let columnName = ["Membership ID", "Membership Type", "Amount", "Start From", "Valid To", "Status",""];
    let rowData = ["#123456", "Basic Plan", "2099.00", "20-12-2023", "1-4-2024", "Active","View Detail"];
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className=" flex">
                    <UserSideBar mobileNumber={phoneNumber}/>
                    <div className=" mx-auto mt-12">
                        <div className="flex w-[47rem] h-36 bg-white border-2 border-r-2 rounded-xl">
                            <div className="mt-2.5 ml-2 mr-5">
                                <FitnessCenterIcon className=" h-8 w-8 text-green-600" />
                            </div>
                            <div>
                                <div className=" flex">
                                    <h1 className=" text-2xl mt-2 text-green-600 w-48">Basic Plan</h1>
                                    <h1 className="text-sm mt-3.5 ml-[20rem] mr-2 text-gray-400">Membership #12345678</h1>
                                </div>
                                <div className="flex ml-[-2rem] mt-3">
                                    <CurrencyRupeeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                    <p className="text-md  text-gray-400 mt-2">2099.00</p>
                                </div>
                                <div className="flex ml-[-2rem] mt-3">
                                    <DateRangeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                    <div className="flex ">
                                        <p className="text-md  text-gray-400 mt-2">1-12-2023 To 1-4-2024</p>
                                        <p className=" text-md text-green-600 ml-[26rem] mt-2 hover:text-green-700 cursor-pointer">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 rounded-xl mt-10 mb-10">
                            <UserTable columnName={columnName} rowData={rowData} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}