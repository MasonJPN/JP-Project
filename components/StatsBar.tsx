


export default function StatsBar(){
    return (
        <div className="bg-[#3A3A3A] w-full h-50 flex justify-between items-center px-20 ">

              

            <div className="items-center justify-center flex flex-col gap-3 ">
                <h2 className="text-5xl text-[#C4873A] font-(family-name:--font-playfair)">50+</h2>
                <p className="text-2xl text-[#D6D0C4] ">Custom Builds Completed</p>
            </div>
            <hr className="w-0.5 h-40 bg-linear-to-b from-transparent via-[#C4873A] to-transparent" />
            <div className="items-center justify-center flex flex-col gap-3">
                <h2 className="text-5xl text-[#C4873A] font-(family-name:--font-playfair)">100%</h2>
                <p className="text-2xl text-[#D6D0C4]">Solid Wood Materials</p>
            </div>
            <hr className="w-0.5 h-40 bg-linear-to-b from-transparent via-[#C4873A] to-transparent" />
            <div className="items-center justify-center flex flex-col gap-3">
                <h2 className="text-5xl text-[#C4873A] font-(family-name:--font-playfair)">Handmade</h2>
                <p className="text-2xl text-[#D6D0C4]">Every Step of the Way</p>
            </div>

        </div>
    )
}