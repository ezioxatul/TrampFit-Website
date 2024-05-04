import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepIcon from "@mui/material/StepIcon";
import CheckCircle from "@mui/icons-material/CheckCircle";
const GreenStepIcon = (props) => {
  if (props.completed) {
    return <CheckCircle {...props} className="text-green-500 size-7" />;
  } else if (props.active) {
    return (
      <CircleIcon {...props} className="text-green-500 drop-shadow-xl size-7" />
    );
  } else {
    return <CircleIcon {...props} className=" text-gray-400 size-7" />;
  }
};
const steps = ["Partner Details", "Document Verification", "Partner Contract"];

export default function partnerOnboarding() {
  
  
  let [activeStep, setActiveStep] = useState(0);
  let [details,setDetails] = useState({
    name:"",
    location:"",
    openingTime:"",
    closingTime:"",
    logo:"",
    interiorPhoto:"",
    description:"",
    gymQuestion:"",
    panNumber:"",
    panImage:"",
    gstNumber:"",
    bankAccountNumber:"",
    ifscCode:""

  })


  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }
  

  

  return (
    <>
      <Stepper className=" mt-14" activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={GreenStepIcon}>
              {" "}
              <span className=" text-base">{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? (
        <div className="flex justify-center items-center">
          <Card className=" w-[26rem] mt-8 text-green-600 space-y-5">
            <CardHeader>
              <CardTitle>Partner Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center space-y-5">
                  <div className="flex flex-col space-y-2.5 mt-1 mb-1">
                    <Label htmlFor="name">Gym Name</Label>
                    <Input id="gymName" placeholder="Name of your Gym" />
                  </div>
                  <div className="flex flex-col space-y-2.5 mt-1 mb-1">
                    <Label htmlFor="name">Gym Location</Label>
                    <Input id="gymLocation" placeholder="Location of your Gym" />
                  </div>
                  <Label htmlFor="openingTime">Gym Timing</Label>
                  <div className="flex space-x-4 mt-1 mb-1">
                    <Input
                      id="openingTime"
                      type="time"
                      className=" text-green-600 "
                      placeholder="Opening Time"
                    />
                    <Input
                      id="closingTime"
                      type="time"
                      className=" text-green-600"
                      placeholder="Closing Time"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">Gym Logo</Label>
                    <Input
                      className=" text-gray-500"
                      id="logo"
                      name="logo"
                      type="file"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">Gym Interior Photo</Label>
                    <Input
                      className=" text-gray-500"
                      name="interiorPhoto"
                      id="interiorPhoto"
                      type="file"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="textarea">Gym Description</Label>
                    <Textarea
                      id="gymDescription"
                      placeholder="Enter the Gym Description"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="textarea">
                      What will customers achieve?
                    </Label>
                    <Textarea id="questionDescription" placeholder="Enter your answer" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button name="partnerdetails" className=" bg-green-600 w-28 hover:bg-green-700" onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        </div>
      ) : activeStep === 1 ? (
        <div className="flex justify-center items-center">
          <Card className=" w-[26rem] mt-8 text-green-600 space-y-5">
            <CardHeader>
              <CardTitle>Document Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center space-y-5">
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">PAN Number</Label>
                    <Input
                      className=" text-gray-500"
                      id="panNumber"
                      required
                      placeholder="Enter your PAN Number"
                      type="text"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">Upload PAN Card</Label>
                    <Input
                      className=" text-gray-500"
                      id="gstNumber"
                      name="panImage"
                      type="file"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">GST Number</Label>
                    <Input
                      className=" text-gray-500"
                      id="gstNumber"
                      name="gstNumber"
                      placeholder="Enter your GST Number"
                      type="text"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">Bank Account Number</Label>
                    <Input
                      className=" text-gray-500"
                      id="bankAccountNumber"
                      placeholder="Enter your Bank Account Number"
                      type="text"
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center mt-1 mb-1 gap-2.5">
                    <Label htmlFor="picture">IFSC Code</Label>
                    <Input
                      className=" text-gray-500"
                      id="picture"
                      placeholder="Enter your Bank IFSC Code"
                      type="text"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button name="documentverification" className=" bg-green-600 w-28 hover:bg-green-700" onClick={handleNext}>Next</Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-green-600 text-center  mb-8">
            TrampFit Partner Contract
          </h2>
          <div className=" mb-5">
            <span className="font-semibold text-2xl  ">Parties</span>
            <ul className="list-disc pl-4 space-y-3 mt-3">
              <li>
                TrampFit: TrampFit is a fitness platform that connects customers
                with partnered gyms and fitness studios to provide workout
                opportunities.
              </li>
              <li>
                Partner: [Gym/Fitness Studio Name] is a fitness facility that
                wishes to partner with TrampFit to offer its services to
                TrampFit customers.
              </li>
            </ul>
          </div>

          <div className=" mb-5">
            <span className="font-semibold text-2xl  ">Term</span>
            <ul className="list-disc pl-4 space-y-3 mt-3">
              <li>
                The term of this Contract shall commence on the Effective Date
                and shall continue for a period of one (1) year.
              </li>
              <li>
                Upon the expiration of the initial term, this Contract shall
                automatically renew for successive one (1) year terms, unless
                either party provides written notice of termination at least
                three (3) months prior to the expiration date.
              </li>
            </ul>
          </div>

          <div className=" mb-5">
            <span className="font-semibold text-2xl  ">
              Partnership Obligations
            </span>
            <ul className="list-disc pl-4 space-y-3 mt-3">
              <li>
                Partner agrees to provide access to its gym/fitness studio
                facilities to TrampFit customers who have purchased a monthly
                membership from TrampFit.
              </li>
              <li>
                Partner shall maintain a workout schedule, address, and pictures
                on TrampFit's website, as provided by Partner, for the duration
                of this Contract.
              </li>
              <li>
                Partner agrees to accept payments from TrampFit for workouts
                attended by TrampFit customers at Partner's facility.
              </li>
              <li>
                Partner shall utilize TrampFit's Partner App and CRM to track
                reservations, payments, schedules, reports, and other relevant
                information.
              </li>
            </ul>
          </div>

          <div className=" space-x-1 ">
            <div className="flex items-center ">
              <Checkbox color="success" />
              <label htmlFor="terms" className="text-md ">
                Accept Terms and Conditions
              </label>
            </div>
          </div>
          <Button name="submit" className=" bg-green-600 hover:bg-green-700 float-right w-28 mb-8" onClick={handleNext}>Submit</Button>
        </div>
      )}
    </>
  );
}
