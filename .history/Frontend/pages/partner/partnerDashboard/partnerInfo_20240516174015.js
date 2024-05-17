import PartnerSideBar from "@/components/PartnerSideBar";
import { Avatar } from "@mui/material";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export default function partnerInfo() {
    const inputClassName = "w-96 text-lg border-2";
    const labelClassName = "text-lg text-green-600 font-normal";
    const containerClassName = "ml-80";

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex">
                    <PartnerSideBar />
                    <div className={`${containerClassName} mt-12`}>
                        <center><Avatar className="w-36 h-36 text-6xl bg-black" src="/avtar.png" /></center>
                    </div>
                </div>
                <div>
                    <h1 className={`${containerClassName} text-3xl mb-4`}>Personal Information</h1>
                    <div className={`${containerClassName} flex mb-10`}>
                        <div className="mr-32 space-y-2">
                            <Label htmlFor="name" className={labelClassName}>
                                Name
                            </Label>
                            <Input type="text" className={inputClassName} />
                        </div>
                        <div className="ml-32 space-y-2">
                            <Label htmlFor="city" className={labelClassName}>
                                City
                            </Label>
                            <Input type="text" className={inputClassName} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={`${containerClassName} text-3xl mb-4 mt-4`}>Contact Information</h1>
                    <div className={`${containerClassName} flex mb-10`}>
                        <div className="mr-32 space-y-2">
                            <Label htmlFor="name" className={labelClassName}>
                                Mobile Number
                            </Label>
                            <Input type="text" className={inputClassName} />
                        </div>
                        <div className="ml-32 space-y-2 mb-10">
                            <Label htmlFor="city" className={labelClassName}>
                                Email Address
                            </Label>
                            <Input type="text" className={inputClassName} />
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}
