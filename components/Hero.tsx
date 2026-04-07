


export default function Hero(){

    return (
        <div className="relative min-w-screen h-[80vh]">
             
             <img src="/HeroImage.png" className="w-full h-full object-cover brightness-70"/>


             <div className="absolute inset-0 flex flex-col justify-center items-center ml-8 px-4 text-[#F7F4E9]">
                <h1 className="text-5xl font-bold drop-shadow-md">XylonDesignCo.</h1>
                <h3 className="text-4xl mt-4 drop-shadow-md">Custom Hardwood Furniture, Built to pass on.</h3>
             </div>
        </div>
    )
}