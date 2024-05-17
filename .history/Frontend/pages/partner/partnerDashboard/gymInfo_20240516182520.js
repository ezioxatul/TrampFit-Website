import PartnerSideBar from "@/components/PartnerSideBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function gymInfo() {
    const inputClassName = "w-96 text-lg border-2";
    const labelClassName = "text-lg text-green-600 font-normal";
    const containerClassName = "ml-80";
  return (
    <>
      <div className="flex">
        <PartnerSideBar />
        <div>
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
