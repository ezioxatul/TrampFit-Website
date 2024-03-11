import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const about = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen"> 
                <Navbar/>
                    <h1 className=" text-center text-5xl mt-7">ABOUT US</h1>
                <Footer/>
            </div>
        </>

    )
}


export default about;
