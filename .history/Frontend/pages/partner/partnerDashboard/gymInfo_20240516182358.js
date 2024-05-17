import PartnerSideBar from "@/components/PartnerSideBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function gymInfo() {
  return (
    <>
      <div>
        <PartnerSideBar />
        <div className="mr-32 space-y-2">
          <Label htmlFor="name">
            Name
          </Label>
          <Input type="text"  />
        </div>
      </div>
    </>
  );
}
