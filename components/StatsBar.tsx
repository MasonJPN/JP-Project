


export default function StatsBar(){
    return (
        <div className="bg-[#EDE4D3] w-full h-50 flex justify-between items-center px-20">

              

            <div className="items-center justify-center flex flex-col gap-3 ">
                <h2 className="text-5xl text-[#3E2A1F]">50+</h2>
                <p className="text-2xl text-[#6B4A2E] ">Custom Builds Completed</p>
            </div>
            <hr className="w-[2px] h-40 bg-gradient-to-b from-transparent via-black to-transparent" />
            <div className="items-center justify-center flex flex-col gap-3">
                <h2 className="text-5xl text-[#3E2A1F]">100%</h2>
                <p className="text-2xl text-[#6B4A2E]">Solid Wood Materials</p>
            </div>
            <hr className="w-[2px] h-40 bg-gradient-to-b from-transparent via-black to-transparent" />
            <div className="items-center justify-center flex flex-col gap-3">
                <h2 className="text-5xl text-[#3E2A1F]">Handmade</h2>
                <p className="text-2xl text-[#6B4A2E]">Every Step of the Way</p>
            </div>

        </div>
    )
}