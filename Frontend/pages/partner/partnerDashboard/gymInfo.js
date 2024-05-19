import PartnerSideBar from "@/components/PartnerSideBar";
import { Input } from "@/components/ui/input";
import Checkbox from "@mui/material/Checkbox";
import { Avatar } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Close } from "@radix-ui/react-toast";

export default function gymInfo() {
  const inputClassName = "w-96 text-lg border-2";
  const labelClassName = "text-lg text-green-600 font-normal";
  const containerClassName = "ml-80";

  let [addedSlots, setAddedSlots] = useState([]);
  let [slotTime, setSlotTime] = useState({Time:""});




  return (
    <>
      <div className="flex">
        <PartnerSideBar />

        {/* Gym Details Section */}
        <div className="flex-col">
          <div className="mt-8 ml-16 flex flex-col">
            <h1 className=" text-3xl text-green-600 font-semibold">
              Ezio Fitness
            </h1>
            <h1 className=" text-lg text-gray-400 mt-1">
              Near Post Office, Gandhi Chowk | Pathankot
            </h1>

            {/* Amenities Section */}
            <div className="mr-32 mt-10 space-y-5">
              <h1 className=" text-2xl ">Amenities</h1>
              <div className="flex flex-col">
                <div className="flex space-x-20">
                  <div className=" w-48">
                    <Checkbox color="success" />
                    <Label
                      htmlFor="name"
                      className="text-lg text-green-600 mt-1.5 font-normal"
                    >
                      Air Conditioner
                    </Label>
                  </div>
                  <div className=" w-48">
                    <Checkbox color="success" />
                    <Label
                      htmlFor="name"
                      className="text-lg text-green-600 mt-1.5 font-normal"
                    >
                      WiFi
                    </Label>
                  </div>
                  <div className=" w-48">
                    <Checkbox color="success" />
                    <Label
                      htmlFor="name"
                      className="text-lg text-green-600 mt-1.5 font-normal"
                    >
                      Parking
                    </Label>
                  </div>
                </div>
                <div className="flex space-x-20">
                  <div className=" w-48">
                    <Checkbox color="success" />
                    <Label
                      htmlFor="name"
                      className="text-lg text-green-600 mt-1.5 font-normal"
                    >
                      Shower
                    </Label>
                  </div>
                  <div className=" w-48">
                    <Checkbox color="success" />
                    <Label
                      htmlFor="name"
                      className="text-lg text-green-600 mt-1.5 font-normal"
                    >
                      Water Cooler
                    </Label>
                  </div>
                  <div className=" w-48">
                    <Checkbox color="success" />
                    <Label
                      htmlFor="name"
                      className="text-lg text-green-600 mt-1.5 font-normal"
                    >
                      Locker
                    </Label>
                  </div>
                </div>
                <div className="flex space-x-6 mt-5">
                  <Button className="w-20 bg-white hover:bg-gray-50 text-gray-400 border space-x-1">
                    <span>Cancel</span>
                  </Button>
                  <Button className="w-20 bg-green-600 hover:bg-green-700 space-x-1">
                    <span>Add</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Session Section */}

            <div className="mt-14">
              <h1 className=" text-2xl ">Sessions</h1>

              <div className="flex space-x-5 mt-8">
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="text-lg text-green-600 mt-1.5 font-normal"
                  >
                    Slot Timing
                  </Label>
                  <div className="flex space-x-6">
                    <Input type="time" className="w-36"></Input>
                    <Button className="w-24 bg-green-600 hover:bg-green-700 space-x-1">
                    Add Slot
                    </Button>
                  </div>
                </div>
              </div>

              <div className="w-[70vw] mt-4 flex space-x-4">
                <div className=" w-24 h-8 border-2 mt-4 rounded-md">
                  {" "}
                  <p className=" text-center mt-0.5 text-gray-400">06:00</p>
                </div>
                <div className=" w-24 h-8 border-2 mt-4 rounded-md"></div>
              </div>

              <div className="flex space-x-9 mt-7 mb-5">
              <Button className="w-20 bg-white hover:bg-gray-50 text-gray-400 border space-x-1">
                    <span>Cancel</span>
                  </Button>
              <Button className="w-24 bg-green-600 hover:bg-green-700 ">
                      Confirm
                    </Button>
                    </div>








            </div>
          </div>
        </div>
      </div>
    </>
  );
}
