import Navbar from "@/components/Navbar";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
        
        <div className="flex">

        </div>
      <div className="flex flex-col justify- ml-4 text-left">
        <h1 className="text-4xl font-inter font-bold text-gray-800">Welcome Tramps!</h1>
        <p className="text-lg font-inter text-gray-600">This is some description text to make the layout more interesting.</p>
      </div>
      <div className="hero flex justify-end mr-4">
        <Image
          src="/hero-image2.png" // Path to your image
          alt="Description of the image" // Description of the image for accessibility
          width={400} // Reduced width of the image
          height={250} // Reduced height of the image
          className="object-cover"
        />
      


      </div>
    </>
  );
}


