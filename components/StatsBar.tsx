


export default function StatsBar(){
    return (
        <div className="bg-[#3A3A3A] w-full h-50 flex justify-between items-center px-20 mt-5">

              

            <div className="items-center justify-center flex flex-col gap-3 ">
                <h2 className="text-5xl text-[#C4873A]">50+</h2>
                <p className="text-2xl text-[#6B4A2E] ">Custom Builds Completed</p>
            </div>
            <hr className="w-[2px] h-40 bg-gradient-to-b from-transparent via-black to-transparent" />
            <div className="items-center justify-center flex flex-col gap-3">
                <h2 className="text-5xl text-[#C4873A]">100%</h2>
                <p className="text-2xl text-[#C4873A]">Solid Wood Materials</p>
            </div>
            <hr className="w-[2px] h-40 bg-gradient-to-b from-transparent via-black to-transparent" />
            <div className="items-center justify-center flex flex-col gap-3">
                <h2 className="text-5xl text-[#C4873A]">Handmade</h2>
                <p className="text-2xl text-[#6B4A2E]">Every Step of the Way</p>
            </div>

        </div>
    )
}