import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserSideBar from "@/components/UserSideBar";
import UserTable from "@/components/UserTable";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Membership() {
    let router = useRouter();
    let phoneNumber = router.query.userInfo
    let [fullName, setFullName] = useState();
    let [membershipDetails, setMembershipDetails] = useState([]);
    let [downloadLink, setDownloadLink] = useState();
    let [activeMembershipInfo, setActiveMembershipInfo] = useState({});
    let [activesubscription, setActiveSubscription] = useState(true);

    useEffect(() => {
        setFullName(localStorage.getItem("fullName"));
        try {

            let token = localStorage.getItem("token");
            const option = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            fetch('http://localhost/getMembershipDetails', option).then(async (res) => {

                let membershipInfo = await res.json();
                let membershipData = membershipInfo.data[0].paymentInfo

                let newMembershipInfo = [];

                membershipData.map((val) => {
                    let membership = Object.values(val);
                    setDownloadLink(membership[6]);
                    membership.pop();
                    membership.push('View Detail');
                    newMembershipInfo.push(membership);
                })

                setMembershipDetails(newMembershipInfo);

            }).catch((err) => {
                console.log(err);
            })

        } catch (err) {
            console.log(err);
        }
    }, [])

    useEffect(() => {
        try {

            let token = localStorage.getItem("token");
            const option = {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            fetch("http://localhost/getActiveMembershipDetails", option).then(async (res) => {

                let activeMembership = await res.json();

                if (activeMembership.response) {

                    let activedata = activeMembership.data[0].paymentInfo[0]

                    setActiveMembershipInfo(activedata);
                    console.log(activeMembershipInfo)

                } else {
                    setActiveSubscription(false);
                }

            }).catch((err) => {
                console.log(err);
            })

        } catch (err) {
            console.log(err)
        }
    }, [])


    let columnName = ["Membership ID", "Membership Type", "Amount", "Start From", "Valid To", "Status", ""];

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className=" flex">
                    <UserSideBar mobileNumber={phoneNumber} profileName={fullName} />
                    <div className=" mx-auto mt-12">
                        {
                            activesubscription ?
                                <div className="flex w-[60rem] h-36 bg-white border-2 border-r-2 rounded-xl">
                                    <div className="mt-2.5 ml-2 mr-5">
                                        <FitnessCenterIcon className=" h-8 w-8 text-green-600" />
                                    </div>
                                    <div>
                                        <div className=" flex">
                                            <h1 className=" text-2xl mt-2 text-green-600 w-48">{activeMembershipInfo.subscriptionName}</h1>
                                            <h1 className="text-sm mt-3.5 ml-[22rem]  text-gray-400">Membership #{activeMembershipInfo.subscriptionId}</h1>
                                        </div>
                                        <div className=" flex justify-between">
                                            <div className="flex ml-[-2rem] mt-3">
                                                <CurrencyRupeeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                                <p className="text-md  text-gray-400 mt-2">{activeMembershipInfo.paidAmount}</p>
                                            </div>
                                            <p className="text-green-600  mr-2   mt-5">{activeMembershipInfo.status}</p>
                                        </div>
                                        <div className="flex ml-[-2rem] mt-3">
                                            <DateRangeIcon className="h-6 w-6 mt-2 mr-2  text-green-600" />
                                            <div className="flex ">
                                                <h1 className="text-md  text-gray-400 mt-2">{activeMembershipInfo.startDate} To {activeMembershipInfo.endDate}</h1>
                                                <h1 className=" text-md text-green-600 ml-[37rem] mt-2 hover:text-green-700 cursor-pointer">View Details</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                <p className=" text-green-600 text-xl text-center">Does not have any membership</p>
                        }

                        <div className="border-2 rounded-xl mt-10 mb-10">
                            <UserTable columnName={columnName} rowData={membershipDetails} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}