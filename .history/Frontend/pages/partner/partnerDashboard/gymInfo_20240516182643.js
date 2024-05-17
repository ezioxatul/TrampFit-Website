import PartnerSideBar from "@/components/PartnerSideBar";
import { Input } from "@/components/ui/input";
import { Avatar } from "@mui/material";
import { Label } from "@/components/ui/label";

export default function gymInfo() {
    const inputClassName = "w-96 text-lg border-2";
    const labelClassName = "text-lg text-green-600 font-normal";
    const containerClassName = "ml-80";
  return (
    <>
      <div className="flex">
        <PartnerSideBar />
        <div className="mt-32 ml-16">
        <Avatar className="w-36 mx-auto mt-12 h-36 text-6xl bg-black" src="/gymname.png" />
        <div className="mr-32 space-y-2">
          <Label htmlFor="name" className={labelClassName}>
            Name
          </Label>
          <Input type="text" className={inputClassName} />
        </div>
      </div>
      </div>
    </>
  );
}
