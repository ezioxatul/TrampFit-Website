import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  let [title, setTitle] = useState("Partner Login");
  let [buttonText, setButtonText] = useState("Send OTP");
  let [inputTextController, setInputTextController] = useState(false);
  let [descriptionText, setDescriptionText] = useState();
  let [numberDisplay, setNumberDisplay] = useState();
  let [otp, setOtp] = useState();
  let [partnerDetails, setPartnerDetails] = useState(false);

  const sendOTP = (event) => {
    if (buttonText === "Send OTP") {
      event.preventDefault();
      setButtonText("Submit OTP");
      setDescriptionText(numberDisplay);
      setNumberDisplay(" ");
      setTitle("Enter OTP");
      setInputTextController(true);
      setOtp("");
    } else if (buttonText === "Submit OTP") {
      if (otp === "123456") {
        toast.success("OTP Verified");
        setInputTextController(false);
        setNumberDisplay(descriptionText)
        setDescriptionText("Enter your details");
        setButtonText("Submit");
        setTitle("Partner Details");
        setPartnerDetails(true);
      }
    }
  };

  const getInputData = (event) => {
    if (event.target.name === "mobileNumber") {
      setNumberDisplay(event.target.value);
    } else if (event.target.name === "OTP") {
      setOtp(event.target.value);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Card className="w-[350px] mx-auto mb-16 mt-16">
          <CardHeader>
            <CardTitle className="text-green-700">{title}</CardTitle>
            <CardDescription>
              {descriptionText == null
                ? "You will receive a text message to validate."
                : inputTextController
                ? "OTP sent to "
                : "Please Enter your Details"}
              <span className=" font-bold">
                {inputTextController && descriptionText}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  {partnerDetails ? (
                    <>
                      <div className=" space-y-4">
                        <Input
                          className=""
                          id="name"
                          name="name"
                          placeholder="Enter your Name"
                        />
                        <Input
                          className=""
                          id="name"
                          name="mobileNumber"
                          value={numberDisplay}
                          placeholder="Enter Your Mobile Number"
                        />
                        <Input
                          className=""
                          id="email"
                          name="email"
                          placeholder="Enter your Email"
                        />
                      </div>
                    </>
                  ) : inputTextController ? (
                    <>
                      <Input
                        className=""
                        id="name"
                        name="OTP"
                        onChange={getInputData}
                        value={otp}
                        placeholder="Enter the OTP"
                      />
                    </>
                  ) : (
                    <>
                      <Input
                        className=""
                        id="name"
                        name="mobileNumber"
                        onChange={getInputData}
                        placeholder="Enter Your Mobile Number"
                      />
                    </>
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
