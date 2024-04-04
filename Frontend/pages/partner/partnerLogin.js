import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const partnerLogin = () => {
  let [buttonText, setButtonText] = useState("Send OTP");
  let [inputTextController, setInputTextController] = useState(false);
  let [descriptionText, setDescriptionText] = useState();
  let [numberDisplay, setNumberDisplay] = useState();

  const sendOTP = () => {
    setButtonText("Submit OTP");
    setDescriptionText(numberDisplay);
    setNumberDisplay("");
    setInputTextController(true);
  };

  const getInputData = (event) => {
    if (event.target.name === "mobileNumber") {
      setNumberDisplay(event.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Card className="w-[350px] mx-auto mb-10">
          <CardHeader>
            <CardTitle className="text-green-700">Partner Login</CardTitle>
            <CardDescription>
              {inputTextController
                ? "OTP sent to "
                : "You will receive a text message to validate."}
              <span className=" font-bold">
                {inputTextController && descriptionText}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  {inputTextController ? (
                    <Input
                      className=""
                      id="name"
                      name="OTP"
                      value=""
                      placeholder="Enter the OTP"
                    />
                  ) : (
                    <Input
                      className=""
                      id="name"
                      name="mobileNumber"
                      onChange={getInputData}
                      value={numberDisplay}
                      placeholder="Enter Your Mobile Number"
                    />
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={sendOTP}
            >
              {buttonText}
            </Button>
          </CardFooter>
        </Card>
        <Footer />
      </div>
    </>
  );
};

export default partnerLogin;
