import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />

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
    </>
  );
}


