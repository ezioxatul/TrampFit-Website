import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { useEffect, useState } from "react";


export default function Home() {
  let [response, setResponse] = useState(false);
  let [avtar, setAvtar] = useState();

  useEffect(() => {
    try {
      let token = localStorage.getItem("token");
      if (token) {

        const option = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

        fetch('http://localhost/', option).then(async (response) => {

          let tokenChecker = await response.json();
          if (tokenChecker.response) {

            setResponse(true);
            setAvtar(tokenChecker.avtar);

          } else {
            setResponse(false);
          }

        }).catch((err) => {
          console.log(err);
        })

      } else {
        setResponse(false)
      }
    } catch (err) {
      console.log(err);
    }
  });

  let benefits = [
    {
      span1: "One Pass To Your fitness",
      span2: "Get fit at any fitness center near you,consult expert nutritionists, and get",
      span3: "customized exercise routines from a revolutionary A.I. based coach"
    }, {
      span1: "40+ Cities",
      span2: "TRAMPFIT is your smart membership to workout anywhere,anytime across 40+",
      span3: "cities of india"
    }, {
      span1: "Meet Like-minded Fitness Enthusiasts",
      span2: "Join the fast growing 45 lakh+ TRAMPFIT community. Get inspired,attend new",
      span3: "workout sessions and attract others like you"
    }
  ]
  return (
    <>
      <Navbar response={response} avtar={avtar} />


      {/* home section */}
      <div className="flex justify-between">
        <div className="flex flex-col ml-8 text-left mt-14 ">
          <h1 className=" text-6xl font-inter font-bold text-gray-800 mt-5 ">Welcome <span className="text-green-700"> Tramps!</span></h1>
          <p className="text-2xl font-inter text-gray-600 mt-5">This is some description text to make the layout more interesting.</p>
          <Button className=" w-36 h-12 hover:bg-green-700 text-lg bg-green-600 mt-5 p-2">Learn More</Button>
        </div>
        <div className="hero mr-4">
          <Image
            src="/hero-image2.png" // Path to your image
            alt="Description of the image" // Description of the image for accessibility
            width={400} // Reduced width of the image
            height={250} // Reduced height of the image
            className="object-cover"
          />
        </div>
      </div>


      {/* Description Section */}
      <div className="flex justify-between">
        <Image
          src="/hero-image2.png" // Path to your image
          alt="Description of the image" // Description of the image for accessibility
          width={400} // Reduced width of the image
          height={250} // Reduced height of the image
          className="object-cover ml-8"
        />
        <h1 className="flex flex-col mr-8 mt-28  text-right">
          <span className=" text-5xl mb-6 "><b>ONE <span className="text-green-700">MEMBERSHIP</span></b></span>
          <span className=" text-3xl mb-1">to India's Largest fitness network </span>
          <span className=" text-3xl mb-1">of <span className="text-3xl"><b>75,00+</b></span> gyms & fitness studios</span>
        </h1>
      </div>


      {/* benefits section */}
      <div className="flex flex-col mt-5 mb-28">
        <h1 className="text-5xl text-center underline"><b>BENEFITS</b></h1>
        <div className="flex justify-between mt-4">
          <div>
            {
              benefits.map((val) => {
                return (
                  <div className="flex mt-10">
                    <Image
                      src="/benefits1.png"
                      alt="icon"
                      width={64}
                      height={64}
                    />
                    <h1 className="flex flex-col ml-8" >
                      <span className=" text-2xl font-semibold mb-4">{val.span1}</span>
                      <span className=" text-lg">{val.span2}</span>
                      <span className=" text-lg">{val.span3}</span>
                    </h1>
                  </div>
                )
              })
            }
          </div>
          <div>
            <Image
              src="/hero-image2.png" // Path to your image
              alt="Description of the image" // Description of the image for accessibility
              width={400} // Reduced width of the image
              height={250} // Reduced height of the image
              className="object-cover mr-8"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


